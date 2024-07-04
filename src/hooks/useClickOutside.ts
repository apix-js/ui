import { MutableRefObject, useEffect, useRef } from "react";

const useClickOutside = <T>(cb: (event: Event) => void) => {

    const ref: MutableRefObject<T | null> = useRef(null)

    useEffect(() => {

        const listener = (event: MouseEvent) => {
            if (!ref?.current || (ref.current as unknown as Element).contains(event?.target as Node)) {
                console.log("return");
                
                return;
            }

            console.log("event");
            
            cb(event);
        }

        document.addEventListener("mousedown", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
        }
    }, [ref, cb]);

    return ref;
}

export default useClickOutside