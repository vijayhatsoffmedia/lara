"use client"

import { motion } from "framer-motion"

export default function WhatWeBuild() {

  const services = [
    {
      title: "AI Products",
      description:
        "Production-grade AI systems designed for real-world deployment and continuous improvement.",
      items: [
        "Model Selection & Fine-tuning: Choosing the right AI architecture and training it on your specific use case.",
        "Production Pipeline: Building scalable inference systems with monitoring, versioning, and rollback capabilities.",
        "Continuous Learning: Implementing feedback loops that make your AI smarter over time with real user data."
      ]
    },
    {
      title: "Agentic Mobile Apps",
      description:
        "AI-powered mobile applications that autonomously adapt, learn, and act on behalf of users.",
      items: [
        "Intelligent Task Automation: Apps that anticipate user needs, execute multi-step workflows.",
        "On-Device AI Processing: Local models for instant decision-making with privacy-first architecture.",
        "Adaptive User Experiences: Interfaces that evolve based on behavior patterns."
      ]
    },
    {
      title: "Voice Agents",
      description:
        "Intelligent conversational interfaces that understand context and deliver natural interactions.",
      items: [
        "Real-Time Processing: Sub-200ms latency for natural conversation flow.",
        "Context Awareness: Understanding multi-turn dialogue and user intent.",
        "Multi-Channel Deployment: Seamlessly integrate across platforms."
      ]
    },
    {
      title: "Productivity & Collaboration",
      description:
        "Transforming workflows using AI productivity tools.",
      items: [
        "Strategic Readiness: Identify high-impact workflows.",
        "Contextual Integration: Ground AI in company knowledge.",
        "Enterprise Governance: Deploy enterprise-grade security."
      ]
    }
  ]

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const card = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (

    <section className="py-28 border-b border-gray-900">

      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-20"
        >
          What We Build
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-20"
        >

          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ scale: 1.02 }}
              className="border-l border-gray-700 pl-8 hover:border-blue-500 transition"
            >

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-8">
                {service.description}
              </p>

              <ul className="space-y-6 text-gray-400">

                {service.items.map((item, index) => (
                  <li key={index} className="flex gap-3">

                    <span className="text-blue-500">✔</span>

                    <span>{item}</span>

                  </li>
                ))}

              </ul>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>

  )
}