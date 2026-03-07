"use client"

import { motion } from "framer-motion"

export default function Technology() {

  const tech = [
    {
      title: "Agentic AI",
      desc: "Advanced autonomous systems with reasoning capabilities."
    },
    {
      title: "Voice Agents",
      desc: "Real-time speech processing with natural language understanding."
    },
    {
      title: "Cloud-Native",
      desc: "Scalable infrastructure built for modern distributed systems."
    }
  ]

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (

    <section className="py-28 border-b border-gray-900">

      <div className="max-w-7xl mx-auto px-8">

        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-20"
        >
          Technology
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-16"
        >

          {tech.map((item, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -10 }}
              className="group cursor-pointer transition"
            >

              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-500 transition">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              {/* Animated line */}
              <div className="h-[2px] w-0 bg-blue-500 mt-6 group-hover:w-full transition-all duration-500"></div>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>

  )
}