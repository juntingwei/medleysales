import Image from "next/image"

export default function Hero() {


    function MainContent() {
        return(
            <div className="flex flex-col max-w-1120px mx-auto">
                
                <div className="inline-flex flex-col items-center gap-12">
                    <h1 className="text-center">Modern Booking Software made <a className="relative text-accent">
                            for&nbsp;Pharmacy
                            <Image
                                src='/underline.svg'
                                width={463}
                                height={100}
                                alt=""
                                className="absolute right-0 m-0"
                            />
                        </a>
                    </h1>
                    <h4 className="text-center">Appointment scheduling software within form based screening, bulk data entry, and more.</h4>
                    <button className="text-center bg-accent py-4 px-8 rounded text-offblack">Joint the Waitlist</button>
                </div>

                <div className="relative h-706px flex flex-col items-center my-24">

                    <Image
                        src='/Desktop Preview.svg'
                        width={935}
                        height={608}
                        alt="Picture of the author"
                        className="absolute"
                    />
                    
                    <Image
                        src='/Client Mobile Preview.svg'
                        width={222}
                        height={418}
                        alt="Picture of the author"
                        className="absolute -left-2 bottom-0"
                    />
                    
                    <Image
                        src='/Mobile Preview.svg'
                        width={222}
                        height={418}
                        alt="Picture of the author"
                        className="absolute -right-2 bottom-0"
                    />
                </div>

            </div>
        )
    }


    return(
        <div className="bg-gradient-to-b from-primary to-offwhite pt-24 relative">

            <MainContent/>

            <Image
                src='/blobs.svg'
                width={1800}
                height={1600}
                alt=""
                className="absolute z-40 top-0 opacity-40"
            />
        </div>
    )
}