'use client'

import { useState } from "react"

export default function MyDropdown(props: any) {

  const [active, setActive] = useState(true)

  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  function clickOutside() {
    setActive((prevState => !prevState
    ))
  }

  return (
    <div className="my-auto relative" onBlur={clickOutside}>

      {/* Dropdown Button */}

      <button onMouseUp={() => setActive(true)} className={`rounded ${active ? 'bg-grey/50' : ''}`}>
        <img src="navmenu.svg" className="" alt="More" />
      </button>

      {/* Dropdown Menu */}

      <div className={`absolute right-0 bg-white p-2 rounded space-y-2 ${(!active && 'hidden')}`}>
        <p className="cursor-pointer text-offblack font-poppins-m text-lg pl-2 py-2 active:bg-offwhite rounded" onClick={scrollToTop}>Back to top</p>
        <hr className="border-offwhite border-1" />
        <button onClick={props.openModal} className="text-center bg-accent py-4 px-8 rounded text-offblack font-poppins-m text-base min-w-[161.95px]">Join Waitlist</button>
      </div>

    </div>
  )
}