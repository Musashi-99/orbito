import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FileCheck2, Landmark, Mail, Scale } from "lucide-react";

import StaticPageShell from "@/components/StaticPageShell";
import { appConfig } from "@/config/features";
import { Button } from "@/components/ui/button";

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing Orbito's website or engaging with our services, you agree to these Terms of Service and our Privacy Policy. If you do not agree, do not use the website or proceed with the engagement.",
    ],
  },
  {
    title: "2. Services",
    paragraphs: [
      "Orbito provides software engineering, product development, backend architecture, AI implementation, and related technical services. Specific scope, pricing, timelines, and deliverables are defined in proposals, statements of work, or project agreements.",
    ],
  },
  {
    title: "3. Client Responsibilities",
    bullets: [
      "Provide accurate project requirements, feedback, and decision-making input in a timely way.",
      "Supply any necessary content, access, credentials, or third-party assets required to perform the work.",
      "Ensure materials shared with Orbito do not infringe third-party rights or violate applicable law.",
    ],
  },
  {
    title: "4. Fees and Payment",
    bullets: [
      "Commercial terms are governed by the specific proposal or agreement for each engagement.",
      "Late payment may delay work, handoff, support, or release activity.",
      "Updated pricing does not retroactively change existing signed agreements unless both parties agree.",
    ],
  },
  {
    title: "5. Intellectual Property",
    bullets: [
      "Upon full payment, the client owns the final project deliverables described in the applicable agreement unless stated otherwise.",
      "Orbito retains ownership of pre-existing materials, internal frameworks, reusable components, and proprietary know-how.",
      "Open-source components remain subject to their respective licenses.",
    ],
  },
  {
    title: "6. Confidentiality",
    paragraphs: [
      "Both parties are expected to keep confidential information private and use it only for the purpose of the engagement, unless disclosure is required by law or otherwise agreed in writing.",
    ],
  },
  {
    title: "7. Warranties and Limitations",
    bullets: [
      "Orbito will perform services with reasonable professional care and skill.",
      "Software work may still contain bugs, integration issues, or third-party dependencies outside Orbito's control.",
      "To the maximum extent permitted by law, liability is limited to the amount paid for the relevant project or work package.",
    ],
  },
  {
    title: "8. Termination",
    paragraphs: [
      "Either party may terminate an engagement according to the terms of the applicable agreement. Work completed up to the termination point may still be billable, and handoff obligations will depend on the payment status and agreed scope.",
    ],
  },
  {
    title: "9. Portfolio Use",
    paragraphs: [
      "Unless restricted by contract or confidentiality obligations, Orbito may reference completed work in its portfolio or marketing materials without exposing sensitive client data.",
    ],
  },
  {
    title: "10. Governing Law",
    paragraphs: [
      "These terms are governed by the law specified in the relevant agreement. Where no separate agreement exists, default interpretation may fall back to the jurisdiction in which Orbito primarily operates.",
    ],
  },
];

const TermsOfService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StaticPageShell
      eyebrow="Legal"
      title={
        <>
          Terms that define
          <br />
          how we <span className="heading-accent italic">work together</span>.
        </>
      }
      description={
        <>
          These Terms of Service describe the general legal framework for using
          the Orbito website and engaging Orbito for project work. The effective
          date is October 5, 2025.
        </>
      }
      heroAside={
        <div className="page-panel max-w-md">
          <p className="page-kicker">Quick summary</p>
          <div className="mt-5 space-y-3">
            {[
              "Project specifics are always defined in a separate proposal or agreement",
              "Ownership and payment terms depend on the active engagement terms",
              `Questions can be sent to ${appConfig.contact.email}`,
            ].map((item) => (
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
      <section className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="page-panel h-fit"
        >
          <p className="page-kicker">Key points</p>
          <div className="mt-5 space-y-4">
            {[
              {
                icon: FileCheck2,
                title: "Agreements matter",
                text: "Statements of work, proposals, or contracts override broad assumptions and define the exact project terms.",
              },
              {
                icon: Scale,
                title: "Shared responsibilities",
                text: "Good delivery depends on timely client feedback, access, and scope alignment as well as execution quality.",
              },
              {
                icon: Landmark,
                title: "Legal structure",
                text: "These terms provide the baseline legal framework when a more specific agreement does not say otherwise.",
              },
              {
                icon: Mail,
                title: "Questions",
                text: `For contract or terms clarifications, contact ${appConfig.contact.email}.`,
              },
            ].map((item) => (
              <div key={item.title} className="page-panel-muted">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.aside>

        <div className="space-y-5">
          {termsSections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="page-panel"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-sm leading-8 text-gray-400 md:text-[0.98rem]"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets ? (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm leading-7 text-gray-300"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.section>
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="page-panel text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Need clarification before starting a project?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-gray-400 md:text-[0.98rem]">
          If you want the commercial or legal details explained in plain
          language, contact us and we will walk through them directly.
        </p>
        <Button
          size="lg"
          className="button-gradient mt-6"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </Button>
      </motion.section>
    </StaticPageShell>
  );
};

export default TermsOfService;
