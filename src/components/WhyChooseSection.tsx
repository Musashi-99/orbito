import { motion } from "framer-motion";
import { SpotlightCard } from "./ui/spotlight-card";
import { Users, Zap, Brain, MessageSquare, Globe, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Full-Stack Expertise, All in One Team",
    points: [
      "Frontend, backend, and AI expertise in one team",
      "No need to manage multiple freelancers",
      "Architecture and development handled together"
    ]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Proven Track Record of Scalable Solutions",
    points: [
      "Microservices and event-driven architectures",
      "Systems designed for high traffic loads",
      "Built for long-term scalability and reliability"
    ]
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Cutting-Edge AI Integration",
    points: [
      "Generative AI and NLP systems",
      "Intelligent automation and recommendations",
      "Real-time AI features inside applications"
    ]
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Agile and Transparent Collaboration",
    points: [
      "Regular sprint updates and demos",
      "Clear, direct communication with clients",
      "Transparent development process"
    ]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Mindset, Local Dedication",
    points: [
      "Experience with international startups",
      "Cross-timezone collaboration",
      "Reliable delivery and communication"
    ]
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Cost-Effective Without Cutting Corners",
    points: [
      "High-quality engineering without agency costs",
      "Efficient development practices",
      "Long-term scalable solutions"
    ]
  }
];

const WhyChooseSection = () => {
  return (
    <section className="container px-4 py-24 bg-black">
      <div className="max-w-2xl mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading mb-6"
        >
          Why Choose <span className="heading-accent">ORBITO?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-400 text-left"
        >
          Choosing the right tech partner can make the difference between a project that just works and one that truly scales, innovates, and stands out. Here's why global clients trust ORBITO:
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <SpotlightCard className="h-full">
              <div className="p-8">
                <div className="mb-5">
                  <div className="text-primary mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                  <ul className="space-y-2">
                    {reason.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-primary mt-1 shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SpotlightCard className="text-center">
          <div className="p-8">
            <p className="text-xl text-white mb-2">💡 At ORBITO, we don't just code — we craft digital systems that empower businesses to grow, innovate, and thrive.</p>
          </div>
        </SpotlightCard>
      </motion.div>
    </section>
  );
};

export default WhyChooseSection;
