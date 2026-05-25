export const siteContent = {
  nav: {
    brand: "Akim",
    links: [
      { label: "Systems", href: "#work" },
      { label: "Approach", href: "#approach" },
      { label: "About", href: "#about" },
    ],
    cta: { label: "Start a discussion", href: "#contact" },
  },

  hero: {
    headline: "I build systems that",
    headlineAccent: "make messy things clearer.",
    body: "I work between data, automation, AI and product thinking to structure workflows, reduce friction and turn scattered information into usable systems.",
    status: [
      { label: "Based in France", type: "map" },
      { label: "Building in public", type: "dot" },
    ],
    ctas: [
      { label: "Explore the systems", href: "/projects", variant: "primary" },
      { label: "Start a conversation", href: "#contact", variant: "outline" },
    ],
    orbCards: [
      { text: "Signal → Structure", position: "top-20 left-0" },
      { text: "Workflows · Simplified", position: "bottom-24 right-8" },
      { text: "Systems · In progress", position: "top-40 right-0" },
    ],
  },

  about: {
    heading: "I'm interested in the way systems behave when complexity starts getting in the way.",
    bio: [
      "Most of the things I build start with the same observation: information becomes difficult to use when workflows grow, tools multiply, and nobody really understands how the system behaves anymore.",
      "I've learned mostly by building. Connecting APIs, structuring data, automating repetitive operations, testing interfaces, breaking systems apart and rebuilding them in a clearer way. My work naturally sits between data, workflows, automation and product thinking.",
      "I believe good systems should reduce noise instead of adding more complexity. The goal is not to impress with technology, but to create something understandable, maintainable and genuinely useful.",
    ],
    capabilities: [
      "Structure complex information",
      "Reduce operational friction",
      "Design workflow systems",
      "Build practical automation",
      "Connect tools and data",
    ],
  },

  approach: {
    intro: "I usually begin by observing where systems become unclear, repetitive or difficult to operate. From there, I try to identify the signal, structure the workflow and reduce unnecessary complexity.",
    items: [
      {
        number: "01",
        title: "Observe the friction",
        body: "Understand what actually slows people down before introducing new tools or automation.",
      },
      {
        number: "02",
        title: "Find the signal",
        body: "Separate meaningful information from noise, duplication and operational confusion.",
      },
      {
        number: "03",
        title: "Structure the system",
        body: "Create workflows, interfaces and data structures that make the process easier to understand and maintain.",
      },
      {
        number: "04",
        title: "Use AI carefully",
        body: "I use AI when it reduces friction or improves understanding — not just because it exists.",
      },
      {
        number: "05",
        title: "Keep clarity first",
        body: "A system only becomes useful when the people using it can actually navigate it confidently.",
      },
      {
        number: "06",
        title: "Iterate progressively",
        body: "Most systems improve through observation, testing and gradual refinement rather than massive rewrites.",
      },
    ],
  },

  behind: {
    intro: "The website is designed as a modular product rather than a static portfolio. The goal is to progressively connect projects, workflows, structured content and future automation into a single evolving system.",
    automation: [
      { step: "00", note: "Lead from contact form" },
      { step: "01", note: "Qualification + context" },
      { step: "02", note: "Async discussion" },
      { step: "03", note: "Decide if it fits" },
      { step: "04", note: "Begin exploration" },
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons",
      "Node.js",
      "PostgreSQL",
      "n8n",
      "Python",
      "FastAPI",
    ],
  },

  sections: {
    work: {
      eyebrow: "Systems in progress",
      heading: "A selection of systems, experiments and operational ideas.",
      intro: "These projects are not polished startup products. They are evolving systems built around real frictions related to workflows, data, automation and decision-making.",
    },
    approach: {
      eyebrow: "How I work",
      heading: "Most projects start with friction.",
    },
    behind: {
      eyebrow: "Behind the structure",
      heading: "This portfolio is becoming a system itself.",
      automationLabel: "Current workflow structure",
      stackLabel: "Current tools and infrastructure",
    },
    contact: {
      eyebrow: "Start a conversation",
      heading: "I'm always interested in thoughtful systems discussions.",
      subheading: "Whether it's about workflows, operational friction, automation, data structure or an idea that still feels unclear — I'm open to discussing systems that need better structure.",
      projectTypeLabel: "Discussion topic",
      responseTimeLabel: "Response rhythm",
      responseTime: "Usually within a day.",
      socialLabel: "Elsewhere",
    },
  },

  contact: {
    projectTypes: [
      "Workflow friction",
      "Data structure",
      "Automation idea",
      "System design",
      "Exploration",
    ],
    social: [
      { label: "Email", href: "mailto:akimguentas13@gmail.com" },
      { label: "LinkedIn", href: "https://linkedin.com/in/akimguentas" },
      { label: "GitHub", href: "https://github.com/akimguentas" },
    ],
  },

  footer: {
    name: "Akim Guentas",
    year: new Date().getFullYear(),
    tagline: "Built progressively, refined continuously.",
  },
};
