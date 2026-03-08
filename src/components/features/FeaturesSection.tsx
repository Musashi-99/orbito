import { features } from "@/config/features";
import { SpotlightCard } from "../ui/spotlight-card";
import { motion } from "framer-motion";
import { Check, Cpu, Zap, Shield, Sparkles } from "lucide-react";

export const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative container px-6 py-20 md:py-32 bg-black overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        {/* Subtitle Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Side: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-5 space-y-8 md:space-y-12"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] text-primary uppercase tracking-[0.2em] font-bold">
              <Sparkles className="w-3 h-3" />
              Specialized Engineering Unit
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.1] md:leading-[0.9]">
              What We <span className="text-primary italic">Do</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl">
              We serve as the elite engineering extension for startups and global teams, building <span className="text-white font-medium">high-performance digital systems</span> that scale to millions.
            </motion.p>
          </div>

          <div className="space-y-8">
            <ul className="space-y-4 md:space-y-5">
              {[
                { text: "Scalable backend systems for real-world traffic", icon: <Cpu className="w-5 h-5" /> },
                { text: "AI-powered applications and LLM orchestration", icon: <Zap className="w-5 h-5" /> },
                { text: "Full-stack web platforms built for speed", icon: <Check className="w-5 h-5" /> },
                { text: "Architecture consulting and tech-debt refactoring", icon: <Shield className="w-5 h-5" /> },
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  variants={itemVariants}
                  className="flex items-center gap-4 text-base md:text-lg text-gray-300 group"
                >
                  <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="group-hover:text-white transition-colors">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              variants={itemVariants}
              className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <p className="text-[10px] font-bold text-primary/80 uppercase tracking-[0.3em] text-center">Engineered Capabilities</p>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 md:gap-y-4">
                {[
                  "Chaos Engineering Defense",
                  "Database Sharding Techniques",
                  "Dead Letter Recovery",
                  "Microservice Mesh",
                  "Eventual Consistency",
                  "Low Memory Footprint",
                  "SSR Deep Injection"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors cursor-default">
                    <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-full content-start mt-8 lg:mt-0">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`m-2`}
            >
              <SpotlightCard className="h-full flex flex-col p-8 bg-neutral-900/40 border-white/5 hover:border-primary/20 transition-all group overflow-hidden">
                <div className="relative mb-6 md:mb-8 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(74,222,128,0.1)] group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light mb-6">
                  {feature.description}
                </p>

                <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] md:text-xs font-bold text-primary opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  EXPLORE MODULE <Zap className="w-3 h-3" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <div className="w-24 h-24 border-r border-t border-primary rounded-tr-3xl" />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};