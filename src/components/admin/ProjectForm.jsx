import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

const FormSection = ({ legend, delay = 0, children }) => (
  <motion.fieldset
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay }}
    className="rounded-lg border border-border/20 p-6 bg-white/20"
  >
    <legend className="text-sm font-semibold text-foreground mb-6">{legend}</legend>
    <div className="space-y-4">{children}</div>
  </motion.fieldset>
);

const FormField = ({ label, name, value, onChange, type = "text", placeholder = "", rows = 1, error = null }) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
    {rows > 1 ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
        placeholder={placeholder}
      />
    )}
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default function ProjectForm({ initialData, onSubmit, loading = false }) {
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      slug: "",
      description: "",
      fullDescription: "",
      role: "",
      outcome: "",
      observed_problem: "",
      impact: "",
      affected_users: "",
      key_observation: "",
      hypothesis: "",
      architecture: "",
      workflows: "",
      automation_logic: "",
      pipelines: "",
      friction_reduction: "",
      simplification: "",
      stack: [],
      technologies: [],
      infra: "",
      APIs: "",
      data_sources: "",
      results: [],
      learnings: [],
      lessons: [],
      current_limits: "",
      tradeoffs: "",
      next_steps: "",
      future_vision: "",
      year: new Date().getFullYear(),
      featured: false,
      published: true,
      seoTitle: "",
      seoDescription: "",
      seoKeywords: [],
      githubUrl: "",
      demoUrl: "",
      accentColor: "hsl(25, 70%, 55%)",
      accentHover: "hsla(25,80%,65%,0.12)",
    }
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value.split("\n").filter((item) => item.trim()),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title required";
    if (!formData.slug) newErrors.slug = "Slug required";
    if (!formData.description) newErrors.description = "Description required";

    // Validate slug is unique (for new projects, or different from current slug in edit mode)
    if (formData.slug && !initialData?.slug) {
      const { isSlugAvailable } = await import("../../services/projectService");
      const available = await isSlugAvailable(formData.slug);
      if (!available) {
        newErrors.slug = "Slug already exists";
      }
    } else if (formData.slug && initialData?.slug && formData.slug !== initialData.slug) {
      const { isSlugAvailable } = await import("../../services/projectService");
      const available = await isSlugAvailable(formData.slug, initialData.slug);
      if (!available) {
        newErrors.slug = "Slug already exists";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
      {/* Basic Info */}
      <FormSection legend="Basic Information" delay={0}>
        <FormField
          label="Title *"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g., Elevia"
          error={errors.title}
        />
        <FormField
          label="Slug *"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder="e.g., elevia"
          error={errors.slug}
        />
        <FormField
          label="Short Description *"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="One line for cards"
          rows={2}
          error={errors.description}
        />
        <FormField
          label="Full Description"
          name="fullDescription"
          value={formData.fullDescription}
          onChange={handleChange}
          rows={3}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Year" name="year" value={formData.year} onChange={handleChange} type="number" />
          <FormField label="Role" name="role" value={formData.role} onChange={handleChange} placeholder="Data Engineer" />
        </div>
        <FormField label="Outcome" name="outcome" value={formData.outcome} onChange={handleChange} placeholder="85% automation" />
      </FormSection>

      {/* Friction */}
      <FormSection legend="Friction — What was the problem?" delay={0.05}>
        <FormField label="Problem" name="observed_problem" value={formData.observed_problem} onChange={handleChange} rows={3} />
        <FormField label="Impact" name="impact" value={formData.impact} onChange={handleChange} rows={2} />
        <FormField label="Affected Users" name="affected_users" value={formData.affected_users} onChange={handleChange} rows={2} />
      </FormSection>

      {/* Signal */}
      <FormSection legend="Signal — What did we observe?" delay={0.1}>
        <FormField label="Key Observation" name="key_observation" value={formData.key_observation} onChange={handleChange} rows={2} />
        <FormField label="Hypothesis" name="hypothesis" value={formData.hypothesis} onChange={handleChange} rows={2} />
      </FormSection>

      {/* System */}
      <FormSection legend="System — What did we build?" delay={0.15}>
        <FormField label="Architecture" name="architecture" value={formData.architecture} onChange={handleChange} rows={3} />
        <FormField label="Workflows" name="workflows" value={formData.workflows} onChange={handleChange} rows={2} />
        <FormField label="Automation Logic" name="automation_logic" value={formData.automation_logic} onChange={handleChange} rows={3} />
        <FormField label="Pipelines" name="pipelines" value={formData.pipelines} onChange={handleChange} rows={2} />
      </FormSection>

      {/* Reduction */}
      <FormSection legend="Reduction — What changed?" delay={0.2}>
        <FormField label="Friction Reduction" name="friction_reduction" value={formData.friction_reduction} onChange={handleChange} rows={2} />
        <FormField label="Simplification" name="simplification" value={formData.simplification} onChange={handleChange} rows={2} />
      </FormSection>

      {/* Technical */}
      <FormSection legend="Technical — Stack & Infrastructure" delay={0.25}>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Stack (one per line)</label>
          <textarea
            value={(formData.stack || []).join("\n")}
            onChange={(e) => handleArrayChange("stack", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm font-mono text-xs"
            placeholder="Python&#10;PostgreSQL&#10;FastAPI"
          />
        </div>
        <FormField label="Infrastructure" name="infra" value={formData.infra} onChange={handleChange} rows={2} />
        <FormField label="APIs" name="APIs" value={formData.APIs} onChange={handleChange} rows={2} />
        <FormField label="Data Sources" name="data_sources" value={formData.data_sources} onChange={handleChange} rows={2} />
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Technologies (one per line)</label>
          <textarea
            value={(formData.technologies || []).join("\n")}
            onChange={(e) => handleArrayChange("technologies", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm font-mono text-xs"
            placeholder="Python&#10;PostgreSQL&#10;FastAPI"
          />
        </div>
      </FormSection>

      {/* Outcome */}
      <FormSection legend="Outcome — What happened?" delay={0.3}>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Results (one per line)</label>
          <textarea
            value={(formData.results || []).join("\n")}
            onChange={(e) => handleArrayChange("results", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm font-mono text-xs"
            placeholder="Result 1&#10;Result 2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Learnings (one per line)</label>
          <textarea
            value={(formData.learnings || []).join("\n")}
            onChange={(e) => handleArrayChange("learnings", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm font-mono text-xs"
            placeholder="Learning 1&#10;Learning 2"
          />
        </div>
      </FormSection>

      {/* Limits */}
      <FormSection legend="Limits & Tradeoffs — What we didn't solve" delay={0.35}>
        <FormField label="Current Limits" name="current_limits" value={formData.current_limits} onChange={handleChange} rows={2} />
        <FormField label="Tradeoffs" name="tradeoffs" value={formData.tradeoffs} onChange={handleChange} rows={2} />
      </FormSection>

      {/* Future */}
      <FormSection legend="Future — What's next?" delay={0.4}>
        <FormField label="Next Steps" name="next_steps" value={formData.next_steps} onChange={handleChange} rows={2} />
        <FormField label="Vision" name="future_vision" value={formData.future_vision} onChange={handleChange} rows={2} />
      </FormSection>

      {/* Links & SEO */}
      <FormSection legend="Links & SEO" delay={0.45}>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="GitHub URL" name="githubUrl" value={formData.githubUrl} onChange={handleChange} type="url" placeholder="https://github.com/..." />
          <FormField label="Demo URL" name="demoUrl" value={formData.demoUrl} onChange={handleChange} type="url" placeholder="https://..." />
        </div>
        <FormField label="SEO Title" name="seoTitle" value={formData.seoTitle} onChange={handleChange} />
        <FormField label="SEO Description" name="seoDescription" value={formData.seoDescription} onChange={handleChange} rows={2} />
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="rounded border-border"
            />
            <span className="text-sm text-muted-foreground">Featured on homepage</span>
          </label>
        </div>
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="published"
              checked={formData.published}
              onChange={handleChange}
              className="rounded border-border"
            />
            <span className="text-sm text-muted-foreground">Published</span>
          </label>
        </div>
      </FormSection>

      {/* Submit */}
      <div className="flex gap-3 pt-6">
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? "Saving..." : "Save Project"}
        </Button>
      </div>
    </form>
  );
}
