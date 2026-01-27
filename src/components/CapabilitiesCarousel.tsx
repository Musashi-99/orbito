import { motion } from "framer-motion";
import { 
  Server, 
  Workflow, 
  Brain, 
  Radio, 
  Cloud, 
  Shield, 
  Database 
} from "lucide-react";

const CapabilitiesCarousel = () => {
  const capabilities = [
    { icon: Server, label: "Scalable Backend Infrastructure" },
    { icon: Workflow, label: "Event-Driven Architecture" },
    { icon: Brain, label: "AI-Powered Systems & Automation" },
    { icon: Radio, label: "Real-Time Applications & Streaming" },
    { icon: Cloud, label: "Cloud-Native Deployment & DevOps" },
    { icon: Shield, label: "Secure APIs & Authentication" },
    { icon: Database, label: "High-Performance Databases" },
  ];

  const extendedCapabilities = [...capabilities, ...capabilities, ...capabilities];

  return (
    <div className="w-full overflow-hidden bg-[#050505] py-16 mt-20">
      <div className="container px-4 mb-8">
        <p className="text-sm text-gray-500 uppercase tracking-widest text-center">
          What ORBITO Builds & Engineers
        </p>
      </div>
      
      <motion.div 
        className="flex"
        initial={{ opacity: 0, x: "0%" }}
        animate={{
          opacity: 1,
          x: "-50%"
        }}
        transition={{
          opacity: { duration: 0.5 },
          x: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }
        }}
        style={{
          width: "fit-content",
          display: "flex",
          gap: "3rem"
        }}
      >
        {extendedCapabilities.map((capability, index) => {
          const IconComponent = capability.icon;
          return (
            <motion.div
              key={`capability-${index}`}
              className="flex items-center gap-3 px-5 py-3 rounded-full border border-gray-800/50 bg-[#0a0a0a] whitespace-nowrap"
              initial={{ opacity: 0.6 }}
              whileHover={{ 
                opacity: 1,
                scale: 1.02,
                borderColor: "rgba(74, 222, 128, 0.3)",
                transition: { duration: 0.2 }
              }}
            >
              <IconComponent className="w-5 h-5 text-green-500/80" strokeWidth={1.5} />
              <span className="text-sm text-gray-400 font-medium">{capability.label}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CapabilitiesCarousel;
