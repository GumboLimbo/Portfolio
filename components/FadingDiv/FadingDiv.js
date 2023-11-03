import { useState, useEffect, useRef } from "react";
import { NavbarHeight } from "../navbar/navbar";

export default function FadingDiv({ delay = "delay-0", duration = "duration-1000", fadeOut = false, children }) {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  if (fadeOut) {
    return (
      <div ref={ref} className={`transition-opacity ${delay} ${duration} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className={`transition-opacity ${isVisible ? delay : 'delay-0'} ${isVisible ? duration : 'duration-0'} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  )
}

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    },
      {
        rootMargin: `-${NavbarHeight} 0px 0px 0px`
      }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
