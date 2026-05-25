export const siteContent = {
  nav: {
    brand: "Akim Guentas",
    links: [
      { label: "Systems", href: "#work" },
      { label: "Approach", href: "#approach" },
      { label: "About", href: "#about" },
    ],
    cta: { label: "Talk about systems", href: "#contact" },
  },

  hero: {
    headline: "Systems fail when",
    headlineAccent: "friction stays invisible.",
    body: "Workflows break. Data gets trapped between tools. Teams repeat decisions they've already made. I find these invisible problems. Then I make them fixable.",
    status: [
      { label: "Based in France", type: "map" },
      { label: "Observing systems", type: "dot" },
    ],
    ctas: [
      { label: "See the systems", href: "/projects", variant: "primary" },
      { label: "Talk to me", href: "#contact", variant: "outline" },
    ],
    orbCards: [
      { text: "Friction → Visible", position: "top-20 left-0" },
      { text: "Structure · Emerges", position: "bottom-24 right-8" },
      { text: "Clarity · Works", position: "top-40 right-0" },
    ],
  },

  about: {
    heading: "I notice what others skip over.",
    bio: [
      "Workflows grow. Tools multiply. Data gets lost in the spaces between them. Teams can't explain why decisions take so long because they can't see the actual patterns. That's where I start looking.",
      "I've learned by building: connecting systems, structuring data, automating what shouldn't be manual, then rebuilding it in a clearer way. My work exists where friction lives — in the moments when information becomes hard to use, decisions become slow, and clarity breaks down.",
      "Good systems don't impress. They disappear. You just notice that things work. That workflow that felt broken now feels obvious. That data that was trapped now flows. That decision that took weeks now takes hours. That's the goal — reduction, not addition.",
    ],
    capabilities: [
      "See operational friction others miss",
      "Trace where clarity breaks",
      "Structure information so patterns emerge",
      "Build systems that reduce noise",
      "Make the invisible visible",
    ],
  },

  approach: {
    intro: "Most teams optimize what they can see. I start by finding what's actually broken.",
    items: [
      {
        number: "01",
        title: "Find the friction first",
        body: "Not the technology, not the features. The places where work becomes slow, repetitive, or confusing.",
      },
      {
        number: "02",
        title: "Make it visible",
        body: "Turn invisible problems into concrete signals. Show the gap between what people think is happening and what's actually happening.",
      },
      {
        number: "03",
        title: "Structure the response",
        body: "Design workflows, data structures, and processes that make the problem unsolvable by accident. Make clarity the default.",
      },
      {
        number: "04",
        title: "Use tools strategically",
        body: "Automation, AI, APIs — only when they reduce friction. Not because they're trendy. Not because they're possible.",
      },
      {
        number: "05",
        title: "Test against reality",
        body: "Does it actually work for the people using it? Can they understand it? Can they maintain it without me?",
      },
      {
        number: "06",
        title: "Iterate based on signal",
        body: "What's still broken? What became clearer? What's the next friction to solve? Systems improve through observation, not redesigns.",
      },
    ],
  },

  behind: {
    intro: "This site isn't a portfolio. It's a system for showing how I think. Structured to reveal friction, signal, and the work of making things clear.",
    automation: [
      { step: "00", note: "Signal arrives via contact" },
      { step: "01", note: "Understanding the actual friction" },
      { step: "02", note: "Structured discussion" },
      { step: "03", note: "Clarity about fit" },
      { step: "04", note: "Building begins" },
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
      eyebrow: "Friction to clarity",
      heading: "Systems that clarified.",
      intro: "Each project started with something broken. Not polished. Not obvious. Something where the system itself made work harder. This is how friction became visible.",
    },
    approach: {
      eyebrow: "How I observe",
      heading: "The pattern I always find.",
    },
    behind: {
      eyebrow: "The thinking visible",
      heading: "This site shows structure.",
      automationLabel: "How signal moves",
      stackLabel: "What holds it together",
    },
    contact: {
      eyebrow: "Let's talk systems",
      heading: "Tell me what's broken.",
      subheading: "Not what you want to build. What's actually not working. Where teams get stuck. Where data hides. Where decisions slow down. The friction nobody talks about. That's what interests me.",
      projectTypeLabel: "What's the friction?",
      responseTimeLabel: "Speed",
      responseTime: "Usually within a day.",
      socialLabel: "Find me",
    },
  },

  contact: {
    projectTypes: [
      "Workflow is broken",
      "Data is trapped",
      "System is unclear",
      "Process is slow",
      "Just exploring",
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
    tagline: "Friction visible. Systems clear.",
  },
};
