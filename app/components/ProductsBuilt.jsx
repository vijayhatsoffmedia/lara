"use client"

import { motion } from "framer-motion"

export default function ProductsBuilt(){

const products=[
{title:"Agentic AI for SMEs",desc:"Autonomous AI systems that handle business operations and scale intelligently."},
{title:"Retail AI",desc:"Intelligent solutions for inventory, customer experiences, and store performance."},
{title:"Clinical Operations AI",desc:"Healthcare workflow automation and decision support systems."},
{title:"Hospitality AI",desc:"Smart systems for hotels, restaurants, and venues."}
]

return(

<section className="py-28 border-b border-gray-900">

<div className="max-w-7xl mx-auto px-8">

<h2 className="text-4xl font-bold mb-16">
Products Being Built
</h2>

<div className="grid md:grid-cols-2 gap-16">

{products.map((item,i)=>(
<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.6}}
className="border-l border-blue-500 pl-6"
>

<h3 className="text-xl font-semibold mb-2">
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