import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                🛡️ Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Effective Date: October 5, 2025
              </p>
              <p className="text-muted-foreground font-medium">
                Company: Orbito
              </p>
            </div>

            <div className="glass glass-hover rounded-xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Orbito, your privacy matters to us. This Privacy Policy
                  explains how we collect, use, and protect your personal
                  information when you use our website, services, or communicate
                  with our team. By using our site or services, you agree to
                  this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  We collect the following types of information:
                </p>

                <div className="space-y-4 ml-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      a. Personal Information
                    </h3>
                    <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>
                        Company or project details (if provided voluntarily)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      b. Technical Information
                    </h3>
                    <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                      <li>Browser type, device type, and operating system</li>
                      <li>IP address and general location data</li>
                      <li>Cookies and usage data for analytics</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      c. Communication Data
                    </h3>
                    <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                      <li>
                        Messages or details you share via our contact forms,
                        chats, or emails
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-3">
                  We use collected data to:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Respond to inquiries and manage projects</li>
                  <li>Provide and improve our services</li>
                  <li>Send important updates, proposals, or invoices</li>
                  <li>Analyze site performance and enhance user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="text-muted-foreground mt-4 font-semibold">
                  We never sell or rent your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  4. Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies to enhance user experience and analyze website
                  performance. You can disable cookies in your browser settings,
                  but some features may not function properly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  5. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement technical and organizational measures to protect
                  your data against unauthorized access, alteration, or loss.
                  Our systems use encrypted communication and secure cloud
                  infrastructure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  6. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal data only for as long as necessary to
                  fulfill the purposes stated in this policy or as required by
                  law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  7. Sharing Your Information
                </h2>
                <p className="text-muted-foreground mb-3">
                  We may share your data with:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Trusted freelancers and developers within our team</li>
                  <li>
                    Service providers (e.g., hosting, analytics, or payment
                    gateways)
                  </li>
                  <li>Legal authorities, if required by law</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  All partners comply with confidentiality and data protection
                  standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  8. Your Rights
                </h2>
                <p className="text-muted-foreground mb-3">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Access, correct, or delete your personal data</li>
                  <li>Withdraw consent at any time</li>
                  <li>Request a copy of your data</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Contact us at{" "}
                  <a
                    href="mailto:orbitohq@gmail.com"
                    className="text-primary hover:underline"
                  >
                    orbitohq@gmail.com
                  </a>{" "}
                  to exercise your rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  9. International Data Transfers
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  As a global remote team, your information may be processed in
                  different countries. We ensure that such transfers comply with
                  applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  10. Policy Updates
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this policy periodically. All updates will be
                  posted on this page with a new "Effective Date."
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  11. Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions or concerns about this Privacy Policy:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    📧 Email:{" "}
                    <a
                      href="mailto:orbitohq@gmail.com"
                      className="text-primary hover:underline"
                    >
                      orbitohq@gmail.com
                    </a>
                  </p>
                  <p>🌍 Location: Remote Global Team</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
