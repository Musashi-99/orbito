import { motion } from "framer-motion";

const TechStackCarousel = () => {
  const technologies = [
    { logo: "/tech-logos/react.svg", name: "React" },
    { logo: "/tech-logos/tailwind.svg", name: "Tailwind CSS" },
    { logo: "/tech-logos/nodejs.svg", name: "Node.js" },
    { logo: "/tech-logos/fastapi.svg", name: "FastAPI" },
    { logo: "/tech-logos/mongodb.svg", name: "MongoDB" },
    { logo: "/tech-logos/postgresql.svg", name: "PostgreSQL" },
    { logo: "/tech-logos/redis.svg", name: "Redis" },
    { logo: "/tech-logos/kafka.svg", name: "Kafka" },
    { logo: "/tech-logos/docker.svg", name: "Docker" },
  ];

  const extendedTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden bg-[#050505] py-16 mt-20">
      <div className="container px-4 mb-4">
        <p className="text-xs text-gray-400 text-center mb-4">
          Production-grade technologies we use to build scalable digital products
        </p>
        <p className="text-sm text-gray-500 uppercase tracking-widest text-center">
          Our Core Tech Stack
        </p>
      </div>

      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: "0%" }}
        animate={{
          opacity: 1,
          x: "-50%"
        }}
        transition={{
          opacity: { duration: 0.5 },
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }
        }}
        style={{
          width: "fit-content",
          display: "flex",
          gap: "4rem"
        }}
      >
        {extendedTechnologies.map((tech, index) => (
          <motion.div
            key={`tech-${index}`}
            className="flex flex-col items-center gap-3 group cursor-pointer"
            initial={{ opacity: 0.5 }}
            whileHover={{
              opacity: 1,
              transition: { duration: 0.2 }
            }}
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-10 h-10 object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]"
              />
            </div>
            <span className="text-xs text-gray-600 font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-gray-400">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStackCarousel;
