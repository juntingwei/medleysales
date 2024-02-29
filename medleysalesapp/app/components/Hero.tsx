import Image from "next/image"

export default function Hero(props: any) {

    function MainContent() {
        return(
            <div className="flex flex-col font-poppins max-w-1120px mx-auto text-4xl">
                
                <div className="inline-flex flex-col items-center gap-12 px-2">
                    <p className="text-center font-poppins-m">Modern Booking Software made <a className="relative text-accent">
                            for&nbsp;Pharmacy
                            <Image
                                src='/underline.svg'
                                width={463}
                                height={100}
                                alt=""
                                className="absolute right-0 m-0"
                            />
                        </a>
                    </p>
                    <h4 className="text-center font-poppins text-2xl">Appointment scheduling software within form based screening, bulk data entry, and more.</h4>
                    <button onClick={props.openModal} className="text-center bg-accent py-4 px-8 rounded text-offblack font-poppins-m text-base">Join Waitlist</button>
                </div>

                <div className="relative h-706px flex flex-col items-center my-24">

                    {/* Desktop preview for tablet sizes screen and above */}

                    <Image
                        src='/Desktop Preview.svg'
                        width={5000}
                        height={5000}
                        alt="Picture of the author"
                        className="absolute hidden"
                    />

                    {/* Desktop preview for mobile size screen */}
                    
                    <Image
                        src='/Desktop Preview Half.svg'
                        width={5000}
                        height={5000}
                        alt="Picture of the author"
                        className="absolute"
                    />

                    {/*  */}
                    
                    <Image
                        src='/Client Mobile Preview.svg'
                        width={222}
                        height={418}
                        alt="Picture of the author"
                        className="absolute -left-2 bottom-1/4"
                    />
                    
                    <Image
                        src='/Mobile Preview.svg'
                        width={222}
                        height={418}
                        alt="Picture of the author"
                        className="absolute desktop:-right-2 desktop:bottom-0"
                    />
                </div>

            </div>
        )
    }


    return(
        <div className="bg-gradient-to-b from-primary to-offwhite pt-24 relative">

            <div className="bg-blobs bg-center bg-no-repeat bg-cover">
                <MainContent/>
            </div>

        </div>
    )
}