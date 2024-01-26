export default function Contact() {
    return(
        <div className="bg-gradient-to-b from-offwhite to-primary">

            <div className="max-w-1120px mx-auto flex items-center space-x-2 py-[98px]">
                <div className="text-offblack">
                    <h3>Contact Us</h3>
                    <h5>Leave us a message and we will reply as soon as possible</h5>
                </div>
                <div className="p-12 rounded-3xl bg-offwhite w-1/2 text-offblack space-y-4">
                    <h4 className="text-offblack">Please fill in your details</h4>
                    <form action="" className="">
                        <label htmlFor="" className="">
                            Full name
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="flex flex-col w-full h-4 p-6 self-stretch rounded mb-4"
                            />
                        </label>
                        <label htmlFor="">
                            Mobile Number
                            <input
                                type="text"
                                placeholder="Enter your mobile number"
                                className="flex flex-col w-full h-4 p-6 self-stretch rounded mb-4"
                            />
                        </label>
                        <label htmlFor="">
                            Email
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                className="flex flex-col w-full h-4 p-6 self-stretch rounded mb-4"
                            />
                        </label>
                        <label htmlFor="">
                            Your message
                            <textarea
                                placeholder="Please type your message here"
                                className="w-full h-20 p-6 self-stretch rounded text-left text start m-0"
                            />
                        </label>
                        <input type="submit" className="text-center bg-accent py-4 px-8 rounded text-offblack w-full mt-4"/>
                    </form>
                </div>
            </div>

        </div>
    )
}