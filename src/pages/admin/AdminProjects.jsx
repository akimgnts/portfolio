import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { fetchProjects, deleteProject } from "../../services/projectService";

export default function AdminProjects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProjects(0, 100);
      setProjects(data);
      setLoading(false);
    };
    load();
  }, []);

  const handleDelete = async (slug) => {
    if (!window.confirm("Delete this project?")) return;
    setDeleting(slug);
    const success = await deleteProject(slug);
    if (success) {
      setProjects(projects.filter((p) => p.slug !== slug));
    }
    setDeleting(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Admin
          </Link>
          <h1 className="font-serif text-4xl font-medium mb-4">Projects</h1>
          <p className="text-muted-foreground mb-6">
            Manage your portfolio projects
          </p>
          <Button variant="primary" size="default" asChild>
            <Link to="/admin/projects/new">
              <Plus className="w-4 h-4" />
              New Project
            </Link>
          </Button>
        </motion.div>

        {/* Projects Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-border overflow-hidden bg-white/50"
        >
          {loading ? (
            <div className="p-12 text-center text-muted-foreground">
              Loading projects...
            </div>
          ) : projects.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              No projects yet.{" "}
              <Link
                to="/admin/projects/new"
                className="text-accent hover:text-accent/80"
              >
                Create one
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-xs uppercase tracking-widest text-muted-foreground/70 font-medium">
                      Title
                    </th>
                    <th className="text-left p-4 text-xs uppercase tracking-widest text-muted-foreground/70 font-medium">
                      Slug
                    </th>
                    <th className="text-left p-4 text-xs uppercase tracking-widest text-muted-foreground/70 font-medium">
                      Year
                    </th>
                    <th className="text-left p-4 text-xs uppercase tracking-widest text-muted-foreground/70 font-medium">
                      Status
                    </th>
                    <th className="text-right p-4 text-xs uppercase tracking-widest text-muted-foreground/70 font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, idx) => (
                    <tr
                      key={project.id || project.slug}
                      className="border-b border-border/50 hover:bg-white/30 transition-colors"
                    >
                      <td className="p-4 text-sm text-foreground font-medium">
                        {project.title}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground font-mono">
                        {project.slug}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {project.year || "—"}
                      </td>
                      <td className="p-4 text-sm">
                        <span
                          className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                            project.published
                              ? "bg-green-100/50 text-green-700"
                              : "bg-yellow-100/50 text-yellow-700"
                          }`}
                        >
                          {project.published ? "Published" : "Draft"}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() =>
                              navigate(`/admin/projects/${project.slug}/edit`)
                            }
                            className="p-2 rounded hover:bg-white/50 transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4 text-muted-foreground" />
                          </button>
                          <button
                            onClick={() => handleDelete(project.slug)}
                            disabled={deleting === project.slug}
                            className="p-2 rounded hover:bg-red-100/30 transition-colors disabled:opacity-50"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
