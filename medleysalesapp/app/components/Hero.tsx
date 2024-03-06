import Image from "next/image"

export default function Hero(props: any) {

    function MainContent() {
        return(
            <div className="flex flex-col font-poppins max-w-[1120px] mx-auto ">
                
                <div className="inline-flex flex-col items-center gap-12 px-2">
                    <p className="text-center font-poppins-m text-4xl tablet:text-5xl tablet:mx-8 desktop:text-6xl">Modern Booking Software made <a className="relative text-accent">
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
                    <h4 className="text-center font-poppins text-2xl tablet:mx-8 desktop:text-3xl">Appointment scheduling software within form based screening, bulk data entry, and more.</h4>
                    <button onClick={props.openModal} className="text-center bg-accent py-4 px-8 rounded text-offblack font-poppins-m text-base">Join Waitlist</button>
                </div>

                <div className="relative flex flex-col items-center my-24 tablet:mx-8">

                    {/* Mobile views */}

                    <div className="relative mb-6 tablet:collapse">
                        <Image
                            src='/Desktop Preview Half.svg'
                            width={5000}
                            height={5000}
                            alt="Picture of the author"
                            className="z-0 tablet:hidden"
                        />

                        <Image
                            src='/Client Mobile Preview.svg'
                            width={222}
                            height={418}
                            alt="Picture of the author"
                            className="absolute z-5 -bottom-4 tablet:hidden"
                         />
                    </div>

                    <div className="relative tablet:collapse">
                        <Image
                            src='/Desktop Preview Half 2.svg'
                            width={5000}
                            height={5000}
                            alt="Picture of the author"
                            className="z-0 tablet:hidden"
                        />

                        <Image
                            src='/Mobile Preview.svg'
                            width={222}
                            height={418}
                            alt="Picture of the author"
                            className="absolute z-5 -bottom-4 right-0 tablet:hidden"
                        />
                    
                    </div>

                    {/* Desktop views */}

                    <Image
                        src='/Desktop Preview.svg'
                        width={5000}
                        height={5000}
                        alt="Picture of the author"
                        className="hidden mx-16 tablet:flex"
                    />
                    
                    <Image
                        src='/Client Mobile Preview.svg'
                        width={222}
                        height={418}
                        alt="Picture of the author"
                        className="absolute hidden -left-8 -bottom-16 tablet:flex"
                    />
                    
                    <Image
                        src='/Mobile Preview.svg'
                        width={222}
                        height={418}
                        alt="Picture of the author"
                        className="absolute hidden -right-8 -bottom-8 tablet:flex"
                    />
                </div>

            </div>
        )
    }


    return(
        <div className="bg-gradient-to-b from-primary to-offwhite relative">

            <div className="bg-blobs bg-center bg-no-repeat bg-cover pt-28">
                <MainContent/>
            </div>

        </div>
    )
}