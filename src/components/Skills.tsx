import { motion } from "motion/react"

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa"

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si"

import { TbApi } from "react-icons/tb"

const skills = [
  {
    name: "React.js",
    icon: FaReact,
    color: "text-[#61DAFB]",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-[#339933]",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-300",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-[#47A248]",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-[#06B6D4]",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-[#F7DF1E]",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178C6]",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-[#FFCA28]",
  },
  {
    name: "REST APIs",
    icon: TbApi,
    color: "text-purple-400",
  },
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
    color: "text-[#F05032]",
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-sm tracking-widest text-cyan-400 uppercase mb-4">
            02. My Arsenal
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Technologies I work with.
          </h2>
        </motion.div>

        {/* Skills */}
        <div className="flex flex-wrap gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 glass px-6 py-4 cursor-pointer transform-gpu"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 via-cyan-400/20 to-blue-500/10" />

                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">

                  <Icon
                    className={`text-2xl ${skill.color}`}
                  />

                  <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>

                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}