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
    image: "https://images.unsplash.com/photo-1675557009875-436f5b9d35a0?w=600&fm=webp&q=70&auto=format&fit=crop",
    github: "#",
    live: "https://paradox-chatbot.vercel.app/"
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
