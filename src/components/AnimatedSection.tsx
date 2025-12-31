import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'left' | 'right' | 'up' | 'none';
}

export const AnimatedSection = ({
    children,
    className = "",
    delay = 0,
    direction = 'up'
}: AnimatedSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 50 : 0,
            x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
            scale: direction === 'none' ? 0.8 : 1
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                type: "spring",
                bounce: 0.4
            }
        }
    };

    return (
        <div ref={ref} className={className}>
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={variants}
            >
                {children}
            </motion.div>
        </div>
    );
};
