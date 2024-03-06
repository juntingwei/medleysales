export default function Launching(props: any) {
    return(
        <div className="max-w-[1120px] m-auto text-center space-y-10 my-40 tablet:my-60 font-poppins-m">
            <p className="text-offblack text-3xl tablet:text-4xl desktop:text-5xl">Launching <a className="text-accent">Autumn 2024</a></p>
            <button onClick={props.openModal} className="text-center bg-accent py-4 px-8 rounded text-offblack font-poppins-m text-base">Join Waitlist</button>
        </div>
    )
}