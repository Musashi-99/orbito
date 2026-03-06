"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { SpotlightCard } from "./ui/spotlight-card";

const row1Testimonials = [
  {
    name: "Rahul Mehta",
    role: "CTO · Logisy Technologies · Pune, India",
    initials: "RM",
    content: "We were seeing constant DB bottlenecks at 10K concurrent orders. ORBITO re-architected our write path using async queues and PostgreSQL partitioning. Latency dropped 70%. That's the kind of systems thinking we couldn't find locally."
  },
  {
    name: "Fabian Grossmann",
    role: "Co-Founder & CTO · Mivo GmbH · Hamburg, Germany",
    initials: "FG",
    content: "Our microservices were a mess — no circuit breakers, no retry logic, cascading failures every week. ORBITO mapped the failure points and shipped a robust inter-service layer in two sprints. Production has been calm since."
  },
  {
    name: "Ananya Krishnan",
    role: "Founder · Stealth AI · Bangalore, India",
    initials: "AK",
    content: "I needed an inference API that could handle burst traffic without breaking. ORBITO built a queued inference pipeline with workers and rate limiting. Went from 30% error rate to zero in production."
  },
  {
    name: "Jonas Becker",
    role: "Head of Engineering · Parkpal GmbH · Berlin, Germany",
    initials: "JB",
    content: "Our real-time parking system lagged by 8 seconds. ORBITO replaced polling with a WebSocket + Redis pub/sub architecture. Updates now land in under 300ms. Our users noticed the difference immediately."
  },
  {
    name: "Vikram Sinha",
    role: "Product Lead · Cresence · Mumbai, India",
    initials: "VS",
    content: "Scaling a multi-tenant SaaS without data isolation issues is genuinely hard. ORBITO designed our tenant-aware schema from scratch and automated provisioning. Onboarding a new enterprise client now takes minutes, not days."
  }
];

const row2Testimonials = [
  {
    name: "Neha Agarwal",
    role: "Founder & CEO · Supplify · Delhi, India",
    initials: "NA",
    content: "We were losing orders due to race conditions in our inventory service. ORBITO introduced optimistic locking and idempotency keys. Not a single duplicate order since. The attention to transactional correctness was impressive."
  },
  {
    name: "Moritz Steinbach",
    role: "CTO · Fieldy UG · Munich, Germany",
    initials: "MS",
    content: "We needed Kafka-based event sourcing for our field ops platform but had no internal expertise. ORBITO designed the topic structure, consumer groups, and dead-letter queues from scratch. Our audit trail is now rock solid."
  },
  {
    name: "Rohan Verma",
    role: "Head of Engineering · Finsight · Hyderabad, India",
    initials: "RV",
    content: "Our analytics pipeline was running on cronjobs and crashing nightly. ORBITO rewrote it as a streaming pipeline using Python workers and Redis streams. It now processes 2M events/day without breaking a sweat."
  },
  {
    name: "Lena Hofmann",
    role: "Co-Founder · Dokuno GmbH · Frankfurt, Germany",
    initials: "LH",
    content: "Document processing at scale is deceptively hard. ORBITO built us an async PDF pipeline with OCR, parallel workers, and a retry strategy that degrades gracefully. Our SLA went from 78% to 99.4% within a month."
  },
  {
    name: "Siddharth Rao",
    role: "CTO · Buildly · Chennai, India",
    initials: "SR",
    content: "We had a monolith that nobody wanted to touch. ORBITO did a strangler fig migration over three months — feature by feature, zero downtime. They didn't just write code, they documented every decision. The team can own it now."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof row1Testimonials[0] }) => (
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
              {row1Testimonials.map((testimonial, index) => (
                <TestimonialCard key={`r1-${index}-1`} testimonial={testimonial} />
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {row1Testimonials.map((testimonial, index) => (
                <TestimonialCard key={`r1-${index}-2`} testimonial={testimonial} />
              ))}
            </div>
          </div>
          {/* Row 2 */}
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8 [animation-direction:reverse]">
              {row2Testimonials.map((testimonial, index) => (
                <TestimonialCard key={`r2-${index}-1`} testimonial={testimonial} />
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8 [animation-direction:reverse]">
              {row2Testimonials.map((testimonial, index) => (
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
