export default function Services() {

  const services = [
    "AI Agents",
    "AI SaaS Platforms",
    "Voice AI",
    "Automation Systems"
  ]

  return (
    <section className="py-32 px-10">

      <h2 className="text-4xl font-bold mb-16 text-center">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {services.map((service,i)=>(
          <div
            key={i}
            className="border border-gray-800 p-8 rounded-xl hover:bg-white hover:text-black transition"
          >
            {service}
          </div>
        ))}

      </div>

    </section>
  )
}