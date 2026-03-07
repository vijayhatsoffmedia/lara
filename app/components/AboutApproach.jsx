"use client"

import { motion } from "framer-motion"

export default function AboutApproach() {

    const sections = [
        {
            title: "Our Approach",
            desc: "We believe AI should be practical, not theoretical. Every product we build is designed to ship, scale, and deliver measurable value from day one."
        },
        {
            title: "Engineering Quality",
            desc: "We ship code that lasts. Clean architecture, rigorous testing, comprehensive documentation, and continuous monitoring."
        },
        {
            title: "Real-World Impact",
            desc: "Our work powers field operations, enhances safety systems, enables local commerce, and provides the foundation for next-generation AI platforms."
        }
    ]

    return (

        <section className="py-28 border-b border-gray-900">

            <div className="max-w-5xl mx-auto px-8 space-y-16">

                {sections.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >

                        <h3 className="text-2xl font-semibold mb-4">
                            {item.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            {item.desc}
                        </p>

                    </motion.div>
                ))}

            </div>

        </section>

    )
}