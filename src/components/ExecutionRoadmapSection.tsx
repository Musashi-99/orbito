import { motion } from "framer-motion";
import { SpotlightCard } from "./ui/spotlight-card";

const phases = [
  {
    label: "Weeks 1-2",
    title: "Positioning + Reliability Baseline",
    goals: [
      "Define one ideal customer profile and three service packages.",
      "Set RevHub SLOs: 99.9% uptime, p95 latency under 250ms, errors under 0.5%.",
      "Stand up observability: logs, traces, metrics, and alerting.",
    ],
  },
  {
    label: "Weeks 3-6",
    title: "Scalable Delivery + Sales Engine",
    goals: [
      "Backend template with auth, queues, retries, idempotency, and caching.",
      "CI/CD with lint, tests, security scan, staging deploy, and rollback checklist.",
      "Sales qualification, proposal kit, and pipeline tracking.",
    ],
  },
  {
    label: "Weeks 7-12",
    title: "Conversion + R&D",
    goals: [
      "UI system for landing, onboarding, dashboard, and pricing templates.",
      "Weekly UX audit tied to funnel drop-offs and conversion rates.",
      "20% R&D capacity for performance, automation, and cost-per-request improvements.",
    ],
  },
];

const owners = [
  {
    role: "Sourav",
    title: "Principal Backend & Architecture",
    focus:
      "RevHub performance, platform reliability, CI/CD, data architecture, and engineering standards.",
  },
  {
    role: "Krish",
    title: "UI/UX & Frontend Delivery",
    focus:
      "Design system, frontend consistency, onboarding clarity, and conversion-oriented UX flows.",
  },
  {
    role: "Gourab",
    title: "Sales & Growth",
    focus:
      "Lead qualification, proposal quality, deal velocity, and demand generation around RevHub.",
  },
];

const scoreboard = [
  { metric: "Uptime", target: "99.9%" },
  { metric: "p95 Latency", target: "< 250ms" },
  { metric: "Error Rate", target: "< 0.5%" },
  { metric: "Traffic Baseline", target: "100 req/sec sustained" },
];

const ExecutionRoadmapSection = () => {
  return (
    <section id="roadmap" className="container px-4 py-24 bg-black">
      <div className="max-w-3xl mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-heading mb-6"
        >
          RevHub <span className="heading-accent">Execution Roadmap</span>
        </motion.h2>
        <p className="text-lg text-gray-400">
          A focused 90-day operating model built for high-throughput delivery
          and predictable growth.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <SpotlightCard className="h-full">
              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-primary mb-4">
                  {phase.label}
                </p>
                <h3 className="text-xl text-white mb-5">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.goals.map((goal) => (
                    <li
                      key={goal}
                      className="text-sm text-gray-300 leading-relaxed flex gap-3"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpotlightCard>
          <div className="p-7">
            <h3 className="text-xl text-white mb-5">Ownership Model</h3>
            <div className="space-y-4">
              {owners.map((owner) => (
                <div
                  key={owner.role}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm text-primary font-medium">
                    {owner.role}
                  </p>
                  <p className="text-white text-base">{owner.title}</p>
                  <p className="text-gray-400 text-sm mt-2">{owner.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard>
          <div className="p-7">
            <h3 className="text-xl text-white mb-5">RevHub Scoreboard</h3>
            <div className="grid grid-cols-2 gap-3">
              {scoreboard.map((item) => (
                <div
                  key={item.metric}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-5"
                >
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    {item.metric}
                  </p>
                  <p className="text-white text-xl mt-2">{item.target}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-5">
              Weekly review cadence: engineering SLOs, sales funnel conversion,
              delivery risks, and R&D decisions.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default ExecutionRoadmapSection;
