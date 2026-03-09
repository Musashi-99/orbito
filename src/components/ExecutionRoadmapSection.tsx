import { motion } from "framer-motion";

const ExecutionRoadmapSection = () => {
  return (
    <section id="roadmap" className="container px-4 pt-24 pb-0 bg-black">
      <div className="max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-heading mb-4"
        >
          Our <span className="heading-accent">Flagship Products</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg text-gray-400"
        >
          Production-ready platforms we've built and ship to clients worldwide.
        </motion.p>
      </div>
    </section>
  );
};

export default ExecutionRoadmapSection;
