import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

export default function HoverText({ title, innerText }) {
    const fullConfig = resolveConfig(tailwindConfig);
    const isMobile = useMediaQuery({ query: `(max-width: ${fullConfig.theme.screens.sm})` });

    let duration = "duration-[1000ms]";
    let [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(!open);
    }

    if (isMobile) {

        return (
            <div className="grid grid-cols-1 grid-rows-1 group overflow-hidden">
                <div onClick={handleClick} className={`animate-pulse col-start-1 row-start-1 transition-all ${duration} ${open ? 'translate-x-[-100%]' : ''} md:text-4xl`}>{title}</div>
                <div onClick={handleClick} className={`mx-[5%] col-start-1 row-start-1 transition-all ${duration} ${open ? 'translate-x-0' : 'translate-x-[200%]'}`}>
                    {innerText}
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 grid-rows-1 group overflow-hidden">
            <div onClick={handleClick} className={`animate-pulse col-start-1 row-start-1 transition-all ${duration} md:group-hover:translate-x-[-100%] md:text-4xl`}>{title}</div>
            <div onClick={handleClick} className={`mx-[5%] col-start-1 row-start-1 transition-all ${duration} md:group-hover:translate-x-0 translate-x-[200%]`}>
                {innerText}
            </div>
        </div>
    )
}