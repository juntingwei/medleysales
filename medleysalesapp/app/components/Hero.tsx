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

                <div className="relative flex flex-col items-center my-24">

                    {/* Mobile views */}

                    <div className="relative mb-6 tablet:collapse">
                        <Image
                            src='/Desktop Preview Half.svg'
                            width={5000}
                            height={5000}
                            alt="Picture of the author"
                            className="z-0"
                        />

                        <Image
                            src='/Client Mobile Preview.svg'
                            width={222}
                            height={418}
                            alt="Picture of the author"
                            className="absolute z-5 -bottom-4"
                         />
                    </div>

                    <div className="relative tablet:collapse">
                        <Image
                            src='/Desktop Preview Half 2.svg'
                            width={5000}
                            height={5000}
                            alt="Picture of the author"
                            className="z-0"
                        />

                        <Image
                            src='/Mobile Preview.svg'
                            width={222}
                            height={418}
                            alt="Picture of the author"
                            className="absolute z-5 -bottom-4 right-0"
                        />
                    
                    </div>

                    {/* Desktop views */}

                    <Image
                        src='/Desktop Preview.svg'
                        width={5000}
                        height={5000}
                        alt="Picture of the author"
                        className="absolute collapse tablet:visible"
                    />
                    
                    <Image
                        src='/Client Mobile Preview.svg'
                        width={222}
                        height={418}
                        alt="Picture of the author"
                        className="absolute collapse tablet:visible"
                    />
                    
                    <Image
                        src='/Mobile Preview.svg'
                        width={222}
                        height={418}
                        alt="Picture of the author"
                        className="absolute collapse tablet:visible"
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