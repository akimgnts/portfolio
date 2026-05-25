import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ProjectForm from "../../components/admin/ProjectForm";
import { createProject } from "../../services/projectService";

export default function AdminProjectCreate() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (data) => {
    setLoading(true);
    setError(null);

    const result = await createProject(data);

    if (result) {
      navigate("/admin/projects");
    } else {
      setError("Failed to create project. Check backend connection.");
    }

    setLoading(false);
  };

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
          <h1 className="font-serif text-4xl font-medium mb-4">New Project</h1>
          <p className="text-muted-foreground">Create a new portfolio project</p>
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

        <ProjectForm onSubmit={handleSubmit} loading={loading} />
      </div>
    </div>
  );
}
