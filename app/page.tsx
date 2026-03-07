import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhatWeBuild from "./components/WhatWeBuild"
import WorkProcess from "./components/WorkProcess"
import Technology from "./components/Technology"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar/>
      <Hero/>
      <WhatWeBuild/>
      <WorkProcess/>
      <Technology/>

    </main>
  )
}