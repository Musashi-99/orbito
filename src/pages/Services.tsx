import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  CloudCog,
  Code2,
  Database,
  Gauge,
  GitBranch,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import StaticPageShell from "@/components/StaticPageShell";
import { Button } from "@/components/ui/button";

const serviceTracks = [
  {
    icon: Code2,
    title: "Product Engineering",
    description:
      "We design and build the application layer end to end, from user flows and frontend architecture to APIs, data models, and production rollout.",
    deliverables: [
      "React and TypeScript frontends",
      "Admin panels and internal tools",
      "API contracts and backend services",
      "Launch-ready UX with production QA",
    ],
  },
  {
    icon: Brain,
    title: "Applied AI Systems",
    description:
      "We turn AI into a working product surface, not a demo. That includes retrieval, automation, classification, review workflows, and LLM-driven features wired into your stack.",
    deliverables: [
      "LLM workflow orchestration",
      "RAG and semantic search systems",
      "Whisper and multimodal pipelines",
      "Human-in-the-loop review tooling",
    ],
  },
  {
    icon: CloudCog,
    title: "Backend and Infrastructure",
    description:
      "We build the systems underneath the product so traffic spikes, background jobs, and media-heavy workloads do not break the business when adoption arrives.",
    deliverables: [
      "Distributed backend architecture",
      "Caching, queues, and event pipelines",
      "Cloud deployment and observability",
      "Scaling plans for high-throughput systems",
    ],
  },
  {
    icon: Workflow,
    title: "Modernization and Rescue",
    description:
      "When an existing product is slow, fragile, or hard to ship, we step in to stabilize the codebase, improve delivery speed, and remove technical bottlenecks.",
    deliverables: [
      "Legacy cleanup and refactors",
      "Performance and reliability fixes",
      "Build pipeline and release repair",
      "Architecture reviews with execution support",
    ],
  },
];

const engagementSteps = [
  {
    title: "Scope the real problem",
    text: "We translate business goals into concrete product, system, and delivery decisions before writing code.",
  },
  {
    title: "Ship in focused cycles",
    text: "We work in short execution loops with visible progress, not long black-box development phases.",
  },
  {
    title: "Handover without chaos",
    text: "You get production code, documentation, context transfer, and a cleaner path for the next stage of growth.",
  },
];

const capabilities = [
  { icon: Database, label: "Data modeling and storage strategy" },
  { icon: GitBranch, label: "CI/CD, release flow, and delivery hygiene" },
  { icon: Gauge, label: "Performance tuning and bottleneck removal" },
  { icon: ShieldCheck, label: "Security hardening and operational safeguards" },
];

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StaticPageShell
      eyebrow="Engineering Services"
      title={
        <>
          Build the product.
          <br />
          Keep the system <span className="heading-accent italic">ready</span>.
        </>
      }
      description={
        <>
          ORBITO works as a focused engineering unit for startups and growing
          teams that need strong product execution, modern infrastructure, and
          clear technical ownership. We do not just deliver features. We build
          the system those features need to survive in production.
        </>
      }
      heroAside={
        <div className="page-panel max-w-md">
          <p className="page-kicker">How we plug in</p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] px-3 py-4">
              <p className="text-2xl font-semibold text-white">0-1</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                Product builds
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] px-3 py-4">
              <p className="text-2xl font-semibold text-white">AI</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                System layers
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] px-3 py-4">
              <p className="text-2xl font-semibold text-white">Scale</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                Infra and ops
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-400">
            Best fit for teams that need senior execution across product,
            backend, AI, and launch infrastructure without assembling a full
            in-house unit first.
          </p>
        </div>
      }
    >
      <section className="grid gap-6 lg:grid-cols-2">
        {serviceTracks.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="page-panel"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <service.icon className="h-7 w-7" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
                0{index + 1}
              </span>
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 text-sm leading-8 text-gray-400 md:text-[0.98rem]">
              {service.description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm leading-6 text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="page-panel"
        >
          <p className="page-kicker">Delivery Model</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Clear execution, not vague consulting.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-gray-400 md:text-[0.98rem]">
            We usually work inside a narrow, high-impact scope: launch a
            product, build a critical system, or fix the bottlenecks blocking
            growth. That keeps momentum high and makes ownership obvious.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {engagementSteps.map((step) => (
              <div key={step.title} className="page-panel-muted">
                <p className="text-sm font-semibold text-white">{step.title}</p>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="page-panel"
        >
          <p className="page-kicker">Included by default</p>
          <div className="mt-5 space-y-3">
            {capabilities.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-sm leading-6 text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="page-panel text-center"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
            <Sparkles className="h-7 w-7" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Need a team that can actually ship this?
          </h2>
          <p className="mt-4 text-sm leading-8 text-gray-400 md:text-[0.98rem]">
            Tell us what you are building, what is stuck, or what scale you are
            preparing for. We will turn that into a technical approach and a
            realistic execution path.
          </p>
          <Button
            size="lg"
            className="button-gradient mt-8"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </div>
      </motion.section>
    </StaticPageShell>
  );
};

export default Services;
