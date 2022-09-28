import { useEffect } from "react";
export function useObserver(callbackFunction, options, ref, characters) {
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);

        if(ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if(ref.current) {
                observer.unobserve(ref.current);
            }
        }        
    }, [characters])
}