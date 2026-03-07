"use client"

import { motion } from "framer-motion"

export default function AboutIntro() {

    return (

        <section className="py-28 border-b border-gray-900">

            <div className="max-w-5xl mx-auto px-8">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-10"
                >
                    UK-based AI Product Studio specializing in cutting-edge Agentic AI
                </motion.h2>

                <div className="space-y-6 text-gray-400 leading-relaxed">

                    <p>
                        AIGHT Ltd is a UK-based AI and product studio at the forefront of agentic AI development. We build autonomous systems that don't just respond to commands—they reason, plan, and act independently to achieve complex goals.
                    </p>

                    <p>
                        Our focus on agentic AI sets us apart. We're developing intelligent systems that can make decisions, adapt to changing conditions, and execute multi-step workflows without constant human oversight.
                    </p>

                    <p>
                        A core part of our expertise is Copilot Engineering—helping SMEs unlock real value from AI assistants integrated into their daily workflows.
                    </p>

                    <p>
                        From SMEs to clinical operations, retail to hospitality, we're deploying agentic AI solutions that transform how businesses operate.
                    </p>

                </div>

            </div>

        </section>

    )
}