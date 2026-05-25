export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string; // short, for cards
  fullDescription?: string;

  // Friction: what problem were we solving?
  observed_problem?: string;
  impact?: string;
  affected_users?: string;

  // Signal: what did we observe?
  key_observation?: string;
  hypothesis?: string;

  // System: what did we build?
  architecture?: string;
  workflows?: string;
  automation_logic?: string;
  pipelines?: string;

  // Reduction: what changed?
  friction_reduction?: string;
  simplification?: string;

  // Technical: stack & infrastructure
  stack?: string[];
  infra?: string;
  APIs?: string;
  data_sources?: string;
  technologies?: string[];

  // Outcome: what happened?
  role?: string;
  outcome?: string;
  results?: string[];
  learnings?: string[];
  lessons?: string[];

  // Limits: constraints & tradeoffs
  current_limits?: string;
  tradeoffs?: string;

  // Future: next chapter
  next_steps?: string;
  future_vision?: string;

  // Visual & metadata
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

  // Friction
  observed_problem: string;
  impact: string;
  affected_users: string;

  // Signal
  key_observation: string;
  hypothesis: string;

  // System
  architecture: string;
  workflows: string;
  automation_logic: string;
  pipelines: string;

  // Reduction
  friction_reduction: string;
  simplification: string;

  // Technical
  stack: string[];
  infra: string;
  APIs: string;
  data_sources: string;
  technologies: string[];

  // Outcome
  role: string;
  outcome: string;
  results: string[];
  learnings: string[];

  // Limits
  current_limits: string;
  tradeoffs: string;

  // Future
  next_steps: string;
  future_vision: string;

  // Metadata
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
