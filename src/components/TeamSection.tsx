import { motion } from "framer-motion";
import { SpotlightCard } from "./ui/spotlight-card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const teamMembers = [
  {
    name: "Sourav Ahmed",
    role: "Senior Full-Stack & Backend Architect",
    title: "Team Lead, System Designer, AI-Driven Solutions Architect",
    expertise: "Distributed systems, scalable backend architecture, full-stack apps, AI integration",
    description: "With years of experience in building production-ready systems, Sourav combines precision and innovation to design applications that are robust, secure, and future-ready. He's the architect behind our large-scale AI and SaaS projects.",
    quote: "I believe in building systems that don't just work today — they scale for tomorrow.",
    avatar: "SA",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    socials: {
      github: "https://github.com/b33lz3bubTH/",
      linkedin: "https://www.linkedin.com/in/sourav-ahmed-dev/"
    }
  },
  {
    name: "Ayush Jha",
    role: "AI & Backend Specialist",
    title: "Machine Learning Engineer, Backend Developer",
    expertise: "Generative AI, Python development, automation, NLP systems",
    description: "Ayush bridges the gap between traditional software development and the future of AI. He specializes in fine-tuned AI models, intelligent automation, and backend workflows that drive smarter products for our clients.",
    quote: "For me, AI isn't just a tool — it's a way to reimagine how businesses and users interact with technology.",
    avatar: "AJ",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4"
  },
  {
    name: "Krrish Kumar",
    role: "Full-Stack & AI Developer (Junior)",
    title: "Frontend Developer, Support Engineer",
    expertise: "React, Python, MongoDB, Generative AI",
    description: "As the youngest member of the team, Krrish brings energy, fresh ideas, and the latest coding practices. With a year of real-world experience, he supports both frontend and backend tasks, ensuring projects move fast without sacrificing quality.",
    quote: "I'm passionate about building interfaces and experiences that feel simple, yet powerful.",
    avatar: "KK",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    socials: {
      github: "https://github.com/Musashi-99",
      linkedin: "https://www.linkedin.com/in/krrishbuilds/"
    }
  }
];

const TeamSection = () => {
  return (
    <section className="container px-4 py-24 bg-black">
      <div className="max-w-2xl mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left"
        >
          Meet the{" "}
          <span className="text-gradient font-medium">Team</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-400 text-left"
        >
          At Orbito, we're more than just developers — we're builders, problem-solvers, and collaborators. Each member brings unique strengths, ensuring we cover the full spectrum of modern tech development.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <SpotlightCard className="h-full">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={member.image} />
                    <AvatarFallback className="bg-primary/20 text-primary font-medium">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-medium text-white">{member.name}</h3>
                    <p className="text-primary text-sm font-medium">{member.role}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">🔹 Role:</p>
                    <p className="text-sm text-gray-300">{member.title}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">🔹 Expertise:</p>
                    <p className="text-sm text-gray-300">{member.expertise}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">🔹 What he brings:</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{member.description}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm italic text-primary">💡 "{member.quote}"</p>
                  </div>

                  {member.socials && (
                    <div className="flex gap-3 pt-4">
                      {member.socials.github && (
                        <Button variant="outline" size="icon" asChild className="h-9 w-9 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                          <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub`}>
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.socials.linkedin && (
                        <Button variant="outline" size="icon" asChild className="h-9 w-9 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`}>
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SpotlightCard>
          <div className="p-8 text-center">
            <h3 className="text-2xl font-medium mb-6 text-white">🌍 Why Our Team Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-medium text-primary mb-2">Balance of Experience & Fresh Energy</h4>
                <p className="text-sm text-gray-400">Senior guidance + innovative perspectives</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-primary mb-2">Full-Stack Coverage</h4>
                <p className="text-sm text-gray-400">From frontend to backend to AI integration</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-primary mb-2">Collaborative Approach</h4>
                <p className="text-sm text-gray-400">We work as one unit, not isolated freelancers</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-primary mb-2">Global Mindset</h4>
                <p className="text-sm text-gray-400">We adapt to international clients' needs and deliver world-class quality</p>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </section>
  );
};

export default TeamSection;
