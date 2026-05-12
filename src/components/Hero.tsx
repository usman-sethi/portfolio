import { motion } from 'motion/react';
import { ChevronRight, Terminal, Code2, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] top-1/2 left-1/4 -translate-y-1/2" />
        <div className="absolute w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] top-1/2 right-1/4 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-accent mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-blue-200">Available for work</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Full Stack Developer Building Modern Web Experiences
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
            I build scalable full stack applications with modern UI/UX, smooth user experiences, and powerful backend systems.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95"
              aria-label="View Projects"
            >
              <span className="relative z-10 flex items-center justify-center">
                View Projects
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="#contact" 
              className="px-8 py-4 text-white font-medium rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Contact Me"
            >
              Contact Me
            </a>
          </div>

          <div className="text-sm font-display tracking-widest text-gray-400 uppercase">
            Usman Sethi (Paradox)
          </div>
        </motion.div>

        {/* Right Content - Floating Glassmorphism Cards */}
        <div className="relative h-[500px] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="glass p-6 rounded-2xl border border-white/10 shadow-2xl relative z-20"
            >
              <div className="flex items-center space-x-3 border-b border-white/10 pb-4 mb-4">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-gray-400 font-mono flex-1 text-center">app.tsx</div>
              </div>
              <pre className="font-mono text-sm text-gray-300 overflow-x-hidden">
                <code className="block text-purple-400">import <span className="text-blue-300">{`{ useState, useEffect }`}</span> from <span className="text-green-300">'react'</span>;</code>
                <code className="block mt-2 text-blue-400">const <span className="text-yellow-200">Developer</span> = () =&gt; {`{`}</code>
                <code className="block pl-4 mt-1 text-gray-300">const [skills, setSkills] = <span className="text-blue-300">useState</span>([</code>
                <code className="block pl-8 mt-1 text-green-300">'React', 'Node.js', 'MongoDB'</code>
                <code className="block pl-4 mt-1 text-gray-300">]);</code>
                <code className="block pl-4 mt-2 text-purple-400">return (</code>
                <code className="block pl-8 mt-1 text-gray-400">&lt;<span className="text-red-300">div</span> className="modern-ui"&gt;</code>
                <code className="block pl-12 mt-1 text-gray-300">{`{skills.map(skill => <Code key={skill} />)}`}</code>
                <code className="block pl-8 mt-1 text-gray-400">&lt;/<span className="text-red-300">div</span>&gt;</code>
                <code className="block pl-4 mt-1 text-purple-400">);</code>
                <code className="block mt-1 text-blue-400">{`}`}</code>
              </pre>
            </motion.div>

            {/* Floating decorator cards */}
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -top-10 -right-10 glass px-4 py-3 rounded-xl z-10 flex items-center space-x-3"
            >
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <Terminal size={16} />
              </div>
              <span className="text-xs font-medium text-gray-300">Backend API</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 -left-10 glass px-4 py-3 rounded-xl z-30 flex items-center space-x-3"
            >
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                <Code2 size={16} />
              </div>
              <span className="text-xs font-medium text-gray-300">Clean UI/UX</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-14 glass px-4 py-3 rounded-xl z-10 flex items-center space-x-3"
            >
              <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                <Database size={16} />
              </div>
              <span className="text-xs font-medium text-gray-300">MongoDB</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
