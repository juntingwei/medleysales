import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Launching from "./components/Launching"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="bg-offwhite">
          <Navbar/>
          <Hero/>
          <Features/>
          <Launching/>
          <Contact/>
    </div>
  )
}
