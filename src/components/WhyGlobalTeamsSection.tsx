import { motion } from "framer-motion";
import { SpotlightCard } from "./ui/spotlight-card";
import { Server, Brain, Layers } from "lucide-react";

const cards = [
  {
    icon: <Server className="w-8 h-8" />,
    title: "Production-Grade Systems",
    description: "Battle-tested infrastructure built for reliability. Our systems handle real-world traffic patterns, implement comprehensive error handling, and include monitoring, logging, and graceful degradation from day one.",
    highlights: ["99.9% uptime SLAs", "Automated CI/CD pipelines", "Zero-downtime deployments"],
    isPrimary: false
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: "AI That Ships to Production",
    description: "Beyond prototypes and demos — we build AI systems that run in production environments. From LLM orchestration to real-time inference pipelines, our AI implementations are optimized for latency, cost, and scale.",
    highlights: ["Production-ready LLM integration", "RAG & vector search systems", "Real-time ML inference"],
    isPrimary: true
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Scalable Architecture by Design",
    description: "Every system we build anticipates growth. Microservices, event-driven patterns, and distributed data strategies ensure your product scales seamlessly from hundreds to millions of users.",
    highlights: ["Horizontal scaling patterns", "Event-driven microservices", "Database optimization"],
    isPrimary: false
  }
];

const WhyGlobalTeamsSection = () => {
  return (
    <section className="container px-4 py-24 bg-black">
      <div className="max-w-2xl mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading mb-6"
        >
          Why Global Teams Choose <span className="heading-accent">ORBITO</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground text-left"
        >
          Engineering excellence that translates directly into product success
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={card.isPrimary ? "lg:scale-105 lg:-my-4 z-10" : ""}
          >
            <SpotlightCard
              className={`h-full ${card.isPrimary ? "border-primary/30" : ""}`}
            >
              <div className={`p-8 ${card.isPrimary ? "py-10" : ""}`}>
                {/* Icon */}
                <div className={`mb-6 ${card.isPrimary ? "text-primary" : "text-muted-foreground"}`}>
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-medium mb-4 ${card.isPrimary ? "text-primary" : "text-foreground"}`}>
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {card.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${card.isPrimary ? "bg-primary" : "bg-muted-foreground/50"}`} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyGlobalTeamsSection;
