export default function Launching(props: any) {
    return(
        <div className="max-w-1120px m-auto text-center space-y-10 my-40 font-custom">
            <h2 className="text-offblack">Launching <a className="text-accent">Autumn 2024</a></h2>
            <button onClick={props.openModal} className="text-center bg-accent py-4 px-8 rounded text-offblack">Joint Waitlist</button>
        </div>
    )
}