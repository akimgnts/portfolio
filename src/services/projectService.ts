import { Project, ProjectFormData } from "../types/project";
import { projects as mockProjects } from "../data/projects";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

/**
 * Fetch all projects
 * Falls back to mock data if API is unavailable
 */
export async function fetchProjects(skip = 0, take = 10): Promise<Project[]> {
  try {
    const response = await fetch(
      `${API_URL}/api/projects?skip=${skip}&take=${take}`
    );
    if (!response.ok) throw new Error("API error");
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.warn("Failed to fetch projects from API, using mock data:", error);
    return mockProjects as Project[];
  }
}

/**
 * Fetch single project by slug
 * Falls back to mock data if API is unavailable
 */
export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`${API_URL}/api/projects/${slug}`);
    if (!response.ok) throw new Error("API error");
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.warn(`Failed to fetch project ${slug} from API, using mock data:`, error);
    return (mockProjects as Project[]).find((p) => p.slug === slug) || null;
  }
}

/**
 * Create new project (admin)
 */
export async function createProject(
  data: ProjectFormData
): Promise<Project | null> {
  try {
    const response = await fetch(`${API_URL}/api/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("API error");
    const { data: project } = await response.json();
    return project;
  } catch (error) {
    console.error("Failed to create project:", error);
    return null;
  }
}

/**
 * Update project (admin)
 */
export async function updateProject(
  slug: string,
  data: Partial<ProjectFormData>
): Promise<Project | null> {
  try {
    const response = await fetch(`${API_URL}/api/projects/${slug}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("API error");
    const { data: project } = await response.json();
    return project;
  } catch (error) {
    console.error("Failed to update project:", error);
    return null;
  }
}

/**
 * Delete project (admin)
 */
export async function deleteProject(slug: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/api/projects/${slug}`, {
      method: "DELETE",
    });
    return response.ok;
  } catch (error) {
    console.error("Failed to delete project:", error);
    return false;
  }
}

/**
 * Slug validation (check uniqueness)
 * For now, checks against mock data
 */
export async function isSlugAvailable(slug: string, excludeId?: string): Promise<boolean> {
  try {
    const response = await fetch(
      `${API_URL}/api/projects/check-slug?slug=${slug}`
    );
    if (!response.ok) throw new Error("API error");
    const { available } = await response.json();
    return available;
  } catch (error) {
    console.warn("Failed to check slug availability, checking mock data:", error);
    const existingSlug = (mockProjects as Project[]).find((p) => p.slug === slug);
    return !existingSlug;
  }
}
