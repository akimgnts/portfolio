import type { Project, ProjectFormData } from "../types/project";
import { projects as defaultProjects } from "../data/projects";
import { isProject, isProjectList } from "./projectValidation";

const STORAGE_KEY = "portfolio_projects";
const defaults = (): Project[] => structuredClone(defaultProjects) as Project[];

function readProjects(): Project[] {
  if (typeof window === "undefined") return defaults();
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === null) return defaults();
  const parsed: unknown = JSON.parse(stored);
  if (!isProjectList(parsed)) throw new Error("Invalid saved projects");
  return parsed;
}

function saveProjects(projects: Project[]): void {
  if (!isProjectList(projects)) throw new Error("Invalid project data");
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export const localStorageService = {
  getAllProjects(): Project[] {
    try {
      return readProjects();
    } catch {
      // Keep the portfolio readable, without overwriting damaged or inaccessible data.
      return defaults();
    }
  },

  getProjectBySlug(slug: string): Project | null {
    return this.getAllProjects().find((project) => project.slug === slug) ?? null;
  },

  createProject(data: ProjectFormData): Project | null {
    try {
      const projects = readProjects();
      if (projects.some((project) => project.slug === data.slug)) return null;
      const now = new Date().toISOString();
      const project: Project = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: now,
        updatedAt: now,
        published: data.published ?? true,
      };
      if (!isProject(project)) return null;
      saveProjects([...projects, project]);
      return project;
    } catch {
      return null;
    }
  },

  updateProject(slug: string, data: Partial<ProjectFormData>): Project | null {
    try {
      const projects = readProjects();
      const index = projects.findIndex((project) => project.slug === slug);
      if (index === -1 || projects.some((project) => project.slug === data.slug && project.slug !== slug)) return null;
      const updated = { ...projects[index], ...data, updatedAt: new Date().toISOString() };
      projects[index] = updated;
      saveProjects(projects);
      return updated;
    } catch {
      return null;
    }
  },

  deleteProject(slug: string): boolean {
    try {
      const projects = readProjects();
      const filtered = projects.filter((project) => project.slug !== slug);
      if (filtered.length === projects.length) return false;
      saveProjects(filtered);
      return true;
    } catch {
      return false;
    }
  },

  isSlugAvailable(slug: string, excludeSlug?: string): boolean {
    try {
      return slug.trim().length > 0 && !readProjects().some((project) => project.slug === slug && project.slug !== excludeSlug);
    } catch {
      return false;
    }
  },

  resetToDefaults(): boolean {
    try {
      saveProjects(defaults());
      return true;
    } catch {
      return false;
    }
  },
};
