import { features } from "@/config/features";
import { SpotlightCard } from "../ui/spotlight-card";
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  return (
    <section className="container px-4 py-24 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-xs text-primary uppercase tracking-widest font-medium">
              Our expertise in building scalable software systems.
            </p>
            <h2 className="section-heading mb-6 tracking-tight text-white italic">
              What We <span className="heading-accent">Do</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-gray-200 font-medium">
              We help startups and businesses build scalable digital products.
            </p>
            <ul className="space-y-4">
              {[
                "Scalable backend systems designed for real-world traffic",
                "AI-powered applications and automation tools",
                "Full-stack web platforms built for performance",
                "Production-ready architectures that scale with your users"
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-lg text-gray-400">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-white/5 space-y-4">
              <p className="text-sm font-semibold text-primary/80 uppercase tracking-wider">Advanced Engineering Capabilities</p>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Thundering herd protection and cache stampede prevention",
                  "Hot key distribution and high-traffic cache architecture",
                  "Event-driven systems using distributed logs (Kafka)",
                  "Horizontal monolith and microservice architectures",
                  "Eventual consistency and distributed data strategies",
                  "High-performance systems with low memory footprint",
                  "Custom React SSR pipelines with dynamic code injection",
                  "Automated SEO infrastructure with sitemap generation and static site rendering"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="text-primary/60 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <SpotlightCard className="aspect-square flex flex-col justify-center p-8 bg-white/5 border-white/10">
                <div className="text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};