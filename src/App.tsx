
import { motion, useScroll, useTransform } from 'framer-motion';
import { Timeline } from './components/Timeline';
import { AnimatedSection } from './components/AnimatedSection';

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden cursor-crosshair">

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 bg-noise opacity-30 pointer-events-none mix-blend-multiply"></div>
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 z-0 opacity-10 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-wrapped-lime rounded-full blur-[100px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-wrapped-pink rounded-full blur-[100px] mix-blend-screen animate-wobble" />
      </motion.div>

      {/* Header / Nav */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference">
        <div className="flex justify-between items-center">
          <span className="font-heading font-black text-2xl tracking-tighter text-black">
            VASUDEV_2025
          </span>
          <div className="px-4 py-1 border-2 border-black rounded-full font-mono text-xs font-bold uppercase animate-pulse text-black">
            Recapping...
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center z-10 p-4 text-center overflow-hidden">

        <AnimatedSection direction="none" delay={0.2}>
          <div className="relative inline-block">
            <h1 className="font-heading text-[15vw] leading-[0.8] font-black text-wrapped-lime text-stroke-2 uppercase mb-4 drop-shadow-[8px_8px_0px_rgba(255,0,153,1)] hover:scale-105 transition-transform duration-300">
              The<br />Ascent
            </h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 md:w-48 md:h-48"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                <text className="text-[12px] font-mono font-bold uppercase tracking-widest">
                  <textPath href="#curve">
                    • 2025 Tech Journey • Engineering •
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5} className="max-w-4xl mx-auto">
          <p className="font-heading text-3xl md:text-5xl font-bold bg-black text-white p-4 inline-block transform -rotate-1 shadow-hard-lime mb-8 border-2 border-black">
            PHP Monoliths <span className="text-wrapped-pink">→</span> Agentic AI
          </p>
          <div className="bg-white border-4 border-black p-6 transform rotate-1 max-w-2xl mx-auto shadow-hard">
            <p className="font-mono text-lg md:text-xl leading-relaxed">
              365 days of code. 50+ projects. One hell of a ride.
              <br /><span className="text-wrapped-lime">SCROLL TO UNWRAP.</span>
            </p>
          </div>
        </AnimatedSection>

      </section>

      {/* Main Content Area */}
      <main className="relative z-10 pb-40">

        <div className="container mx-auto px-4 mb-20 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-[8vw] font-black text-transparent text-stroke-2 opacity-50 select-none pointer-events-none">
              YOUR TOP GENRES
            </h2>
          </AnimatedSection>
        </div>

        <Timeline />

      </main>

      {/* Footer */}
      <footer className="relative z-10 py-20 bg-wrapped-lime text-black overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-[12vw] leading-none font-black mb-8 opacity-90">
            WRAPPED
          </h2>
          <p className="font-mono text-xl font-bold uppercase tracking-widest mb-8">
            Created by Vasudev
          </p>
          <div className="inline-block p-4 bg-wrapped-lime text-black font-mono text-sm border-4 border-black transform hover:rotate-2 transition-transform cursor-pointer shadow-hard border-black">
            github.com/vasudev
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;

