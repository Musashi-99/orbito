import { motion } from "framer-motion";
import { SpotlightCard } from "./ui/spotlight-card";
import { Target, Smartphone, Zap, Wrench, Users, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "We run behind results",
    description: "Every project is driven by measurable outcomes and client success."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Responsive Design",
    description: "Flawless experiences across all devices and screen sizes."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Optimized code for speedy load times and smooth interactions."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Custom Solutions",
    description: "Tailor-made frontend solutions to match your unique requirements."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaborative Approach",
    description: "We work closely with your team for seamless integration."
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: "Ongoing Support",
    description: "Continuous maintenance and updates to keep your frontend fresh."
  }
];

const BenefitsSection = () => {
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
          Our <span className="heading-accent">Benefits</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-400 text-left"
        >
          We deliver excellence through every aspect of our development process
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <SpotlightCard className="h-full">
              <div className="p-8 text-center">
                <div className="text-primary mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
