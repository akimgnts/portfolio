import assert from 'node:assert/strict';
import { test, beforeEach } from 'node:test';
import { build } from 'esbuild';

async function loadServices(apiUrl) {
  const result = await build({
    stdin: {
      contents: 'export * from "./src/services/projectService.ts"; export { localStorageService } from "./src/services/localStorageService.ts";',
      resolveDir: process.cwd(),
    },
    bundle: true, write: false, platform: 'node', format: 'esm',
    define: { 'import.meta.env.VITE_API_URL': JSON.stringify(apiUrl) },
  });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
}

const local = await loadServices('');
const remote = await loadServices('https://portfolio.example/api-root/');
let saved;
let fetchCalls;
const newProject = { title: 'New project', slug: 'new-project', description: 'A regression test' };

beforeEach(() => {
  saved = new Map();
  fetchCalls = [];
  globalThis.window = { localStorage: {
    getItem: (key) => saved.get(key) ?? null,
    setItem: (key, value) => saved.set(key, value),
  } };
  globalThis.fetch = async (...args) => {
    fetchCalls.push(args);
    throw new Error('Network unavailable');
  };
});

test('static mode loads and persists CRUD without a backend request', async () => {
  const count = (await local.fetchProjects()).length;
  assert.ok(count > 0);
  const created = await local.createProject(newProject);
  assert.ok(created?.id);
  assert.equal((await local.fetchProjectBySlug(newProject.slug)).title, newProject.title);
  assert.equal((await local.updateProject(newProject.slug, { title: 'Updated' })).title, 'Updated');
  assert.equal(await local.deleteProject(newProject.slug), true);
  assert.equal(await local.fetchProjectBySlug(newProject.slug), null);
  assert.equal((await local.fetchProjects()).length, count);
  assert.equal(fetchCalls.length, 0);
});

test('reading and failed writes never mutate bundled defaults', async () => {
  const projects = await local.fetchProjects();
  const title = projects[0].title;
  projects[0].title = 'Mutated';
  assert.equal((await local.fetchProjects())[0].title, title);
  window.localStorage.setItem = () => { throw new Error('QuotaExceededError'); };
  assert.equal(await local.createProject(newProject), null);
  assert.equal(await local.updateProject(projects[0].slug, { title: 'Lost write' }), null);
  assert.equal(await local.deleteProject(projects[0].slug), false);
  assert.equal((await local.fetchProjects())[0].title, title);
});

test('corrupt, malformed, or inaccessible storage keeps public content readable without overwriting it', async () => {
  for (const value of ['{broken', 'null', '{}', '[{"slug":"broken"}]', '[{"id":1,"slug":"bad","title":"Bad","description":"Bad","stack":42}]']) {
    saved.set('portfolio_projects', value);
    assert.ok((await local.fetchProjects()).length > 0);
    assert.equal(await local.createProject(newProject), null);
    assert.equal(saved.get('portfolio_projects'), value);
  }
  Object.defineProperty(window, 'localStorage', { get: () => { throw new Error('SecurityError'); } });
  assert.ok((await local.fetchProjects()).length > 0);
  assert.equal(await local.createProject(newProject), null);
});

test('empty saved lists stay empty and duplicate slugs cannot overwrite projects', async () => {
  saved.set('portfolio_projects', '[]');
  assert.deepEqual(await local.fetchProjects(), []);
  assert.ok(await local.createProject(newProject));
  assert.equal(await local.createProject(newProject), null);
  assert.ok(await local.createProject({ ...newProject, slug: 'second' }));
  assert.equal(await local.updateProject('second', { slug: newProject.slug }), null);
  assert.equal(await local.isSlugAvailable(newProject.slug), false);
  assert.equal(await local.isSlugAvailable(newProject.slug, newProject.slug), true);
});

test('remote network and HTTP failures never turn into successful local writes', async () => {
  for (const status of [null, 401, 409, 500]) {
    globalThis.fetch = async () => {
      if (status === null) throw new Error('Offline');
      return new Response('{}', { status });
    };
    assert.equal(await remote.createProject(newProject), null);
    assert.equal(await remote.updateProject('elevia', { title: 'Lost write' }), null);
    assert.equal(await remote.deleteProject('elevia'), false);
    assert.equal(await remote.isSlugAvailable('new-project'), false);
    assert.equal(saved.size, 0);
  }
});

test('remote responses are validated and 404 does not become a local project', async () => {
  globalThis.fetch = async () => new Response('{"data":{}}');
  assert.ok((await remote.fetchProjects()).length > 0);
  assert.equal(await remote.createProject(newProject), null);
  globalThis.fetch = async () => new Response(null, { status: 404 });
  assert.equal(await remote.fetchProjectBySlug('elevia'), null);
});

test('remote routes encode slugs, pass exclusions and accept valid responses', async () => {
  const project = { ...newProject, id: 'remote-id' };
  globalThis.fetch = async (url, options) => {
    fetchCalls.push([url, options]);
    return new Response(JSON.stringify(url.includes('check-slug') ? { available: true } : { data: project }));
  };
  assert.deepEqual(await remote.createProject(newProject), project);
  assert.deepEqual(await remote.fetchProjectBySlug('one/two?x'), project);
  assert.equal(fetchCalls[1][0], 'https://portfolio.example/api-root/api/projects/one%2Ftwo%3Fx');
  assert.ok(fetchCalls[1][1].signal instanceof AbortSignal);
  assert.equal(await remote.isSlugAvailable('a&b', 'old slug'), true);
  assert.equal(fetchCalls[2][0], 'https://portfolio.example/api-root/api/projects/check-slug?slug=a%26b&excludeSlug=old+slug');
  globalThis.fetch = async () => new Response(null, { status: 204 });
  assert.equal(await remote.deleteProject('elevia'), true);
});

test('an unresponsive API body is aborted within the configured deadline', async () => {
  const originalSetTimeout = globalThis.setTimeout;
  let deadline;
  let requestSignal;
  globalThis.setTimeout = (callback, delay) => {
    deadline = delay;
    return originalSetTimeout(callback, 0);
  };
  globalThis.fetch = async (_url, { signal }) => {
    requestSignal = signal;
    return { text: () => new Promise((_resolve, reject) => {
      signal.addEventListener('abort', () => reject(new Error('Aborted')), { once: true });
    }) };
  };
  try {
    assert.ok((await remote.fetchProjects()).length > 0);
    assert.equal(deadline, 8000);
    assert.equal(requestSignal.aborted, true);
  } finally {
    globalThis.setTimeout = originalSetTimeout;
  }
});
