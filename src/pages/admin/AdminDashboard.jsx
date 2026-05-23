import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchProjects } from "../../services/projectService";
import { Button } from "../../components/ui/Button";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    draft: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const projects = await fetchProjects(0, 100);
      setStats({
        total: projects.length,
        published: projects.filter((p) => p.published).length,
        draft: projects.filter((p) => !p.published).length,
      });
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-serif text-4xl font-medium mb-4">Admin</h1>
          <p className="text-muted-foreground">Manage your portfolio</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="rounded-lg border border-border bg-white/50 p-6"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground/50 font-medium mb-3">
              Total Projects
            </p>
            <p className="font-serif text-3xl font-medium text-foreground">
              {loading ? "—" : stats.total}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-lg border border-border bg-white/50 p-6"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground/50 font-medium mb-3">
              Published
            </p>
            <p className="font-serif text-3xl font-medium text-foreground">
              {loading ? "—" : stats.published}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-lg border border-border bg-white/50 p-6"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground/50 font-medium mb-3">
              Drafts
            </p>
            <p className="font-serif text-3xl font-medium text-foreground">
              {loading ? "—" : stats.draft}
            </p>
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-lg border border-border bg-white/50 p-8"
        >
          <h2 className="font-serif text-xl font-medium mb-6">Quick Actions</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="default" asChild>
              <Link to="/admin/projects">Manage Projects</Link>
            </Button>
            <Button variant="outline" size="default" asChild>
              <Link to="/admin/projects/new">Create New Project</Link>
            </Button>
            <Button variant="ghost" size="default" asChild>
              <Link to="/">View Portfolio</Link>
            </Button>
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-4 rounded-lg bg-yellow-100/20 border border-yellow-200/40 text-yellow-800"
        >
          <p className="text-sm">
            <strong>Note:</strong> This admin panel uses mock data. Connect to backend
            by setting <code className="text-xs font-mono">VITE_API_URL</code> in .env.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
