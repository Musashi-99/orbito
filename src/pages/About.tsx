import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Code, Globe, Rocket, Users } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      role: "Full-Stack Developer",
      expertise: "React, Node.js, MongoDB",
      description: "Specializes in building scalable web applications with modern JavaScript frameworks and cloud infrastructure."
    },
    {
      role: "AI/ML Engineer",
      expertise: "Python, TensorFlow, NLP",
      description: "Expert in implementing generative AI solutions, chatbots, and intelligent automation systems."
    },
    {
      role: "Backend Architect",
      expertise: "Microservices, Event-Driven Systems",
      description: "Designs distributed, event-driven architectures that ensure reliability and scalability."
    },
    {
      role: "DevOps Engineer",
      expertise: "AWS, Docker, CI/CD",
      description: "Ensures seamless deployment, monitoring, and infrastructure optimization for production systems."
    }
  ];

  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Excellence",
      description: "We write clean, maintainable code following industry best practices and modern standards."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Collaboration",
      description: "Our remote team brings diverse perspectives and 24/7 availability to every project."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies to build solutions that drive business growth."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Partnership",
      description: "We work as an extension of your team, ensuring transparent communication and collaboration."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              About Orbito
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are a global freelancer team of experienced developers building full-stack applications,
              powerful AI solutions, and high-performance backend systems for ambitious clients worldwide.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass glass-hover rounded-xl p-8 md:p-12 mb-20 max-w-5xl mx-auto"
          >
            <h2 className="section-heading mb-6 text-center">Our <span className="heading-accent">Mission</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At ORBITO, we bridge the gap between ambitious ideas and scalable reality. Our mission is to
              empower businesses with cutting-edge technology solutions that drive growth, enhance user experiences,
              and stand the test of scale. We believe in building not just software, but digital foundations that
              businesses can rely on as they grow from startup to enterprise.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="section-heading mb-12 text-center">Our Core <span className="heading-accent">Values</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass glass-hover rounded-xl p-6 text-center"
                >
                  <div className="flex justify-center mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Developer Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="section-heading mb-6 text-center">Our Developer <span className="heading-accent">Team</span></h2>
            <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Our team consists of specialized developers, each bringing deep expertise in their respective domains.
              Together, we form a cohesive unit capable of tackling any technical challenge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass glass-hover rounded-xl p-6 border-l-4 border-primary"
                >
                  <h3 className="text-xl font-bold mb-2">{member.role}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.expertise}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Work With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="glass glass-hover rounded-xl p-8 md:p-12 max-w-5xl mx-auto text-center"
          >
            <h2 className="section-heading mb-6">Why Work With <span className="heading-accent">ORBITO?</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Global Expertise</h3>
                <p className="text-muted-foreground">
                  Access to world-class talent without geographical constraints. We operate across time zones
                  to ensure your project never sleeps.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  We've delivered scalable solutions for startups, SMEs, and enterprises across various industries.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Future-Proof Technology</h3>
                <p className="text-muted-foreground">
                  We build with modern, maintainable tech stacks that grow with your business and adapt to change.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;