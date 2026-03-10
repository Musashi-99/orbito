import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import { appConfig } from "@/config/features";
import StaticPageShell from "@/components/StaticPageShell";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: appConfig.contact.email,
    href: `mailto:${appConfig.contact.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: appConfig.contact.phoneDisplay,
    href: appConfig.contact.phoneHref,
  },
  {
    icon: MapPin,
    label: "Location",
    value: appConfig.contact.location,
    href: null,
  },
];

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StaticPageShell
      eyebrow="Contact"
      title={
        <>
          Start the conversation.
          <br />
          We will handle the <span className="heading-accent italic">technical path</span>.
        </>
      }
      description={
        <>
          If you are planning a product, scaling an existing system, or trying
          to untangle a hard engineering problem, send the details here. The
          more context you share, the faster we can be useful.
        </>
      }
      heroAside={
        <div className="page-panel max-w-md">
          <p className="page-kicker">Before you send</p>
          <div className="mt-5 space-y-3">
            {appConfig.contact.responseNotes.map((item) => (
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
      <section className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <div className="page-panel">
            <p className="page-kicker">Reach us directly</p>
            <div className="mt-5 space-y-4">
              {contactDetails.map((item) => (
                <div key={item.label} className="page-panel-muted">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm leading-7 text-gray-400 transition-colors hover:text-white"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm leading-7 text-gray-400">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-panel">
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">
              What happens next
            </h2>
            <div className="mt-5 space-y-3">
              {appConfig.contact.nextSteps.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm leading-7 text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.aside>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="page-panel"
        >
          <div>
            <p className="page-kicker">Project inquiry</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Tell us what you are building.
            </h2>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-gray-400 md:text-[0.98rem]">
            Include the product type, current stage, stack if known, and the
            main problem you want solved. That helps us respond with something
            specific instead of sending you generic follow-up questions.
          </p>
          <div className="mt-8 rounded-[24px] border border-white/5 bg-black/30 p-5 md:p-6">
            <ContactForm />
          </div>
        </motion.section>
      </section>
    </StaticPageShell>
  );
};

export default Contact;
