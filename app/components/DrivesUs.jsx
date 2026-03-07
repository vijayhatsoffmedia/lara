"use client"

import { motion } from "framer-motion"

export default function DrivesUs() {

    const items = [
        {
            title: "Founder-Led",
            desc: "Direct access to decision-makers. Fast iteration cycles."
        },
        {
            title: "Product-Driven",
            desc: "User needs come first. Every feature serves a purpose."
        },
        {
            title: "Delivery-Focused",
            desc: "Ship early, ship often. Monitor performance and improve."
        }
    ]

    return (

        <section className="py-28">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-4xl font-bold mb-16">
                    What Drives Us
                </h2>

                <div className="grid md:grid-cols-3 gap-16">

                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="border-l border-blue-500 pl-6"
                        >

                            <h3 className="text-xl font-semibold mb-3">
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

    )
}