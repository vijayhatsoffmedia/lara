"use client"

import { motion } from "framer-motion"

export default function AboutHero() {

    return (

        <section className="py-40 border-b border-gray-900">

            <div className="max-w-7xl mx-auto px-8">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl font-bold mb-6"
                >
                    About AIGHT
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg"
                >
                    We're building the future of software development, one product at a time.
                </motion.p>

            </div>

        </section>

    )
}