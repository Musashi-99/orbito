"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Amit Verma",
    role: "Founder, SaaS Startup (India)",
    initials: "AV",
    content: "Orbito helped us design and build a scalable backend architecture that handled rapid user growth without issues. Their system design and execution were clean, reliable, and production-ready."
  },
  {
    name: "Sarah Mitchell",
    role: "Product Manager, US-Based Startup",
    initials: "SM",
    content: "Working with Orbito felt like having an in-house engineering team. They delivered our full-stack application on time and made thoughtful architectural decisions that saved us future rework."
  },
  {
    name: "Rahul Mehta",
    role: "CTO, FinTech Platform (India)",
    initials: "RM",
    content: "The team at Orbito understands backend scalability and real-time systems deeply. Their experience with APIs, databases, and system performance made a real difference for our product."
  },
  {
    name: "Daniel Brooks",
    role: "Engineering Lead, US Startup",
    initials: "DB",
    content: "Orbito's engineers were proactive, transparent, and technically strong. From backend services to deployment, everything was handled with a high level of professionalism."
  },
  {
    name: "Neha Kapoor",
    role: "Operations Lead, AI-Driven Product (India)",
    initials: "NK",
    content: "Their AI integration and automation workflows reduced manual effort significantly. Orbito delivered exactly what we needed without unnecessary complexity."
  }
];

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
          <h2 className="text-5xl font-normal mb-4">Trusted by Founders & Engineering Teams</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Teams across India and the US rely on Orbito for scalable backend systems, AI solutions, and end-to-end product development.
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border border-white/5 card-glow-hover p-8">
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
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border border-white/5 card-glow-hover p-8">
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
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;