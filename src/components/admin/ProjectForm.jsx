import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export default function ProjectForm({ initialData, onSubmit, loading = false }) {
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      slug: "",
      description: "",
      fullDescription: "",
      problem: "",
      approach: "",
      architecture: "",
      role: "",
      outcome: "",
      lessons: [],
      results: [],
      technologies: [],
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.slug) newErrors.slug = "Slug is required";
    if (!formData.description) newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">
      {/* Basic Info */}
      <motion.fieldset
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-lg border border-border/20 p-6 bg-white/20"
      >
        <legend className="text-sm font-semibold text-foreground mb-6">
          Basic Information
        </legend>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
              placeholder="e.g., Elevia"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Slug *
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm font-mono"
              placeholder="e.g., elevia"
            />
            {errors.slug && (
              <p className="text-red-500 text-xs mt-1">{errors.slug}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Short Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
              placeholder="One line description for cards"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Full Description
            </label>
            <textarea
              name="fullDescription"
              value={formData.fullDescription}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
              placeholder="Detailed description"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Year
              </label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Role
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
                placeholder="e.g., Data Engineer"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Outcome
            </label>
            <input
              type="text"
              name="outcome"
              value={formData.outcome}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
              placeholder="e.g., 85% automation rate"
            />
          </div>
        </div>
      </motion.fieldset>

      {/* Content */}
      <motion.fieldset
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="rounded-lg border border-border/20 p-6 bg-white/20"
      >
        <legend className="text-sm font-semibold text-foreground mb-6">
          Content
        </legend>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Problem
            </label>
            <textarea
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Approach
            </label>
            <textarea
              name="approach"
              value={formData.approach}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Architecture
            </label>
            <textarea
              name="architecture"
              value={formData.architecture}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Results (one per line)
            </label>
            <textarea
              value={formData.results.join("\n")}
              onChange={(e) => handleArrayChange("results", e.target.value)}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm font-mono text-xs"
              placeholder="Result 1&#10;Result 2&#10;Result 3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Key Learnings (one per line)
            </label>
            <textarea
              value={formData.lessons.join("\n")}
              onChange={(e) => handleArrayChange("lessons", e.target.value)}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm font-mono text-xs"
              placeholder="Learning 1&#10;Learning 2"
            />
          </div>
        </div>
      </motion.fieldset>

      {/* Technologies */}
      <motion.fieldset
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="rounded-lg border border-border/20 p-6 bg-white/20"
      >
        <legend className="text-sm font-semibold text-foreground mb-6">
          Technologies
        </legend>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Tech Stack (one per line)
          </label>
          <textarea
            value={formData.technologies.join("\n")}
            onChange={(e) => handleArrayChange("technologies", e.target.value)}
            rows={4}
            className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm font-mono text-xs"
            placeholder="Python&#10;PostgreSQL&#10;FastAPI&#10;React"
          />
        </div>
      </motion.fieldset>

      {/* Advanced */}
      <motion.fieldset
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="rounded-lg border border-border/20 p-6 bg-white/20"
      >
        <legend className="text-sm font-semibold text-foreground mb-6">
          Links & SEO
        </legend>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                GitHub URL
              </label>
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
                placeholder="https://github.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Demo URL
              </label>
              <input
                type="url"
                name="demoUrl"
                value={formData.demoUrl}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
                placeholder="https://..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              SEO Title
            </label>
            <input
              type="text"
              name="seoTitle"
              value={formData.seoTitle}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              SEO Description
            </label>
            <textarea
              name="seoDescription"
              value={formData.seoDescription}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white text-foreground text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Featured
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="rounded border-border"
              />
              <span className="text-sm text-muted-foreground">
                Show on homepage
              </span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Published
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="rounded border-border"
              />
              <span className="text-sm text-muted-foreground">
                Visible to public
              </span>
            </label>
          </div>
        </div>
      </motion.fieldset>

      {/* Submit */}
      <div className="flex gap-3 pt-6">
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? "Saving..." : "Save Project"}
        </Button>
      </div>
    </form>
  );
}
