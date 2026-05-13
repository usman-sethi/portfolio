import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Glass Cloud",
    description: "A secure cloud storage platform where users can upload, save, and manage photos, videos, and files with encrypted storage and authentication.",
    features: ["Authentication", "Secure cloud storage", "Media uploads", "Encryption", "Responsive dashboard"],
    tech: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&fm=webp&q=70&auto=format&fit=crop",
    github: "#",
    live: "https://glasscloud.vercel.app"
  },
  {
    title: "Paradox Chatbot",
    description: "An AI-powered chatbot platform where users can talk naturally with AI for conversations, emotional comfort, and interactive experiences.",
    features: ["AI conversations", "Real-time chat", "Smooth messaging UI", "Personalized interaction"],
    tech: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    image: "data:image/jpeg;base64,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"
  },
  {
    title: "Paradox Musico",
    description: "A modern music streaming platform where users can upload, discover, and listen to songs freely.",
    features: ["Music uploads", "Audio streaming", "Playlist system", "Modern music player UI"],
    tech: ["React", "Express", "MongoDB", "Redux"],
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&fm=webp&q=70&auto=format&fit=crop",
    github: "#",
    live: "https://paradox-songs.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-sm font-display tracking-widest text-brand-accent-from uppercase mb-4">
            03. Featured Work
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Some things I've built.
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-brand-accent-from/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  width={600}
                  height={338}
                  decoding="async"
                  className="w-full h-auto aspect-video object-cover rounded-2xl filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Project Info */}
              <div className={`w-full lg:w-2/5 flex flex-col ${index % 2 !== 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                <h3 className="text-3xl font-bold mb-6 font-display">{project.title}</h3>
                
                <div className={`glass p-6 md:p-8 rounded-2xl mb-6 relative z-20 ${index % 2 !== 0 ? '' : 'lg:-ml-12'}`}>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider text-left">Key Features:</p>
                    <ul className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end justify-start'}`} aria-label={`${project.title} features`}>
                      {project.features.map(feature => (
                        <li key={feature} className="text-xs text-gray-300 glass-accent px-2 py-1 rounded-md">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ul className={`flex flex-wrap gap-4 text-sm font-mono text-brand-accent-from mb-8 ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end justify-start'}`} aria-label={`${project.title} technologies used`}>
                  {project.tech.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className={`flex items-center gap-6 text-gray-400 ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end justify-start'}`}>
                  <a href={project.github} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.live} className="hover:text-white transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer" aria-label={`Visit live demo for ${project.title}`}>
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
