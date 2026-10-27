import type { Project } from "../types/project";

const textFields = [
  "fullDescription", "observed_problem", "impact", "affected_users", "key_observation",
  "hypothesis", "architecture", "workflows", "automation_logic", "pipelines",
  "friction_reduction", "simplification", "infra", "APIs", "data_sources", "role",
  "outcome", "current_limits", "tradeoffs", "next_steps", "future_vision",
  "accentColor", "accentHover", "publishedAt", "createdAt", "updatedAt", "seoTitle",
  "seoDescription", "githubUrl", "demoUrl", "status",
];
const listFields = ["stack", "technologies", "results", "learnings", "lessons", "seoKeywords"];

// Validate data from storage and the API before it reaches React's render methods.
export function isProject(value: unknown): value is Project {
  if (!value || typeof value !== "object") return false;
  const project = value as Record<string, unknown>;
  return (
    (typeof project.id === "string" || typeof project.id === "number") &&
    typeof project.slug === "string" && project.slug.length > 0 &&
    typeof project.title === "string" && project.title.length > 0 &&
    typeof project.description === "string" &&
    textFields.every((key) => project[key] == null || typeof project[key] === "string") &&
    listFields.every((key) => project[key] == null || (
      Array.isArray(project[key]) && project[key].every((item) => typeof item === "string")
    )) &&
    ["published", "featured"].every((key) => project[key] == null || typeof project[key] === "boolean") &&
    (project.year == null || (typeof project.year === "number" && Number.isFinite(project.year)))
  );
}

export function isProjectList(value: unknown): value is Project[] {
  return Array.isArray(value) && value.every(isProject);
}
