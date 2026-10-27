import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Copy, Check } from "lucide-react";
import { Button } from "./ui/Button";
import { siteContent } from "../data/content";
import { createContactDraft } from "../lib/contact";
import { Card } from "./ui/Card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [draft, setDraft] = useState(null);
  const [copyStatus, setCopyStatus] = useState("");
  const emailLink = siteContent.contact.social.find((link) => link.href.startsWith("mailto:"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.target.setCustomValidity("");
    setDraft(null);
    setCopyStatus("");
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProjectType = (type) => {
    setDraft(null);
    setCopyStatus("");
    setFormData((prev) => ({
      ...prev,
      projectType: prev.projectType === type ? "" : type,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const name of ["name", "message"]) {
      if (!formData[name].trim()) {
        const field = e.currentTarget.elements.namedItem(name);
        field.setCustomValidity("Please enter more than spaces.");
        field.reportValidity();
        return;
      }
    }
    const nextDraft = createContactDraft(formData, emailLink.href);
    setDraft(nextDraft);
    setCopyStatus("");
    window.location.assign(nextDraft.href);
  };

  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draft.body);
      setCopyStatus("Copied. Paste your message into an email when you’re ready.");
    } catch {
      setCopyStatus("Copy is unavailable. Your message is still in the form above so you can select and copy it.");
    }
  };

  return (
    <>
      <section
        id="contact"
        className="py-20 md:py-28 px-6 md:px-8 section-gradient-contact"
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
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-4">
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
              className="lg:col-span-3 space-y-5 rounded-2xl border border-border bg-white/60 p-6 sm:p-8 shadow-sm"
              aria-describedby="contact-delivery-note"
            >
              <div className="mb-6">
                <h3 className="font-serif text-2xl mb-2">Parlons de ton sujet.</h3>
                <p id="contact-delivery-note" className="text-sm text-muted-foreground">
                  Un brouillon s'ouvrira dans ton application e-mail. Vérifie-le puis envoie-le depuis celle-ci.
                  Le nom, l'e-mail et le message sont obligatoires.
                </p>
              </div>
              {/* Name */}
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  maxLength={120}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 rounded-lg bg-white/40 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 focus:bg-white/70 transition-all"
                  placeholder="Ton nom"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  maxLength={254}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 rounded-lg bg-white/40 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 focus:bg-white/70 transition-all"
                  placeholder="ton@email.com"
                />
              </div>

              {/* Project type */}
              <fieldset>
                <legend className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
                  {siteContent.sections.contact.projectTypeLabel} <span className="normal-case tracking-normal">(facultatif)</span>
                </legend>
                <div className="flex flex-wrap gap-2">
                  {siteContent.contact.projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={formData.projectType === type}
                      onClick={() => handleProjectType(type)}
                      className={`min-h-11 rounded-lg border px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                        formData.projectType === type
                          ? "border-foreground bg-foreground text-background"
                          : "border-border bg-white/50 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  maxLength={5000}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/40 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 focus:bg-white/70 resize-y min-h-36 transition-all"
                  placeholder="Quel sujet essaies-tu de structurer, simplifier ou construire ?"
                />
              </div>

              {/* Submit */}
              <Button type="submit" variant="primary" size="default" className="w-full">
                <Mail className="w-4 h-4" aria-hidden="true" />
                Ouvrir le brouillon e-mail
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <div role="status" aria-live="polite" aria-atomic="true">
                {draft && (
                  <div className="rounded-xl border border-border bg-background p-4 text-sm">
                    <p className="font-medium text-foreground mb-1">Ton brouillon est prêt.</p>
                    <p className="text-muted-foreground">
                      Envoie-le depuis ton application e-mail. Si elle ne s'est pas ouverte, copie le message et écris à{" "}
                      <a href={emailLink.href} className="underline underline-offset-4 text-foreground break-all">
                        {emailLink.href.replace("mailto:", "")}
                      </a>.
                    </p>
                    <button
                      type="button"
                      onClick={copyDraft}
                      className="mt-3 min-h-11 inline-flex items-center gap-2 font-medium underline underline-offset-4"
                    >
                      {copyStatus.startsWith("Copied") ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                      Copier le message
                    </button>
                    {copyStatus && <p className="mt-2 text-muted-foreground">{copyStatus}</p>}
                  </div>
                )}
              </div>
            </form>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info block */}
              <Card hover className="p-6">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-3">
                  {siteContent.sections.contact.responseTimeLabel}
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {siteContent.sections.contact.responseTime}
                </p>
              </Card>

              {/* Social links */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-3">
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
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-muted-foreground transition-colors" />
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
