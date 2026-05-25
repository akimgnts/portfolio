import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ProjectForm from "../../components/admin/ProjectForm";
import { fetchProjectBySlug, updateProject } from "../../services/projectService";

export default function AdminProjectEdit() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProjectBySlug(slug);
      if (!data) {
        navigate("/admin/projects");
        return;
      }
      setProject(data);
      setLoading(false);
    };
    load();
  }, [slug, navigate]);

  const handleSubmit = async (data) => {
    setSubmitting(true);
    setError(null);

    const result = await updateProject(slug, data);

    if (result) {
      navigate("/admin/projects");
    } else {
      setError("Failed to update project. Check backend connection.");
    }

    setSubmitting(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            to="/admin/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <h1 className="font-serif text-4xl font-medium mb-4">Edit Project</h1>
          <p className="text-muted-foreground">
            Update <span className="font-mono text-foreground">{project.title}</span>
          </p>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 rounded-lg bg-red-100/20 border border-red-200/40 text-red-700 mb-8"
          >
            {error}
          </motion.div>
        )}

        <ProjectForm initialData={project} onSubmit={handleSubmit} loading={submitting} />
      </div>
    </div>
  );
}
