import Image from "next/image"

export default function Features() {
    return(
        <div>
            
            <h2>Features every pharmacy needs to <a>elevate their services</a></h2>

            <div>

                {/*Feature Card Component*/}
                <div className='flex flex-row'>
                    <Image
                        src='/scheduling illustration.svg'
                        height={100}
                        width={100}
                        alt="Appointment Scheduling Illustration"
                    />
                    
                    <div>
                        <h3>Appointment Scheduling</h3>
                        <h5>Stay organized with a simple appointment scheduling tool to keep track of upcoming and past appointments.</h5>
                    </div>
                </div>

                <div className='flex flex-row'>
                    <Image
                        src='/form illustration.svg'
                        height={100}
                        width={100}
                        alt="Appointment Scheduling Illustration"
                    />
                    
                    <div>
                        <h3>Dedicated forms for bookings</h3>
                        <h5>Save time with service specific forms that are sent to the client prior to appointments to assist with booking.</h5>
                    </div>
                </div>

                <div className='flex flex-row'>
                    <Image
                        src='/screening illustration.svg'
                        height={100}
                        width={100}
                        alt="Appointment Scheduling Illustration"
                    />
                    
                    <div>
                        <h3>Automated screening for requests</h3>
                        <h5>Medly can screen for service eligibility based on patient details and form responses to give faster response to clients and staff.</h5>
                    </div>
                </div>

                <div className='flex flex-row'>
                    <Image
                        src='/comm illustration.svg'
                        height={100}
                        width={100}
                        alt="Appointment Scheduling Illustration"
                    />
                    
                    <div>
                        <h3>Post appointment communication</h3>
                        <h5>Elevate your service by providing custom and preset post-appointment communication such as blood post vaccination counseling, lifestyle advice, and more.</h5>
                    </div>
                </div>

                <Image
                    src='/big blob.svg'
                    height={100}
                    width={100}
                    alt=''
                />

            </div>

        </div>
    )
}