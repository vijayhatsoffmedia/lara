"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CareersPage() {

    const roles = [
        {
            title: "iOS / Flutter Engineer",
            desc: "Build cross-platform mobile applications with Flutter or native iOS. Experience with Swift/Flutter required. Perfect for engineers seeking flexible project-based work.",
            meta: ["Part-Time", "Remote", "3-Month Contract"]
        },
        {
            title: "Sales Manager",
            desc: "Drive business growth and build client relationships. Experience in B2B sales, preferably in tech or AI sectors. Strong communication and negotiation skills essential.",
            meta: ["Part-Time", "UK"]
        }
    ]

    const reasons = [
        {
            title: "Remote-First",
            desc: "Work from anywhere in theIND and globally. Flexible hours. Focus on outcomes, not presence."
        },
        {
            title: "Real Impact",
            desc: "Build systems used by real users solving real-world problems."
        },
        {
            title: "Learn & Grow",
            desc: "Work on cutting-edge AI systems and expand your skills continuously."
        }
    ]

    return (

        <main className="bg-black text-white">

            {/* HERO */}

            <section className="py-40 border-b border-gray-900">
                <div className="max-w-7xl mx-auto px-8">

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl font-bold mb-6"
                    >
                        Build the future with us.
                    </motion.h1>

                    <p className="text-gray-400 max-w-xl">
                        Join a remote-first team working on cutting-edge AI products and engineering challenges.
                    </p>

                </div>
            </section>


            {/* WHY LARA */}

            <section className="py-28 border-b border-gray-900">

                <div className="max-w-7xl mx-auto px-8">

                    <h2 className="text-4xl font-bold mb-16">
                        Why LARA
                    </h2>

                    <div className="grid md:grid-cols-3 gap-16">

                        {reasons.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="border-l border-gray-700 pl-6"
                            >

                                <h3 className="text-xl font-semibold mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400">
                                    {item.desc}
                                </p>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>


            {/* OPEN ROLES */}

            <section className="py-28">

                <div className="max-w-7xl mx-auto px-8">

                    <h2 className="text-4xl font-bold mb-16">
                        Open Roles
                    </h2>

                    <div className="space-y-10">

                        {roles.map((role, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="border border-gray-800 p-8 flex flex-col md:flex-row md:items-center md:justify-between"
                            >

                                <div>

                                    <h3 className="text-2xl font-semibold mb-2">
                                        {role.title}
                                    </h3>

                                    <p className="text-gray-400 mb-4 max-w-xl">
                                        {role.desc}
                                    </p>

                                    <div className="flex gap-6 text-sm text-gray-500">
                                        {role.meta.map((m, index) => (
                                            <span key={index}>{m}</span>
                                        ))}
                                    </div>

                                </div>

                                <Link
                                    href="/contact"
                                    className="mt-6 md:mt-0 border border-gray-700 px-6 py-3 hover:bg-white hover:text-black transition"
                                >
                                    Apply Now →
                                </Link>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>

        </main>

    )
}