"use client"

import { motion } from "framer-motion"

export default function ServicesPage() {

    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } }
    }

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

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
                        Services
                    </motion.h1>

                    <p className="text-gray-400 max-w-xl">
                        Enterprise-grade Google solutions designed for productivity,
                        collaboration, and AI-powered transformation.
                    </p>

                </div>
            </section>


            {/* GOOGLE WORKSPACE */}

            <section className="py-28 border-b border-gray-900">
                <div className="max-w-7xl mx-auto px-8">

                    <h2 className="text-4xl font-semibold mb-10">
                        Google Workspace
                    </h2>

                    <p className="text-gray-400 mb-16 max-w-xl">
                        Transform how your organization communicates,
                        collaborates, and creates with integrated tools built
                        for the modern workplace.
                    </p>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-16"
                    >

                        <motion.div variants={item} className="border-l border-gray-700 pl-6">
                            <h3 className="text-xl font-semibold mb-6">Unified Communication</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li>✔ Gmail for Business</li>
                                <li>✔ Google Meet HD video conferencing</li>
                                <li>✔ Google Chat secure messaging</li>
                            </ul>
                        </motion.div>

                        <motion.div variants={item} className="border-l border-gray-700 pl-6">
                            <h3 className="text-xl font-semibold mb-6">Real-Time Collaboration</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li>✔ Google Docs, Sheets, Slides</li>
                                <li>✔ Google Drive secure storage</li>
                                <li>✔ Shared Drives with granular permissions</li>
                            </ul>
                        </motion.div>

                        <motion.div variants={item} className="border-l border-gray-700 pl-6">
                            <h3 className="text-xl font-semibold mb-6">Security & Compliance</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li>✔ Admin Console management</li>
                                <li>✔ Mobile device management</li>
                                <li>✔ Zero-trust architecture</li>
                            </ul>
                        </motion.div>

                        <motion.div variants={item} className="border-l border-gray-700 pl-6">
                            <h3 className="text-xl font-semibold mb-6">Integration & Automation</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li>✔ Google Apps Script</li>
                                <li>✔ AppSheet integration</li>
                                <li>✔ Workflow automation</li>
                            </ul>
                        </motion.div>

                    </motion.div>

                </div>
            </section>


            {/* GOOGLE GEMINI */}

            <section className="py-28 border-b border-gray-900">
                <div className="max-w-7xl mx-auto px-8">

                    <h2 className="text-4xl font-semibold mb-10">
                        Google Gemini
                    </h2>

                    <p className="text-gray-400 mb-16 max-w-xl">
                        Enterprise AI that understands your business context,
                        automates workflows, and delivers measurable productivity gains.
                    </p>

                    <div className="grid md:grid-cols-2 gap-16">

                        <div className="border-l border-gray-700 pl-6">
                            <h3 className="text-xl font-semibold mb-6">AI-Powered Productivity</h3>

                            <ul className="space-y-4 text-gray-400">
                                <li>✔ Smart Compose & Summaries</li>
                                <li>✔ Contextual AI understanding company data</li>
                                <li>✔ Multi-Modal Intelligence</li>
                            </ul>

                        </div>

                        <div className="border-l border-gray-700 pl-6">
                            <h3 className="text-xl font-semibold mb-6">Data Grounding</h3>

                            <ul className="space-y-4 text-gray-400">
                                <li>✔ Drive Integration</li>
                                <li>✔ Internal Knowledge Base</li>
                                <li>✔ Privacy-first architecture</li>
                            </ul>

                        </div>

                    </div>

                </div>
            </section>


            {/* GOOGLE FOR EDUCATION */}

            <section className="py-28 border-b border-gray-900">
                <div className="max-w-7xl mx-auto px-8">

                    <h2 className="text-4xl font-semibold mb-10">
                        Google for Education
                    </h2>

                    <p className="text-gray-400 mb-16 max-w-xl">
                        Purpose-built tools for teaching, learning, and administration
                        that scale from individual classrooms to entire districts.
                    </p>

                    <div className="grid md:grid-cols-2 gap-16">

                        <div className="border-l border-gray-700 pl-6">
                            <h3 className="text-xl font-semibold mb-6">Teaching & Learning</h3>

                            <ul className="space-y-4 text-gray-400">
                                <li>✔ Google Classroom</li>
                                <li>✔ Chromebook Management</li>
                                <li>✔ Interactive tools for lessons</li>
                            </ul>

                        </div>

                        <div className="border-l border-gray-700 pl-6">
                            <h3 className="text-xl font-semibold mb-6">Student Safety</h3>

                            <ul className="space-y-4 text-gray-400">
                                <li>✔ Content filtering</li>
                                <li>✔ Activity monitoring</li>
                                <li>✔ Digital citizenship tools</li>
                            </ul>

                        </div>

                    </div>

                </div>
            </section>


            {/* IMPLEMENTATION */}

            <section className="py-28 border-b border-gray-900">

                <div className="max-w-7xl mx-auto px-8">

                    <h2 className="text-4xl font-semibold mb-12">
                        Implementation
                    </h2>

                    <p className="text-gray-400 mb-16 max-w-xl">
                        Our proven methodology ensures seamless migration,
                        rapid adoption, and sustained value from your Google investment.
                    </p>

                    <div className="grid md:grid-cols-4 gap-10">

                        <div>
                            <p className="text-gray-600 text-2xl">01</p>
                            <h3 className="mt-3 font-semibold">Discovery & Planning</h3>
                            <p className="text-gray-400 text-sm mt-2">
                                Audit existing infrastructure and map workflows.
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-600 text-2xl">02</p>
                            <h3 className="mt-3 font-semibold">Migration & Setup</h3>
                            <p className="text-gray-400 text-sm mt-2">
                                Data migration and environment configuration.
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-600 text-2xl">03</p>
                            <h3 className="mt-3 font-semibold">Training</h3>
                            <p className="text-gray-400 text-sm mt-2">
                                User training and onboarding sessions.
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-600 text-2xl">04</p>
                            <h3 className="mt-3 font-semibold">Optimization</h3>
                            <p className="text-gray-400 text-sm mt-2">
                                Continuous improvement and monitoring.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}

            <section className="py-32 text-center">

                <h2 className="text-4xl font-semibold mb-8">
                    Ready to transform your workspace?
                </h2>

                <p className="text-gray-400 mb-10">
                    Let's discuss how AI-powered tools can help your organization.
                </p>

                <button className="bg-white text-black px-6 py-3 rounded hover:opacity-90 transition">
                    Schedule Consultation →
                </button>

            </section>

        </main>
    )
}