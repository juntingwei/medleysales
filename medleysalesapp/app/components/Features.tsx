import Image from "next/image"

export default function Features() {
    return(
        <div className="font-poppins">

            <div className="max-w-1120px m-auto py-20">

                <h2 className="text-offblack text-center font-poppins-m">Features every pharmacy needs to <a className="text-accent">elevate their services</a></h2>
            
            </div>


            <div className="py-40 bg-blob bg-center bg-no-repeat bg-cover">
                <div className="max-w-1120px m-auto">
                
                    <div className="relative">
                        {/*Feature Card Component*/}
                        <div className='flex mb-20 lg:flex-row space-x-10 md:flex-col items-center'>
                            <Image
                                src='/scheduling illustration.svg'
                                height={400}
                                width={400}
                                alt="Appointment Scheduling Illustration"
                                className="my-5"
                            />
                
                            <div className="text-center my-auto space-y-4 mx-4">
                                <h3>Appointment Scheduling</h3>
                                <h5>Stay organized with a simple appointment scheduling tool to keep track of upcoming and past appointments.</h5>
                            </div>
                        </div>
                        <div className='flex mb-20 lg:flex-row space-x-10 md:flex-col items-center'>
                
                            <div className='text-center my-auto space-y-4 mx-4 lg:order-1 md:order-2'>
                                <h3>Dedicated forms for bookings</h3>
                                <h5>Save time with service specific forms that are sent to the client prior to appointments to assist with booking.</h5>
                            </div>
                            <Image
                                src='/form illustration.svg'
                                height={400}
                                width={400}
                                alt="Appointment Scheduling Illustration"
                                className="my-5 lg:order-2 md:order-1"
                            />
                        </div>
                        <div className='flex mb-20 lg:flex-row space-x-10 md:flex-col items-center'>
                            <Image
                                src='/screening illustration.svg'
                                height={400}
                                width={400}
                                alt="Appointment Scheduling Illustration"
                                className="my-5"
                            />
                
                            <div className='text-center my-auto space-y-4 mx-4'>
                                <h3>Automated screening for requests</h3>
                                <h5>Medly can screen for service eligibility based on patient details and form responses to give faster response to clients and staff.</h5>
                            </div>
                        </div>
                        <div className='flex mb-20 lg:flex-row space-x-10 md:flex-col items-center'>
                
                            <div className='text-center my-auto space-y-4 mx-4 lg:order-1 md:order-2'>
                                <h3>Post appointment communication</h3>
                                <h5>Elevate your service by providing custom and preset post-appointment communication such as blood post vaccination counseling, lifestyle advice, and more.</h5>
                            </div>
                            <Image
                                src='/comm illustration.svg'
                                height={400}
                                width={400}
                                alt="Appointment Scheduling Illustration"
                                className="my-5 lg:order-2 md:order-1"
                            />
                
                        </div>
                    </div>
                
                </div>
            </div>

        </div>
    )
}