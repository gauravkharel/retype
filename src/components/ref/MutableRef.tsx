import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    // for mutable ref set the relative type
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
       if(interValRef.current) window.clearInterval(interValRef.current)
    }
    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div>
            Hooktimer - {timer} - 
            <button onClick={() => stopTimer()}>Stop Timer</button>
        </div>
    )
}