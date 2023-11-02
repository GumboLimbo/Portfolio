import { useState, useEffect } from "react";

export default function FadingDiv({ delay = "", duration = "duration-1000", children }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => {
            setIsVisible(false)
        }
    }, []);

    return (
        <div className={`transition-opacity ${delay} ${duration} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {children}
        </div>
    )
}
