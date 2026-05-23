export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string; // short, for cards
  fullDescription?: string;
  problem?: string;
  approach?: string;
  architecture?: string;
  role?: string;
  outcome?: string;
  lessons?: string[];
  results?: string[];
  technologies: string[];
  accentColor?: string;
  accentHover?: string;
  year?: number;
  featured?: boolean;
  published?: boolean;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;

  // Admin fields
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  githubUrl?: string;
  demoUrl?: string;
  status?: "draft" | "published" | "archived";
}

export interface ProjectFormData {
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  problem: string;
  approach: string;
  architecture: string;
  role: string;
  outcome: string;
  lessons: string[];
  results: string[];
  technologies: string[];
  year: number;
  featured: boolean;
  published: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  githubUrl: string;
  demoUrl: string;
  accentColor: string;
  accentHover: string;
}
