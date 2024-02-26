'use client'

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Launching from "./components/Launching"
import Contact from "./components/Contact"
import Waitlist from "./components/Waitlist"
import { useState, useEffect } from "react"

export default function Home() {
  
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollPosition)

  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className="bg-offwhite font-poppins">
          <Navbar 
            isOpen={isOpen} 
            closeModal={() => closeModal()}
            openModal={() => openModal()}
            scrollPosition={scrollPosition}
          />
          <Hero
            isOpen={isOpen} 
            closeModal={() => closeModal()}
            openModal={() => openModal()}
          />
          <Features/>
          <Launching
            isOpen={isOpen} 
            closeModal={() => closeModal()}
            openModal={() => openModal()}
          />
          <Contact/>

          <Waitlist
            isOpen={isOpen} 
            closeModal={() => closeModal()}
            openModal={() => openModal()}
          />
    </div>
  )
}
