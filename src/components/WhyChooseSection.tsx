import { motion } from "framer-motion";
import { SpotlightCard } from "./ui/spotlight-card";
import { Users, Zap, Brain, MessageSquare, Globe, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Full-Stack Expertise, All in One Team",
    description: "From frontend interfaces to backend architecture and AI-powered systems — we cover the entire stack. No need to hire multiple freelancers; with Orbito, you get a complete team under one roof."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Proven Track Record of Scalable Solutions",
    description: "Our team has designed microservices, event-driven systems, and SaaS platforms that support thousands of users without breaking. We don't just build — we architect for growth."
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Cutting-Edge AI Integration",
    description: "Generative AI, NLP, automation, real-time chat, recommendation systems — we bring the power of AI into everyday products, giving our clients an edge in their industries."
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Agile and Transparent Collaboration",
    description: "We work closely with our clients through every sprint, sharing progress updates, demos, and reports. Expect no hidden surprises — only clear communication and results."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Mindset, Local Dedication",
    description: "With international clients as our focus, we understand cross-border needs like scalability, compliance, and adaptability. Time zones don't stop us — we deliver on schedule."
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Cost-Effective Without Cutting Corners",
    description: "You don't need a big agency budget to get high-quality development. We offer agency-level results at freelancer-friendly pricing, making Orbito a smart long-term partner."
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
          Choosing the right tech partner can make the difference between a project that just works and one that truly scales, innovates, and stands out. Here's why global clients trust Orbito:
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
                <div className="mb-6">
                  <div className="text-primary mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">{reason.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{reason.description}</p>
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
            <p className="text-xl text-white mb-2">💡 At Orbito, we don't just code — we craft digital systems that empower businesses to grow, innovate, and thrive.</p>
          </div>
        </SpotlightCard>
      </motion.div>
    </section>
  );
};

export default WhyChooseSection;
