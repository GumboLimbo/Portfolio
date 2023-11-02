import { useState, useEffect } from "react";

export default function SlidingDiv({ delay = "", duration = "duration-1000", fromLeft = true, children }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => {
            setIsVisible(false)
        }
    }, []);

    return (
        <div className={`transition-transform ${delay} ${duration} ${isVisible ? 'translate-x-0' : (fromLeft ? '-translate-x-[200%]' : 'translate-x-[200%]')}`}>
            {children}
        </div>
    )
}
