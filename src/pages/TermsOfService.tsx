import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

const TermsOfService = () => {
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
                ⚖️ Terms of Service
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
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Orbito's website or services, you agree
                  to these Terms of Service and our Privacy Policy. If you do
                  not agree, please do not use our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  2. Services Provided
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Orbito provides freelance software development, AI
                  integration, backend architecture, and related digital
                  services. Each project will be governed by a mutually agreed
                  proposal or contract outlining scope, pricing, and timelines.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  3. Client Responsibilities
                </h2>
                <p className="text-muted-foreground mb-3">Clients must:</p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Provide accurate project details and timely feedback</li>
                  <li>
                    Supply all necessary content or credentials to complete the
                    project
                  </li>
                  <li>Ensure no copyrighted or illegal material is shared</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  4. Payments & Pricing
                </h2>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>
                    Payment terms are defined in individual contracts or
                    proposals
                  </li>
                  <li>
                    Late payments may result in project delays or suspension
                  </li>
                  <li>
                    Prices are subject to change but will not affect ongoing
                    contracts
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  5. Intellectual Property
                </h2>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Upon full payment, clients own the final deliverables</li>
                  <li>
                    Orbito retains rights to its pre-existing code, frameworks,
                    and templates
                  </li>
                  <li>
                    Clients may not resell or redistribute Orbito's proprietary
                    tools without consent
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  6. Confidentiality
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to keep confidential information private,
                  including project details, client data, and proprietary
                  materials.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  7. Warranties & Limitations
                </h2>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>
                    Orbito provides its services with professional skill and
                    care
                  </li>
                  <li>
                    However, we do not guarantee uninterrupted operation or
                    complete freedom from bugs
                  </li>
                  <li>
                    Liability is limited to the total amount paid for the
                    specific project
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  8. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate a project with written notice if
                  terms are breached or obligations remain unmet. Completed work
                  up to the termination date will be billed accordingly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  9. Portfolio Usage
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unless otherwise requested in writing, Orbito may showcase
                  completed work (excluding sensitive data) in its portfolio or
                  marketing materials.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  10. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of the jurisdiction in
                  which Orbito operates (Global Remote / Default: India-based
                  clients follow Indian Contract Law).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  11. Contact
                </h2>
                <p className="text-muted-foreground mb-4">
                  For questions or disputes:
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
                  <p>
                    📞 Phone:{" "}
                    <a
                      href="tel:+923121234567"
                      className="text-primary hover:underline"
                    >
                      +92 312 1234567
                    </a>
                  </p>
                  <p>🌍 Remote Global Team</p>
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

export default TermsOfService;
