import type { Project, ProjectFormData } from "../types/project";
import { localStorageService } from "./localStorageService";
import { isProject, isProjectList } from "./projectValidation";

// The static portfolio works without a backend. Opt in to a remote API explicitly.
const API_URL = import.meta.env.VITE_API_URL?.trim().replace(/\/+$/, "");
const REQUEST_TIMEOUT_MS = 8000;

async function request(path: string, options: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(`${API_URL}/api/projects${path}`, { ...options, signal: controller.signal });
    // Consume the body within the deadline too: a server can send headers and stall.
    const body = await response.text();
    return new Response(body || null, { status: response.status, headers: response.headers });
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchProjects(skip = 0, take = 10): Promise<Project[]> {
  const offset = Math.max(0, Math.trunc(skip) || 0);
  const limit = Math.max(0, Math.trunc(take) || 0);
  if (API_URL) {
    try {
      const response = await request(`?${new URLSearchParams({ skip: String(offset), take: String(limit) })}`);
      if (!response.ok) throw new Error("Cannot load projects");
      const { data } = await response.json();
      if (!isProjectList(data)) throw new Error("Invalid projects response");
      return data;
    } catch {
      // Public pages remain available using their local content if the API is down.
    }
  }
  return localStorageService.getAllProjects().slice(offset, offset + limit);
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  if (API_URL) {
    try {
      const response = await request(`/${encodeURIComponent(slug)}`);
      if (response.status === 404) return null;
      if (!response.ok) throw new Error("Cannot load project");
      const { data } = await response.json();
      if (!isProject(data)) throw new Error("Invalid project response");
      return data;
    } catch {
      // Match the list's read-only fallback; writes never fall back across stores.
    }
  }
  return localStorageService.getProjectBySlug(slug);
}

async function writeProject(path: string, method: string, data: Partial<ProjectFormData>): Promise<Project | null> {
  try {
    const response = await request(path, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) return null;
    const { data: project } = await response.json();
    return isProject(project) ? project : null;
  } catch {
    return null;
  }
}

export async function createProject(data: ProjectFormData): Promise<Project | null> {
  return API_URL ? writeProject("", "POST", data) : localStorageService.createProject(data);
}

export async function updateProject(slug: string, data: Partial<ProjectFormData>): Promise<Project | null> {
  return API_URL ? writeProject(`/${encodeURIComponent(slug)}`, "PATCH", data) : localStorageService.updateProject(slug, data);
}

export async function deleteProject(slug: string): Promise<boolean> {
  if (!API_URL) return localStorageService.deleteProject(slug);
  try {
    return (await request(`/${encodeURIComponent(slug)}`, { method: "DELETE" })).ok;
  } catch {
    return false;
  }
}

export async function isSlugAvailable(slug: string, excludeSlug?: string): Promise<boolean> {
  if (!slug.trim()) return false;
  if (!API_URL) return localStorageService.isSlugAvailable(slug, excludeSlug);
  try {
    const params = new URLSearchParams({ slug });
    if (excludeSlug) params.set("excludeSlug", excludeSlug);
    const response = await request(`/check-slug?${params}`);
    if (!response.ok) return false;
    const { available } = await response.json();
    return available === true;
  } catch {
    return false;
  }
}
