import Image from 'next/image'


export default function Navbar() {

    return(
            <div className='sticky top-0 bg-primary z-50'>
                <div className='py-6 px-2.5'>
                    <div className='flex max-w-1120px justify-between mx-auto'>
                        <div className='flex flex-row items-center space-x-4'>
                            <Image
                                src='/logo.svg'
                                width={48}
                                height={48}
                                alt="Picture of the author"
                            />
                            <p className="font-logo">Medley</p>
                        </div>
                        <div className="flex flex-row items-center space-x-8">
                            <p className="">Home</p>
                            <p className="">FAQs</p>
                            <a href="" className="">Get Started</a>
                        </div>
                    </div>
                </div>
                <hr className='max-w-[1200px] mx-auto border-offwhite'/>
            </div>
    )
}