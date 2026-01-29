import { motion } from "framer-motion";
import { SpotlightCard } from "./ui/spotlight-card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "WhatsApp E-Commerce Platform",
    description: "Built a complete e-commerce system inside WhatsApp, enabling customers to browse, order, and pay directly through chat.",
    features: [
      "AI-driven product search & recommendations",
      "Order placement & address management", 
      "Real-time updates via WhatsApp API",
      "Smooth GSAP animations for frontend demo"
    ],
    techStack: ["Python", "FastAPI", "WhatsApp API", "Custom NLP Models", "GSAP"]
  },
  {
    title: "Multi-Tenant SaaS E-Commerce Platform",
    description: "An affordable Shopify alternative for small businesses, designed with scalability and multi-tenancy.",
    features: [
      "Multi-tenant architecture",
      "Real-time customer chat support (WebSockets)",
      "SSE notifications for shop owners",
      "Clerk authentication system"
    ],
    techStack: ["Node.js", "FastAPI", "Clerk", "WebSockets", "SSE", "MongoDB"]
  },
  {
    title: "AI-Powered Semantic Search Engine",
    description: "Context-aware search engine similar to Algolia, but fully customizable for business workflows.",
    features: [
      "NLP-based semantic search",
      "Scheduler-based eventual updates",
      "Low-dependency, backend-agnostic integration"
    ],
    techStack: ["Python", "Custom NLP", "Redis", "PostgreSQL", "Async Programming"]
  },
  {
    title: "Enterprise Real-Time Dashboard",
    description: "A scalable analytics dashboard that streams and visualizes live data for enterprises.",
    features: [
      "Kafka-driven real-time data ingestion",
      "WebSocket-based live visualizations",
      "Modular, multi-role dashboard access"
    ],
    techStack: ["React", "Node.js", "Kafka", "Redis", "WebSockets"]
  },
  {
    title: "AI-Powered Call Review System",
    description: "Automated system for analyzing inbound calls for quality and sentiment, helping enterprises improve customer support.",
    features: [
      "Real-time streaming of calls via Kafka",
      "Transcription with Whisper ASR",
      "Sentiment analysis with fine-tuned LLMs",
      "Multi-tenant system design for enterprises"
    ],
    techStack: ["Python", "Whisper ASR", "LLMs", "Kafka", "MongoDB"]
  },
  {
    title: "Custom Admin Dashboards & Tools",
    description: "Advanced admin dashboards for startups and enterprises, tailored to their workflows.",
    features: [
      "Role-based access & authentication",
      "Real-time performance tracking",
      "Custom integrations (API-first approach)"
    ],
    techStack: ["React", "TypeScript", "FastAPI", "Clerk"]
  }
];

const ProjectsSection = () => {
  return (
    <section className="container px-4 py-24 bg-black">
      <div className="max-w-2xl mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left"
        >
          Featured{" "}
          <span className="text-gradient font-medium">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-400 text-left"
        >
          Explore some of our recent work showcasing our expertise in full-stack development, AI integration, and scalable system architecture.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <SpotlightCard className="h-full">
              <div className="p-8">
                <h3 className="text-xl font-medium mb-4 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-primary mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-white/10 text-gray-300 border-white/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
