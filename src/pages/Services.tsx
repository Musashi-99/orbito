import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Server, Brain, Code, Scaling, Database, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const mainServices = [
    {
      icon: <Server className="w-12 h-12" />,
      title: "Backend & System Architecture",
      description: "We design distributed, event-driven, and microservice-based backends that ensure your product can grow reliably.",
      features: [
        "Microservices Architecture",
        "Event-Driven Systems",
        "API Design & Development",
        "Cloud Infrastructure Setup"
      ]
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Generative AI Solutions",
      description: "From chatbots to automation systems and NLP search engines, we integrate AI that enhances user experiences and business operations.",
      features: [
        "Custom AI Chatbots",
        "NLP & Text Analysis",
        "Automation Systems",
        "AI Model Integration"
      ]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Full-Stack Web Development",
      description: "We build intuitive frontends with React and powerful backends using Python, Node.js, and MongoDB — delivering end-to-end solutions.",
      features: [
        "React & Next.js Applications",
        "RESTful API Development",
        "Database Design",
        "Responsive UI/UX"
      ]
    },
    {
      icon: <Scaling className="w-12 h-12" />,
      title: "Scalable Applications",
      description: "Real-time dashboards, SaaS platforms, and enterprise tools designed to scale with your users and business demands.",
      features: [
        "Real-Time Dashboards",
        "SaaS Platform Development",
        "Enterprise Solutions",
        "Performance Optimization"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Optimized database architecture for performance and scalability"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Implementation",
      description: "Comprehensive security measures to protect your applications"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Tuning",
      description: "Speed optimization and resource efficiency improvements"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and infrastructure management"
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
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Engineering scalable digital futures with cutting-edge technology and expert craftsmanship
            </p>
          </motion.div>

          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="glass glass-hover rounded-xl p-8 border-l-4 border-primary"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm text-primary">Key Features:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="section-heading mb-12 text-center">Additional <span className="heading-accent">Expertise</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="glass glass-hover rounded-xl p-6 text-center"
                >
                  <div className="flex justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="glass glass-hover rounded-xl p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="section-heading mb-6">Ready to Start Your <span className="heading-accent">Project?</span></h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss how we can help bring your vision to life with our technical expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="button-gradient"
                onClick={() => window.open('https://cal.com/your-company', '_blank')}
              >
                Book a Meeting
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;