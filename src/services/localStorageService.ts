import { Project, ProjectFormData } from "../types/project";
import { projects as defaultProjects } from "../data/projects";

const STORAGE_KEY = "portfolio_projects";

// Initialize with default projects on first load
function initializeProjects(): Project[] {
  if (typeof window === "undefined") return defaultProjects as Project[];

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse stored projects:", e);
    }
  }

  // First time - store defaults
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
  return defaultProjects as Project[];
}

export const localStorageService = {
  // Read all projects
  getAllProjects(): Project[] {
    if (typeof window === "undefined") return defaultProjects as Project[];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : (defaultProjects as Project[]);
  },

  // Get single project by slug
  getProjectBySlug(slug: string): Project | null {
    const projects = this.getAllProjects();
    return projects.find((p) => p.slug === slug) || null;
  },

  // Create project
  createProject(data: ProjectFormData): Project {
    const projects = this.getAllProjects();
    const newProject: Project = {
      ...data,
      id: String(Date.now()),
      slug: data.slug,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      published: data.published ?? true,
    };
    projects.push(newProject);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    return newProject;
  },

  // Update project
  updateProject(slug: string, data: Partial<ProjectFormData>): Project | null {
    const projects = this.getAllProjects();
    const idx = projects.findIndex((p) => p.slug === slug);
    if (idx === -1) return null;

    const updated: Project = {
      ...projects[idx],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    projects[idx] = updated;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    return updated;
  },

  // Delete project
  deleteProject(slug: string): boolean {
    const projects = this.getAllProjects();
    const filtered = projects.filter((p) => p.slug !== slug);
    if (filtered.length === projects.length) return false;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  },

  // Check slug availability
  isSlugAvailable(slug: string, excludeSlug?: string): boolean {
    const projects = this.getAllProjects();
    return !projects.some((p) => p.slug === slug && p.slug !== excludeSlug);
  },

  // Reset to defaults
  resetToDefaults(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
  },
};
