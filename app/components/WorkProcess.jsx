"use client"

import { motion } from "framer-motion"

export default function WorkProcess() {

  const steps = [
    {
      number: "01",
      title: "Design",
      desc: "Define the problem, map the system, plan the solution"
    },
    {
      number: "02",
      title: "Build",
      desc: "Engineer with precision, test continuously"
    },
    {
      number: "03",
      title: "Deploy",
      desc: "Ship to production, monitor performance"
    },
    {
      number: "04",
      title: "Scale",
      desc: "Optimize, expand, and evolve with your business"
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
          How We Work
        </motion.h2>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-10"
        >

          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -10 }}
              className="group cursor-pointer transition"
            >

              {/* Big Number */}
              <p className="text-gray-600 text-3xl font-light group-hover:text-blue-500 transition">
                {step.number}
              </p>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-4 group-hover:text-white transition">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-3 leading-relaxed">
                {step.desc}
              </p>

              {/* Hover Line */}
              <div className="h-[2px] w-0 bg-blue-500 mt-6 group-hover:w-full transition-all duration-500"></div>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>

  )
}