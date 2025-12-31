import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Terminal, Brain, Code2, Cpu, Mic } from 'lucide-react';
import { Project } from '../data/timeline';
import { clsx } from 'clsx';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const CategoryIcon = ({ category }: { category: Project['category'] }) => {
  switch (category) {
    case 'web': return <Globe className="w-4 h-4 text-primary" />;
    case 'python': return <Terminal className="w-4 h-4 text-secondary" />;
    case 'ai': return <Brain className="w-4 h-4 text-purple-600" />;
    case 'tool': return <Code2 className="w-4 h-4 text-indigo-500" />;
    case 'agentic': return <Mic className="w-4 h-4 text-rose-500" />;
    default: return <Cpu className="w-4 h-4 text-gray-400" />;
  }
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      className={clsx(
        "flex w-full mb-24 relative z-10",
        isEven ? "justify-start" : "justify-end"
      )}
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-[3px] border-primary z-20 shadow-sm" />

      {/* Content Card */}
      <motion.div
        whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.08)" }}
        className={clsx(
          "w-full md:w-[45%] relative p-8 md:p-10 rounded-3xl bg-white border border-zinc-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-300 group",
          isEven ? "text-right md:pr-14" : "text-left md:pl-14"
        )}>

        <div className={clsx(
          "flex items-center gap-3 mb-5 text-sm font-bold text-secondary/60 tracking-widest uppercase",
          isEven ? "justify-end" : "justify-start"
        )}>
          {!isEven && <CategoryIcon category={project.category} />}
          <span>{project.date}</span>
          {isEven && <CategoryIcon category={project.category} />}
        </div>

        <h3 className="font-heading text-4xl font-extrabold text-black mb-4 group-hover:text-primary transition-colors tracking-tight">
          {project.title}
        </h3>

        <p className="text-secondary leading-relaxed mb-8 text-lg font-medium">
          {project.description}
        </p>

        <div className={clsx(
          "flex flex-wrap gap-3 mb-8",
          isEven ? "justify-end" : "justify-start"
        )}>
          {project.tech.map((tech) => (
            <span key={tech} className="px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-xs font-bold text-secondary uppercase tracking-widest">
              {tech}
            </span>
          ))}
        </div>

        {(project.link || project.github) && (
          <div className={clsx(
            "flex gap-6",
            isEven ? "justify-end" : "justify-start"
          )}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-black hover:text-primary transition-colors text-sm font-extrabold uppercase tracking-widest">
                <ExternalLink className="w-4 h-4" /> Live
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-black transition-colors text-sm font-extrabold uppercase tracking-widest">
                <Github className="w-4 h-4" /> Code
              </a>
            )}
          </div>
        )}

      </motion.div>
    </motion.div>
  );
}
