import Image from "next/image"

export default function Features() {
    return(
        <div className="font-poppins">

            <div className="max-w-[1120px] m-auto pb-20">

                <h2 className="text-offblack text-center font-poppins-m py-32 text-3xl px-4 tablet:text-4xl tablet:px-8 desktop:text-5xl">Features every pharmacy needs to <a className="text-accent">elevate their services</a></h2>
            
            </div>


            <div className="py-40 bg-blob bg-center bg-no-repeat bg-cover">
                <div className="">
                
                    <div className="">

                        {/*Appointment Feature*/}
                        <div className='flex flex-col items-center align-middle text-center desktop:flex-row desktop:max-w-[1120px] desktop:mx-auto desktop:mb-16'>

                            <Image
                                src='/scheduling illustration.svg'
                                height={300}
                                width={400}
                                alt="Appointment Scheduling Illustration"
                                className=""
                            />
                
                            <div className="px-4 pt-12 pb-24">
                                <p className="font-poppins-m text-3xl pb-4 tablet:text-4xl">Appointment Scheduling</p>
                                <p className="font-poppins text-2xl">Stay organized with a simple appointment scheduling tool to keep track of upcoming and past appointments.</p>
                            </div>

                        </div>

                        {/* Forms Feature */}
                        <div className='flex flex-col items-center align-middle text-center desktop:flex-row desktop:max-w-[1120px] desktop:mx-auto desktop:mb-16'>

                            <Image
                                src='/form illustration.svg'
                                height={300}
                                width={400}
                                alt="Appointment Scheduling Illustration"
                                className="desktop:order-2"
                            />

                            <div className='px-4 pt-12 pb-24'>
                                <p className="font-poppins-m text-3xl pb-4 tablet:text-4xl">Dedicated forms for bookings</p>
                                <p className="font-poppins text-2xl">Save time with service specific forms that are sent to the client prior to appointments to assist with booking.</p>
                            </div>
                            
                        </div>

                        {/* Screening Feature */}
                        <div className='flex flex-col items-center align-middle text-center desktop:flex-row desktop:max-w-[1120px] desktop:mx-auto desktop:mb-16'>
                            <Image
                                src='/screening illustration.svg'
                                height={300}
                                width={400}
                                alt="Appointment Scheduling Illustration"
                                className=""
                            />
                
                            <div className='px-4 pt-12 pb-24'>
                                <p className="font-poppins-m text-3xl pb-4 tablet:text-4xl">Automated screening for requests</p>
                                <p className="font-poppins text-2xl">Medly can screen for service eligibility based on patient details and form responses to give faster response to clients and staff.</p>
                            </div>
                        </div>

                        {/* Communication Feature */}
                        <div className='flex flex-col items-center align-middle text-center desktop:flex-row desktop:max-w-[1120px] desktop:mx-auto desktop:mb-16'>

                            <Image
                                src='/comm illustration.svg'
                                height={300}
                                width={400}
                                alt="Appointment Scheduling Illustration"
                                className="desktop:order-2"
                            />
                
                            <div className='px-4 pt-12 pb-24'>
                                <p className="font-poppins-m text-3xl pb-4 tablet:text-4xl">Post appointment communication</p>
                                <p className="font-poppins text-2xl">Elevate your service by providing custom and preset post-appointment communication such as blood post vaccination counseling, lifestyle advice, and more.</p>
                            </div>
                            
                        </div>
                    </div>
                
                </div>
            </div>

        </div>
    )
}