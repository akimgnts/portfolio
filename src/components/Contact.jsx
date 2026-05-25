import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowUpRight } from "lucide-react";
import { Toaster, toast } from "sonner";
import { Button } from "./ui/Button";
import { siteContent } from "../data/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Tag } from "./ui/Tag";
import { Card } from "./ui/Card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProjectType = (type) => {
    setFormData((prev) => ({
      ...prev,
      projectType: prev.projectType === type ? "" : type,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSending(false);
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  return (
    <>
      <Toaster position="bottom-right" />
      <section
        id="contact"
        className="py-40 px-6 md:px-8 section-gradient-contact"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-20 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/45 font-medium mb-4">
              {siteContent.sections.contact.eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-5">
              {siteContent.sections.contact.heading}
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              {siteContent.sections.contact.subheading}
            </p>
          </motion.div>

          {/* Form grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 space-y-4"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 rounded-lg bg-white/40 border border-border/15 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white/70 transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 rounded-lg bg-white/40 border border-border/15 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white/70 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Project type */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium block mb-3">
                  {siteContent.sections.contact.projectTypeLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {siteContent.contact.projectTypes.map((type) => (
                    <Tag
                      key={type}
                      active={formData.projectType === type}
                      onClick={() => handleProjectType(type)}
                    >
                      {type}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/40 border border-border/15 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white/70 resize-none transition-all"
                  placeholder="What are you currently trying to structure, simplify or build?"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={sending}
                variant="primary"
                size="default"
                className="w-full"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send message"
                )}
              </Button>
            </form>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info block */}
              <Card hover className="p-6">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/45 font-medium mb-3">
                  {siteContent.sections.contact.responseTimeLabel}
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {siteContent.sections.contact.responseTime}
                </p>
              </Card>

              {/* Social links */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium mb-3">
                  {siteContent.sections.contact.socialLabel}
                </p>
                <div className="space-y-2">
                  {siteContent.contact.social.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block p-4 rounded-lg border border-border/12 bg-white/25 hover:bg-white/45 hover:border-border/30 transition-all duration-300 text-small group"
                    >
                      <span className="flex items-center gap-2 group-hover:gap-2.5 transition-all">
                        {link.label}
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground/35 group-hover:text-muted-foreground/65 transition-colors" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
