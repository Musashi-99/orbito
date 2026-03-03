import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import TechStackCarousel from "@/components/TechStackCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import WhyGlobalTeamsSection from "@/components/WhyGlobalTeamsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import { CommitsGrid } from "@/components/ui/commits-grid";
import { Gallery6 } from "@/components/ui/gallery6";

const ourWorkItems = [
  {
    id: "work-1",
    title: "WhatsApp E-Commerce Platform",
    summary: "Built a complete e-commerce system inside WhatsApp — AI-driven search, order management, and payments via chat.",
    url: "#",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
  },
  {
    id: "work-2",
    title: "Multi-Tenant SaaS Platform",
    summary: "Affordable Shopify alternative for small businesses with real-time chat support and multi-tenant architecture.",
    url: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: "work-3",
    title: "AI Semantic Search Engine",
    summary: "Context-aware search engine with NLP-based semantic search, fully customizable for any business workflow.",
    url: "#",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
  {
    id: "work-4",
    title: "Real-Time Analytics Dashboard",
    summary: "Kafka-driven enterprise dashboard streaming live data with WebSocket-based visualizations.",
    url: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "work-5",
    title: "AI Call Review System",
    summary: "Automated call analysis with Whisper ASR transcription and sentiment analysis using fine-tuned LLMs.",
    url: "#",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&q=80",
  },
];

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
            <Button 
              size="lg" 
              variant="link" 
              className="text-white"
              onClick={() => {
                const element = document.getElementById('our-work');
                if (element) {
                  const yOffset = -100;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
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

      {/* Our Work Gallery */}
      <div id="our-work" className="bg-black">
        <Gallery6 heading="Our Work" items={ourWorkItems} />
      </div>

      {/* Projects Section */}
      <div className="bg-black">
        <ProjectsSection />
      </div>

      {/* Why Global Teams Section */}
      <div className="bg-black">
        <WhyGlobalTeamsSection />
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
