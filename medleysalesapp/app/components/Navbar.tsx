import Image from 'next/image'


export default function Navbar() {

    return(

        <div className='flex w-1120 p-24 px-10 justify-between items-center'>
            
            <div className='flex justify-center'>
                <Image
                    src='/logo.svg'
                    width={48}
                    height={48}
                    alt="Picture of the author"
                />
                <h1 className="">Medley</h1>
            </div>

            <div className="flex justify-center">
                <p className="">Home</p>
                <p className="">FAQs</p>
                <a href="" className="">Get Started</a>
            </div>

        </div>
    )
}