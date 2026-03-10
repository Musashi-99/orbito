import { Server, Brain, Code, Scaling } from "lucide-react";

export const features = [
  {
    title: "Backend Architecture",
    description: "Distributed systems and scalable APIs.",
    icon: <Server className="w-6 h-6" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
  },
  {
    title: "Generative AI Systems",
    description: "Chatbots, automation, and AI workflows.",
    icon: <Brain className="w-6 h-6" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png"
  },
  {
    title: "Full-Stack Development",
    description: "Modern web applications built with React and Node.",
    icon: <Code className="w-6 h-6" />,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png"
  },
  {
    title: "Scalable Applications",
    description: "Real-time dashboards and SaaS platforms.",
    icon: <Scaling className="w-6 h-6" />,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png"
  }
];

const contactDetails = {
  email: "souravsunju@gmail.com",
  phoneDisplay: "+91 90732 85247",
  phoneHref: "tel:+919073285247",
  location: "India | Kolkata",
  responseNotes: [
    "Best for new builds, platform upgrades, and technical rescue work.",
    "Share your product goal, current blockers, stack, and timeline if you have them.",
    "We usually respond within one business day.",
  ],
  nextSteps: [
    "We review the request and check technical fit.",
    "If relevant, we follow up for missing context.",
    "Then we propose the best next step: call, scope discussion, or direct estimate path.",
  ],
};

export const appConfig = {
  companyName: "Orbito",
  companyNameDisplay: "ORBITO",
  tagline: "Building scalable systems for the future",
  contact: contactDetails,
  socialLinks: [
    {
      platform: "Twitter",
      href: "https://x.com/Sourav0xFF",
    },
    {
      platform: "GitHub",
      href: "https://github.com/orbito-hq",
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/krrishbuilds",
    },
  ],
  footerSections: [
    {
      title: "Services",
      links: [
        { label: "Our Services", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Who is Orbito?",
      answer:
        "Orbito is a focused engineering team working across backend systems, full-stack product development, and applied AI. We build scalable digital products for startups, operators, and growing companies that need execution rather than vague consulting.",
    },
    {
      question: "What kind of projects do you take on?",
      answer:
        "We work on product builds, backend architecture, AI-powered workflows, internal tools, platform upgrades, and technical rescue work. The best fit is high-impact software that needs strong engineering ownership.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes. Orbito is remote-first and works with clients across time zones. We adapt communication and delivery cadence to keep collaboration clear and practical.",
    },
    {
      question: "How do you price your services?",
      answer:
        "Pricing depends on scope, complexity, and timeline. We usually work through a scoped project, a focused build phase, or an ongoing retainer when the work is evolving.",
    },
    {
      question: "How do we communicate during the project?",
      answer:
        "We typically use email, Slack or Discord, and structured async updates. If your team already uses Jira, Trello, Notion, or another workflow, we can plug into that instead.",
    },
    {
      question: "Can you handle end-to-end development?",
      answer:
        "Yes. We can own the product path from planning and interface work through backend systems, deployment, and post-launch support when the engagement requires it.",
    },
    {
      question: "What makes Orbito different from other freelancers or agencies?",
      answer:
        "You work directly with the people building the system. The emphasis is on practical architecture, fast delivery loops, and production-minded engineering rather than handoff-heavy process.",
    },
    {
      question: "Can you provide examples of your work?",
      answer:
        "Yes. The site already includes project examples and breakdowns. If a conversation becomes serious, we can also walk through more relevant work privately where appropriate.",
    },
    {
      question: "How do we get started?",
      answer: `Send the outline of your project through the contact form or email ${contactDetails.email}. We review the details, confirm fit, and then suggest the best next step.`,
    },
  ],
};
