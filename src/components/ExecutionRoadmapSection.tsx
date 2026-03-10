import { motion } from "framer-motion";

const ExecutionRoadmapSection = () => {
  return (
    <section id="roadmap" className="container bg-black px-4 pt-24 pb-8 lg:pb-10">
      <div className="grid gap-8 border-b border-white/5 pb-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-end">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary"
          >
            Production-Ready Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-heading"
          >
            Our <span className="heading-accent">Flagship Products</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-xl text-base leading-7 text-gray-400 md:text-lg lg:justify-self-end"
        >
          Two platforms that show how ORBITO ships complete media systems:
          product UX, streaming infrastructure, monetization, and the backend
          scale needed to run them in production.
        </motion.p>
      </div>
    </section>
  );
};

export default ExecutionRoadmapSection;
