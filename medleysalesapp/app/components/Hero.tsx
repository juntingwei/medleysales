import Navbar from "./Navbar"
import Image from "next/image"

export default function Hero() {


    function MainContent() {
        return(
            <div>
                
                <h1>Modern Booking Software made <a>for Pharmacy</a></h1>
                <h4>Appointment scheduling software within form based screening, bulk data entry, and more.</h4>
                <a>Joint the Waitlist</a>

                <Image
                    src='/Client Mobile Preview.svg'
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />

                <Image
                    src='/Desktop Preview.svg'
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />

                <Image
                    src='/Mobile Preview.svg'
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />

            </div>
        )
    }


    return(
        <div>

            <Navbar/>

            <MainContent/>

        </div>
    )
}