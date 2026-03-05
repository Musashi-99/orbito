import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactCard } from "@/components/ui/contact-card";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="container px-4 py-24 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight">
            Start Your{" "}
            <span className="text-gradient font-medium">Project</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss your vision and bring it to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <ContactCard
            title="Start Your Project"
            description="Ready to bring your vision to life? Fill out the form and we'll get back to you within 1 business day to discuss your project."
            className="bg-[#1B1B1B]/80 border-white/10 text-white"
            formSectionClassName="bg-[#1B1B1B]/40"
            contactInfo={[
              {
                icon: Mail,
                label: 'Email',
                value: 'orbitohq@gmail.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+92 312 1234567',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Remote Global Team',
                className: 'col-span-2',
              }
            ]}
          >
            <ContactForm />
          </ContactCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;