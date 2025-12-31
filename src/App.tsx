import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from './components/Timeline';
import { ArrowDown, Code2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden">

      {/* Background Grid */}
      {/* Background Grid & Noise */}
      <div className="fixed inset-0 z-0 bg-noise pointer-events-none opacity-50"></div>
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center z-10 p-4 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#10b981]" />
          <span className="font-mono text-sm text-secondary tracking-widest uppercase">System Online // 2025</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[12vw] leading-[0.85] font-black text-black mb-12 tracking-tighter mix-blend-multiply"
        >
          THE ASCENT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl text-secondary max-w-3xl font-light leading-relaxed mb-24"
        >
          From <span className="text-black font-semibold">PHP Monoliths</span> to <span className="text-primary font-bold">Agentic AI</span>.
          <br />
          365 days of relentless engineering.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 flex flex-col items-center gap-4"
        >
          <span className="font-mono text-xs text-secondary/50 uppercase tracking-[0.2em] font-semibold">Scroll to Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-zinc-300 to-transparent" />
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 pb-32">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          PROJECT LOG
        </h2>
        <Timeline />
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/10 bg-black/50 backdrop-blur-lg text-center">
        <p className="text-gray-500 font-mono text-sm">
          INITIALIZED BY <span className="text-white">VASUDEV</span> // END OF LINE_
        </p>
      </footer>

    </div>
  );
}

export default App;
