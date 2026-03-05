import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "Who is Orbito?",
    answer: "Orbito is a team of three freelance developers — senior and junior engineers with expertise in Backend Systems, Full-Stack Development, and Generative AI. We combine creativity with technical depth to deliver scalable, secure, and innovative digital solutions for startups, enterprises, and entrepreneurs worldwide."
  },
  {
    question: "What kind of projects do you take on?",
    answer: "We specialize in: Backend and distributed system architecture, AI-powered applications (NLP, chatbots, automation), Full-stack web development (React, Node.js, Python, MongoDB), Real-time dashboards and SaaS platforms, Multi-tenant e-commerce systems. Whether you're building an MVP, scaling an enterprise product, or integrating AI into your workflow — we can help."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. Orbito is remote-first and works with clients across the globe. We're comfortable adapting to different time zones and communication styles to make collaboration seamless."
  },
  {
    question: "How do you price your services?",
    answer: "We offer flexible engagement models: Fixed-price projects for well-defined requirements, Hourly or retainer-based contracts for ongoing or evolving needs. Pricing depends on scope, complexity, and timelines. We'll always provide a transparent estimate before starting."
  },
  {
    question: "How do we communicate during the project?",
    answer: "We use a combination of email, Slack/Discord, and video calls to stay aligned. For project management, we can adapt to tools like Jira, Trello, or Notion — or use your preferred workflow."
  },
  {
    question: "Can you handle end-to-end development?",
    answer: "Yes. From concept and UI/UX planning to backend architecture, frontend design, and AI integration, we can build complete products. We also provide ongoing support, scaling, and maintenance after launch."
  },
  {
    question: "How experienced is the team?",
    answer: "Sourav Ahmed – Senior Full-Stack & Backend Architect with years of experience in scalable system design and AI-powered apps. Ayush Jha – AI & Backend Specialist, focused on Python, Generative AI, and automation workflows. Krrish Kumar – Full-Stack Developer (React, Python, MongoDB) with fresh perspectives and 1 year of hands-on project experience. Together, we balance senior expertise with innovative thinking."
  },
  {
    question: "What makes Orbito different from other freelancers or agencies?",
    answer: "Small team, big impact – You get direct communication with the developers building your project. Scalability mindset – We design systems to grow with your business. Cutting-edge tech – We stay updated with the latest in AI, backend systems, and frontend frameworks. Global focus – We're not just coders, we're partners who understand international client needs."
  },
  {
    question: "Can you provide demos of your work?",
    answer: "Absolutely. We showcase live demos and case studies of past projects, including SaaS platforms, AI solutions, and real-time dashboards. You can explore them on our Projects page or request a private walkthrough."
  },
  {
    question: "How do we get started?",
    answer: "Simply reach out to us at 📧 orbitohq@gmail.com with your project idea. We'll schedule a call, understand your requirements, and provide you with a tailored proposal and roadmap."
  }
];

const FAQSection = () => {
  return (
    <section className="container px-4 py-24 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-6">
            Frequently Asked <span className="heading-accent">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Everything you need to know about working with Orbito
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass rounded-xl p-8 border-white/10"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="text-left text-white hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;