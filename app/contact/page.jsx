"use client"

import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="py-40 border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-8">

          <motion.h1
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            Let's talk.
          </motion.h1>

          <p className="text-gray-400 max-w-2xl text-lg">
            Whether you're a founder with an idea, an enterprise looking to scale,
            or an engineer exploring opportunities — we'd love to hear from you.
          </p>

        </div>
      </section>


      {/* CONTACT INFO */}
      <section className="py-28 border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-8">

          <motion.h2
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.6}}
            className="text-2xl font-semibold mb-6"
          >
            Get in touch
          </motion.h2>

          <p className="text-gray-400 mb-10 max-w-xl">
            We typically respond within 24 hours on business days.
            For urgent inquiries, please reach out via email.
          </p>

          {/* EMAIL */}
          <div className="flex items-center gap-4 border border-gray-800 w-fit px-6 py-4 mb-12">

            <div className="border border-gray-700 p-2">
              ✉
            </div>

            <a
              href="mailto:ContactUs@aight.uk"
              className="text-gray-300 hover:text-white transition"
            >
              ContactUs@aight.uk
            </a>

          </div>


          {/* OFFICE */}
          <div className="border-t border-gray-900 pt-10">

            <h3 className="text-lg font-semibold mb-4">
              Office
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Aight Ltd <br/>
              Buckinghamshire <br/>
              United Kingdom <br/>
              Remote-first AI Product Studio
            </p>

          </div>

        </div>
      </section>

    </main>
  )
}