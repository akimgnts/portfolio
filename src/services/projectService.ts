import { Project, ProjectFormData } from "../types/project";
import { projects as mockProjects } from "../data/projects";
import { localStorageService } from "./localStorageService";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

/**
 * Fetch all projects
 * Falls back to localStorage, then mock data if API is unavailable
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
    console.warn("Using local storage for projects");
    return localStorageService.getAllProjects().slice(skip, skip + take);
  }
}

/**
 * Fetch single project by slug
 * Falls back to localStorage, then mock data if API is unavailable
 */
export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`${API_URL}/api/projects/${slug}`);
    if (!response.ok) throw new Error("API error");
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.warn(`Using local storage for project ${slug}`);
    return localStorageService.getProjectBySlug(slug);
  }
}

/**
 * Create new project (admin)
 * Uses localStorage for local development
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
    console.warn("Using local storage to create project");
    return localStorageService.createProject(data);
  }
}

/**
 * Update project (admin)
 * Uses localStorage for local development
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
    console.warn("Using local storage to update project");
    return localStorageService.updateProject(slug, data);
  }
}

/**
 * Delete project (admin)
 * Uses localStorage for local development
 */
export async function deleteProject(slug: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/api/projects/${slug}`, {
      method: "DELETE",
    });
    return response.ok;
  } catch (error) {
    console.warn("Using local storage to delete project");
    return localStorageService.deleteProject(slug);
  }
}

/**
 * Slug validation (check uniqueness)
 * Uses localStorage for local development
 */
export async function isSlugAvailable(slug: string, excludeSlug?: string): Promise<boolean> {
  try {
    const response = await fetch(
      `${API_URL}/api/projects/check-slug?slug=${slug}`
    );
    if (!response.ok) throw new Error("API error");
    const { available } = await response.json();
    return available;
  } catch (error) {
    console.warn("Using local storage for slug check");
    return localStorageService.isSlugAvailable(slug, excludeSlug);
  }
}
