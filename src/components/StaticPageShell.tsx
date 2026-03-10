import type { ReactNode } from "react";
import { motion } from "framer-motion";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";

interface StaticPageShellProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  heroAside?: ReactNode;
  children: ReactNode;
  mainClassName?: string;
  contentClassName?: string;
}

const StaticPageShell = ({
  eyebrow,
  title,
  description,
  heroAside,
  children,
  mainClassName,
  contentClassName,
}: StaticPageShellProps) => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />

      <main
        className={cn(
          "relative overflow-hidden bg-black pb-24 pt-32",
          mainClassName,
        )}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-8%] top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute right-[-12%] top-24 h-[360px] w-[360px] rounded-full bg-white/[0.04] blur-[110px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:44px_44px] opacity-30 [mask-image:radial-gradient(circle_at_top,#000_45%,transparent_85%)]" />
        </div>

        <div className="container relative px-4">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 grid gap-10 border-b border-white/5 pb-10 lg:mb-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:items-end"
          >
            <div className="max-w-4xl">
              <div className="page-eyebrow mb-4">{eyebrow}</div>
              <h1 className="text-4xl font-semibold leading-none tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                {title}
              </h1>
              <div className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
                {description}
              </div>
            </div>

            {heroAside ? (
              <div className="lg:justify-self-end">{heroAside}</div>
            ) : null}
          </motion.section>

          <div className={cn("space-y-10 lg:space-y-12", contentClassName)}>
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StaticPageShell;
