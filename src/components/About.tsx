import { motion } from 'motion/react';
import { Layers, Server, Smartphone, Code } from 'lucide-react';

const stats = [
  {
    icon: <Layers className="w-6 h-6 text-blue-400" />,
    label: "Full Stack Developer",
    value: "MERN Stack"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    label: "Modern UI/UX",
    value: "Focus on Performance"
  },
  {
    icon: <Server className="w-6 h-6 text-green-400" />,
    label: "API & Database Systems",
    value: "Scalable Architecture"
  },
  {
    icon: <Code className="w-6 h-6 text-red-400" />,
    label: "Responsive Design",
    value: "Mobile First"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="text-sm font-display tracking-widest text-brand-accent-from uppercase mb-4">
            01. About Me
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Building digital products that matter.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
            I am a full stack MERN developer passionate about building modern, scalable, and user-focused web applications. I enjoy combining clean UI/UX with strong backend architecture to create real-world digital products. With years of learning and a strong focus on performance, I ensure that every application I build is both beautiful and robust.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:bg-white/[0.03] transition-colors group"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-gray-400 text-sm">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
