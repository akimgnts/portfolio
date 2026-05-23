export const siteContent = {
  nav: {
    brand: "Akim",
    links: [
      { label: "Work", href: "#work" },
      { label: "Approach", href: "#approach" },
      { label: "About", href: "#about" },
    ],
    cta: { label: "Book a call", href: "#contact" },
  },

  hero: {
    headline: "Systems that",
    headlineAccent: "create clarity.",
    body: "I build data pipelines, automation systems and AI workflows that transform complex information into useful products.",
    status: [
      { label: "Available for work", type: "dot" },
      { label: "Based in France", type: "map" },
    ],
    ctas: [
      { label: "View my work", href: "/projects", variant: "primary" },
      { label: "Book a call", href: "#contact", variant: "outline" },
    ],
    orbCards: [
      { text: "ETL → Warehouse", position: "top-20 left-0" },
      { text: "AI Workflow · Automated ✓", position: "bottom-24 right-8" },
      { text: "Systems · Always running", position: "top-40 right-0" },
    ],
  },

  about: {
    heading: "I'm a systems-minded engineer focused on building tools that matter.",
    bio: [
      "Over the past 8 years, I've built data pipelines, ML systems, and automation platforms that solve real problems at scale. I care about clarity, efficiency, and sustainable engineering.",
      "My work typically involves designing systems that handle complexity gracefully—whether that's orchestrating workflows, building scalable data infrastructure, or creating AI systems that actually ship to production.",
      "I believe in building products with intention. Every feature should earn its place. Every system should be observable and maintainable. Good engineering isn't about impressing other engineers—it's about creating clarity for the people who use it.",
    ],
  },

  sections: {
    work: {
      eyebrow: "Work",
      heading: "Selected work",
    },
    approach: {
      eyebrow: "Methodology",
      heading: "How I think",
    },
    behind: {
      eyebrow: "Behind the scenes",
      heading: "Behind this site",
      automationLabel: "Automation flow",
      stackLabel: "Built with",
    },
    contact: {
      eyebrow: "Get in touch",
      heading: "Let's build something useful.",
      subheading:
        "Whether you have a specific project in mind or want to explore possibilities, I'd love to hear from you.",
      projectTypeLabel: "Project type",
      projectTypes: [
        "Data Pipeline",
        "AI Workflow",
        "Automation System",
        "Consultation",
        "Other",
      ],
      responseTimeLabel: "Response time",
      responseTime: "Typically within 24 hours",
      socialLabel: "Connect elsewhere",
    },
  },

  contact: {
    social: [
      { label: "Email", href: "mailto:akimguentas13@gmail.com" },
      { label: "LinkedIn", href: "https://linkedin.com/in/akimguentas" },
      { label: "GitHub", href: "https://github.com/akimguentas" },
    ],
  },

  footer: {
    name: "Akim Guentas",
    year: new Date().getFullYear(),
  },
};
