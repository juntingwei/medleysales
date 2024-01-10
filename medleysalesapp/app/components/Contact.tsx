export default function Contact() {
    return(
        <div>
            <div>
                <h3>Contact Us</h3>
                <h5>Leave us a message and we will reply as soon as possible</h5>
            </div>
            <div>
                <form action="">
                    <label htmlFor="">
                        Full name
                        <input 
                            type="text" 
                            placeholder="Enter your full name"
                        />
                    </label>
                    <label htmlFor="">
                        Mobile Number
                        <input 
                            type="text" 
                            placeholder="Enter your mobile number"
                        />
                    </label>
                    <label htmlFor="">
                        Email
                        <input 
                            type="text" 
                            placeholder="Enter your email address"
                        />
                    </label>
                    <label htmlFor="">
                        Your message
                        <input 
                            type="text" 
                            placeholder="Please type your message here"
                        />
                    </label>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}