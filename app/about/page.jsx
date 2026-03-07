import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AboutHero from "../components/AboutHero"
import AboutIntro from "../components/AboutIntro"
import AboutApproach from "../components/AboutApproach"
import ProductsBuilt from "../components/ProductsBuilt"
import DrivesUs from "../components/DrivesUs"

export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <AboutHero />

      <AboutIntro />

      <AboutApproach />

      <ProductsBuilt />

      <DrivesUs />


    </main>
  )
}