import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, Mail, ShieldCheck } from "lucide-react";

import StaticPageShell from "@/components/StaticPageShell";
import { appConfig } from "@/config/features";
import { Button } from "@/components/ui/button";

const policySections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "This Privacy Policy explains how Orbito collects, uses, stores, and protects personal information when you use our website, submit an inquiry, or work with our team.",
      "By using our website or engaging with our services, you agree to the practices described here.",
    ],
  },
  {
    title: "2. Information We Collect",
    bullets: [
      "Personal information you provide directly, such as name, email address, phone number, company details, or project information.",
      "Technical information such as IP address, browser type, device type, operating system, and general analytics or usage data.",
      "Communication records when you contact us through forms, email, or other support channels.",
    ],
  },
  {
    title: "3. How We Use Information",
    bullets: [
      "Respond to inquiries and evaluate project fit.",
      "Deliver services, proposals, updates, and operational communication.",
      "Improve site performance, user experience, and internal workflows.",
      "Comply with legal, regulatory, or contractual obligations.",
    ],
    note: "We do not sell or rent personal information.",
  },
  {
    title: "4. Cookies and Analytics",
    paragraphs: [
      "We may use cookies or similar technologies to improve website performance and understand how visitors use the site. You can manage cookies through your browser settings.",
    ],
  },
  {
    title: "5. Data Security",
    paragraphs: [
      "We use reasonable technical and organizational measures to protect personal information from unauthorized access, misuse, loss, or disclosure. No method of transmission or storage is completely risk-free, but we aim to apply production-grade safeguards where appropriate.",
    ],
  },
  {
    title: "6. Data Retention",
    paragraphs: [
      "We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, support legitimate business operations, or comply with legal obligations.",
    ],
  },
  {
    title: "7. Sharing Information",
    bullets: [
      "Team members or trusted contractors involved in service delivery.",
      "Service providers that support hosting, analytics, communication, or operational tooling.",
      "Authorities or legal entities where disclosure is required by applicable law.",
    ],
    note: "When third parties are involved, we expect confidentiality and appropriate data handling standards.",
  },
  {
    title: "8. Your Rights",
    bullets: [
      "Request access to personal information we hold about you.",
      "Request correction or deletion where applicable.",
      "Withdraw consent where processing is based on consent.",
      "Ask questions about how your information is used.",
    ],
  },
  {
    title: "9. International Transfers",
    paragraphs: [
      "Because Orbito operates as a remote team, information may be processed across multiple jurisdictions. We aim to handle such transfers in a way that is consistent with applicable privacy obligations.",
    ],
  },
  {
    title: "10. Updates to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Changes will be reflected on this page with the revised effective date.",
    ],
  },
];

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StaticPageShell
      eyebrow="Legal"
      title={
        <>
          Privacy policy that is
          <br />
          clear, not <span className="heading-accent italic">buried</span>.
        </>
      }
      description={
        <>
          This page explains what information Orbito collects, why it is used,
          and how we handle it. The effective date for this policy is
          October 5, 2025.
        </>
      }
      heroAside={
        <div className="page-panel max-w-md">
          <p className="page-kicker">Quick summary</p>
          <div className="mt-5 space-y-3">
            {[
              "Applies to website visitors, inquiries, and service conversations",
              "Information is used for operations, communication, and service delivery",
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
          <p className="page-kicker">At a glance</p>
          <div className="mt-5 space-y-4">
            {[
              {
                icon: LockKeyhole,
                title: "Collected directly",
                text: "Names, emails, phone numbers, company details, and messages you choose to share.",
              },
              {
                icon: ShieldCheck,
                title: "Used carefully",
                text: "To respond, deliver services, improve operations, and meet legal obligations.",
              },
              {
                icon: Mail,
                title: "Reach us",
                text: `${appConfig.contact.email} for privacy questions or data requests.`,
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
          {policySections.map((section, index) => (
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

              {section.note ? (
                <p className="mt-5 text-sm font-medium leading-7 text-white">
                  {section.note}
                </p>
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
          Need clarification on how your data is handled?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-gray-400 md:text-[0.98rem]">
          If anything here is unclear, contact us directly and we will point you
          to the relevant details.
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

export default PrivacyPolicy;
