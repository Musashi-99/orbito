import { motion } from "framer-motion";
import { Shield, Zap, Lock, Bug, Server, AlertTriangle } from "lucide-react";
import { SpotlightCard } from "./ui/spotlight-card";

const methodologies = [
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Thundering Herd Protection",
    description: "When thousands of requests hit at once — server restarts, cache expiry, viral moments — we handle it gracefully. Built into v0, not patched in v5.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Cache Stampede Prevention",
    description: "Stale-while-revalidate, probabilistic early expiration, mutex locks on cache misses. Your cache layer won't collapse under pressure.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Hot Key Distribution",
    description: "One popular item shouldn't take down your entire cluster. We shard hot keys, add jitter to TTLs, and use local caching layers to distribute load.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Transactional Integrity",
    description: "No partial writes, no phantom reads, no lost updates. We design data flows with ACID guarantees and saga patterns for distributed transactions.",
  },
  {
    icon: <Bug className="w-6 h-6" />,
    title: "Penetration Testing",
    description: "We personally test every codebase with Metasploit and Nmap. We find the vulnerabilities before someone else does — SQL injection, XSS, SSRF, auth bypass.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security-First Architecture",
    description: "Rate limiting, input validation, RBAC, secrets management, audit logging — these aren't afterthoughts. They're in the first commit.",
  },
];

const SecurityMethodology = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="section-heading mb-6">
            Built for <span className="heading-accent">Production</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Building with Electron or spinning up a CRUD app is easy — any AI can do that.
            But who handles the thundering herd at 3 AM? Who prevents the cache stampede
            during your product launch? Who finds the auth bypass before a bad actor does?
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
            <span className="text-foreground font-medium">We do this in v0</span> — so things never go out of hand.
            Our solutions protect your wallet, your scale, and your speed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodologies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <SpotlightCard className="h-full">
                <div className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityMethodology;
