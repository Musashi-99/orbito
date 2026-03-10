import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  Compass,
  Layers3,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";

import StaticPageShell from "@/components/StaticPageShell";
import { Button } from "@/components/ui/button";

const principles = [
  {
    icon: Code2,
    title: "Engineering first",
    description:
      "We care about architecture, delivery quality, and maintainability because that determines how far a product can actually go.",
  },
  {
    icon: Layers3,
    title: "Product-minded execution",
    description:
      "We think in user flows, monetization, and operating constraints, not just tickets and isolated features.",
  },
  {
    icon: ShieldCheck,
    title: "Built for production",
    description:
      "Reliability, observability, performance, and security are part of the work from the start, not cleanup tasks later.",
  },
  {
    icon: Users,
    title: "Embedded collaboration",
    description:
      "We work like a focused extension of the client team: direct communication, visible progress, and ownership without noise.",
  },
];

const operatingModel = [
  "Small senior team with high context density",
  "Fast feedback loops and clear technical decision-making",
  "Strong on full-stack products, AI systems, and backend scale",
];

const outcomes = [
  {
    title: "Less translation loss",
    text: "The same team can reason about user-facing product decisions and deep system constraints without handoff gaps.",
  },
  {
    title: "Faster movement",
    text: "We keep scope sharp and execution direct, which reduces drag compared to bloated agency-style delivery layers.",
  },
  {
    title: "Better long-term systems",
    text: "The codebase and infrastructure stay workable after launch because they are designed for growth from the start.",
  },
];

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StaticPageShell
      eyebrow="About ORBITO"
      title={
        <>
          We build serious products
          <br />
          with a <span className="heading-accent italic">small, sharp</span> team.
        </>
      }
      description={
        <>
          ORBITO is a product engineering group for teams that need strong
          technical execution without bloated process. We work across
          full-stack product development, applied AI, and scalable backend
          systems, with a bias for shipping work that holds up under real use.
        </>
      }
      heroAside={
        <div className="page-panel max-w-md">
          <p className="page-kicker">What defines us</p>
          <div className="mt-5 space-y-3">
            {operatingModel.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-4 text-sm leading-7 text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      }
    >
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="page-panel"
        >
          <p className="page-kicker">Why we exist</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Bridge the gap between an ambitious idea and a stable, scalable
            system.
          </h2>
          <p className="mt-5 text-sm leading-8 text-gray-400 md:text-[0.98rem]">
            A lot of products fail in the middle layer. The idea is real, the
            business pressure is real, but the implementation quality is not.
            ORBITO exists to close that gap. We help founders and teams move
            from concept, prototype, or unstable codebase into a product that
            can launch, operate, and keep evolving without falling apart.
          </p>
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="page-panel"
        >
          <p className="page-kicker">How we work</p>
          <div className="mt-5 space-y-4">
            {[
              {
                icon: Compass,
                title: "Start from the real constraint",
                text: "We find the technical decisions that actually shape launch speed, product quality, and scaling risk.",
              },
              {
                icon: Rocket,
                title: "Move fast with structure",
                text: "We cut waste, keep scope honest, and ship in cycles that keep momentum visible.",
              },
            ].map((item) => (
              <div key={item.title} className="page-panel-muted">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.aside>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {principles.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="page-panel"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <item.icon className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white">
              {item.title}
            </h2>
            <p className="mt-4 text-sm leading-8 text-gray-400 md:text-[0.98rem]">
              {item.description}
            </p>
          </motion.article>
        ))}
      </section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="page-panel"
      >
        <p className="page-kicker">What clients get</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {outcomes.map((item) => (
            <div key={item.title} className="page-panel-muted">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-8 text-gray-400 md:text-[0.98rem]">
            If you need a team that can think through architecture, product
            tradeoffs, and execution with the same level of seriousness, we are
            built for that type of work.
          </p>
          <Button
            size="lg"
            className="button-gradient mt-6"
            onClick={() => navigate("/contact")}
          >
            Talk to ORBITO
          </Button>
        </div>
      </motion.section>
    </StaticPageShell>
  );
};

export default About;
