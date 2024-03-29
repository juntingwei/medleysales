'use client'

import Image from 'next/image'
import MyDropdown from './MyDropdown'


export default function Navbar(props: any) {

    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return(
            <div className='sticky top-0 bg-primary z-50 text font-poppins'>
                <div className='py-6 px-2.5'>
                    <div className='flex max-w-1120px justify-between mx-auto px-4'>
                        <div className='flex flex-row items-center space-x-[21px]'>
                            <Image
                                src='/logo.svg'
                                width={48}
                                height={48}
                                alt="Picture of the author"
                            />
                            <p className="font-mukta text-[24pt] tablet:text-[36pt] text-accent">Medley</p>
                        </div>

                        {/* Mobile menu */}

                        <MyDropdown openModal={props.openModal}/>

                        
                        {/* Tablet and above only menu */}

                        <div className="flex-row items-center space-x-8 hidden tablet:flex">
                            <p className="cursor-pointer" onClick={scrollToTop}>Home</p>
                            <button onClick={props.openModal} className="text-center bg-accent py-4 px-8 rounded text-offblack font-poppins-m text-base">Join Waitlist</button>
                        </div>
                    </div>
                </div>
                <hr className={`max-w-[1200px] mx-auto border-offwhite transition ease-in-out delay-15 ${(props.scrollPosition === 0) && 'border-0'}`}/>
            </div>
    )
}