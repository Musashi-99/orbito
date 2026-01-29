import { motion } from "framer-motion";
import { ReactNode, useState, useRef } from "react";

interface FeatureTabProps {
  icon: ReactNode;
  title: string;
  description: string;
  isActive: boolean;
}

export const FeatureTab = ({ icon, title, description, isActive }: FeatureTabProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        w-full flex items-center gap-4 p-5 rounded-xl
        transition-colors duration-300 relative overflow-hidden
        border
        ${isActive 
          ? 'bg-white/5 backdrop-blur-lg shadow-lg shadow-primary/20 border-primary/30' 
          : 'border-white/10 hover:border-primary/40'
        }
      `}
    >
      {/* Radial glow that follows cursor */}
      {!isActive && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(74, 222, 128, 0.12), transparent 40%)`,
          }}
        />
      )}
      
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute left-0 top-0 w-1 h-full bg-primary rounded-l-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
      <div className="flex items-center gap-4 min-w-0 relative z-10">
        <div className={`${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
          {icon}
        </div>
        <div className="text-left min-w-0">
          <h3 className={`font-semibold truncate text-base ${isActive ? 'text-primary' : ''}`}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
