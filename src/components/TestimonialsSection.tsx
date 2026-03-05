"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { SpotlightCard } from "./ui/spotlight-card";

const testimonials = [
  {
    name: "Arjun Deshmukh",
    role: "CTO, NexQueue (Pune)",
    initials: "AD",
    content: "We were struggling with our queue management backend — constant timeouts under load. Orbito rebuilt the whole pipeline using Redis and worker threads. Haven't had a single incident in 4 months now."
  },
  {
    name: "Lukas Schreiber",
    role: "Co-Founder, Planwell GmbH (Berlin)",
    initials: "LS",
    content: "Honestly didn't expect this level of ownership from an external team. They refactored our entire API layer, wrote proper tests, and even caught a critical auth bug we'd missed. Felt like working with senior engineers, not vendors."
  },
  {
    name: "Priya Nair",
    role: "Founder, Klaara Health (Bangalore)",
    initials: "PN",
    content: "We needed an ML pipeline that actually worked in production — not just a Jupyter notebook demo. Orbito shipped a working inference service with monitoring and logging in under 3 weeks. Our data team was genuinely impressed."
  },
  {
    name: "Tobias Engel",
    role: "Head of Engineering, Fleetaro (Munich)",
    initials: "TE",
    content: "They helped us migrate from a monolith to microservices without any downtime. The architecture docs they left behind are still our single source of truth. Really solid engineering thinking."
  },
  {
    name: "Sneha Kulkarni",
    role: "Product Lead, Draftbox (Hyderabad)",
    initials: "SK",
    content: "What stood out was how fast they understood our product context. Within the first week, they were shipping features that matched our design system perfectly. No hand-holding needed."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <SpotlightCard className="w-[400px] shrink-0 bg-black/40">
    <div className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-12 w-12 bg-white/10 border border-white/10">
          <AvatarFallback className="bg-transparent text-white/80 font-medium">{testimonial.initials}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium text-white/90">{testimonial.name}</h4>
          <p className="text-sm text-white/60">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-white/70 leading-relaxed">
        "{testimonial.content}"
      </p>
    </div>
  </SpotlightCard>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary mb-2 uppercase tracking-widest font-medium">
            Trusted by founders and engineering teams building scalable products.
          </p>
          <h2 className="section-heading mb-6">
            Trusted by Founders & <span className="heading-accent">Engineering Teams</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Teams across India and the US rely on ORBITO for scalable backend systems, AI solutions, and end-to-end product development.
          </p>
        </motion.div>

        <div className="relative flex flex-col gap-8 antialiased">
          {/* Row 1 */}
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard key={`r1-${index}-1`} testimonial={testimonial} />
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard key={`r1-${index}-2`} testimonial={testimonial} />
              ))}
            </div>
          </div>
          {/* Row 2 */}
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8 [animation-direction:reverse]">
              {testimonials.slice(3).map((testimonial, index) => (
                <TestimonialCard key={`r2-${index}-1`} testimonial={testimonial} />
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8 [animation-direction:reverse]">
              {testimonials.slice(3).map((testimonial, index) => (
                <TestimonialCard key={`r2-${index}-2`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
