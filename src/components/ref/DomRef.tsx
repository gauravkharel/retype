import {useRef, useEffect} from 'react'

export const DomRef = () => {
    // for dom ref set the html dom type
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type='text' ref={inputRef}   />
        </div>
    )
}