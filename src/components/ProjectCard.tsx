import { motion } from 'framer-motion';
import { Globe, Terminal, Brain, Code2, Cpu, Mic, Zap } from 'lucide-react';
import { Project } from '../data/timeline';
import { clsx } from 'clsx';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const CategoryIcon = ({ category }: { category: Project['category'] }) => {
  switch (category) {
    case 'web': return <Globe className="w-5 h-5" />;
    case 'python': return <Terminal className="w-5 h-5" />;
    case 'ai': return <Brain className="w-5 h-5" />;
    case 'tool': return <Code2 className="w-5 h-5" />;
    case 'agentic': return <Mic className="w-5 h-5" />;
    default: return <Cpu className="w-5 h-5" />;
  }
};

const colors = [
  'bg-wrapped-lime',
  'bg-wrapped-pink',
  'bg-wrapped-cyan',
  'bg-wrapped-yellow'
];

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const cardColor = colors[index % colors.length];
  const rotateValue = isEven ? 2 : -2;

  // Wrapped-style hard shadow color logic (opposite of card color for contrast)
  const shadowClass = 'shadow-hard';

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100, rotate: rotateValue * 2 }}
      whileInView={{ opacity: 1, x: 0, rotate: rotateValue }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
      className={clsx(
        "flex w-full mb-32 relative z-10",
        isEven ? "justify-start" : "justify-end"
      )}
    >
      {/* Connector Line Dot - Pop Art Style */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-8 h-8 bg-black border-4 border-white rounded-full z-20 flex items-center justify-center">
        <div className={`w-3 h-3 rounded-full ${cardColor}`} />
      </div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.2 } }}
        className={clsx(
          "w-full md:w-[45%] relative p-8 border-[3px] border-black text-black group",
          cardColor,
          shadowClass,
          isEven ? "md:mr-auto" : "md:ml-auto"
        )}>

        {/* "Sticker" shine effect */}
        <div className="absolute top-2 right-2 w-full h-full bg-white opacity-10 blur-xl rounded-full pointer-events-none mix-blend-overlay" />

        <div className="flex justify-between items-start mb-6 border-b-2 border-black pb-4">
          <div className="flex gap-2 items-center">
            <div className="p-2 bg-black text-white rounded-none border-2 border-white">
              <CategoryIcon category={project.category} />
            </div>
            <span className="font-mono font-bold bg-white px-2 py-1 border-2 border-black text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {project.date}
            </span>
          </div>
          <Zap className="w-8 h-8 fill-black text-black animate-wobble" />
        </div>

        <h3 className="font-heading text-5xl font-black mb-4 uppercase leading-[0.85] tracking-tighter text-stroke-white-1">
          {project.title}
        </h3>

        <p className="font-mono text-sm font-bold leading-relaxed mb-6 bg-white/50 p-4 border-2 border-black backdrop-blur-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-black text-white text-xs font-mono font-bold uppercase border border-white hover:bg-white hover:text-black transition-colors cursor-default">
              #{tech}
            </span>
          ))}
        </div>

        {(project.link || project.github) && (
          <div className="flex gap-4">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-white border-2 border-black font-black uppercase tracking-tight hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-black text-white border-2 border-white font-black uppercase tracking-tight hover:bg-white hover:text-black hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                Code
              </a>
            )}
          </div>
        )}

      </motion.div>
    </motion.div>
  );
}

