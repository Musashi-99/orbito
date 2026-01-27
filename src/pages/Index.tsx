import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import TechStackCarousel from "@/components/TechStackCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import { CommitsGrid } from "@/components/ui/commits-grid";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Command className="w-4 h-4 inline-block mr-2" />
            Global freelancer team of experienced developers
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="Orbito — Engineering" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="Scalable Digital Futures" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            We are a global freelancer team of experienced developers building full-stack applications, powerful AI solutions, and high-performance backend systems for ambitious clients worldwide.{" "}
            <span className="text-white">Start your project today.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient" asChild>
              <a href="https://cal.com/your-company" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
            </Button>
            <Button size="lg" variant="link" className="text-white">
              Explore Our Work <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mx-auto max-w-5xl mt-20"
        >
          <CommitsGrid text="ORBITO" />
        </motion.div>
      </motion.section>

      {/* Tech Stack Carousel */}
      <TechStackCarousel />

      {/* Features Section */}
      <div id="features" className="bg-black">
        <FeaturesSection />
      </div>

      {/* Projects Section */}
      <div className="bg-black">
        <ProjectsSection />
      </div>

      {/* Why Choose Section */}
      <div className="bg-black">
        <WhyChooseSection />
      </div>

      {/* Benefits Section */}
      <div className="bg-black">
        <BenefitsSection />
      </div>

      {/* Team Section */}
      <div className="bg-black">
        <TeamSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-black">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* FAQ Section */}
      <div className="bg-black">
        <FAQSection />
      </div>

      {/* Contact Section */}
      <div className="bg-black">
        <ContactSection />
      </div>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
