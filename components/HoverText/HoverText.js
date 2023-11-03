export default function HoverText({ title, innerText }) {
    let duration = "duration-[1000ms]";
    return (
        <div className="grid grid-cols-1 grid-rows-1 group overflow-hidden">
            <div className={`animate-pulse col-start-1 row-start-1 transition-all ${duration} group-hover:translate-x-[-100%] md:text-4xl`}>{title}</div>
            <div className={`col-start-1 row-start-1 transition-all ${duration} group-hover:translate-x-0 translate-x-[100%]`}>
                {innerText}
            </div>
        </div>
    )
}