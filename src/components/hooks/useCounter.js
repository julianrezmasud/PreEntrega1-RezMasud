import { useState } from "react"

export const useCounter = (min, max) => {
    const [counter, setCounter] = useState(min)

    const handleAdd = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    }
    const handleSubtract = () => {
        if (counter > min) {
            setCounter(counter - 1)

        }
    }
    return { counter, handleSubtract, handleAdd }
}