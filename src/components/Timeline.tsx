import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data/timeline';
import { ProjectCard } from './ProjectCard';

export function Timeline() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="relative container mx-auto px-4 py-20">
            {/* Central Line Background */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-white/5 overflow-hidden">
                <motion.div
                    style={{ height }}
                    className="w-full bg-primary shadow-[0_0_10px_#10b981]"
                />
            </div>

            <div className="relative z-10 flex flex-col gap-8 md:gap-0">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}
