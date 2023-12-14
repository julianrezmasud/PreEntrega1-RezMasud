import { useEffect, useState } from "react"

export const Home = () => {
    const [count, setCount] = useState(0)
    const [like, setLike] = useState(false)

    useEffect(() => {
        return () => { }
    })

    const handleCount = () => {
        setCount(count + 1)
    }
    const handleLike = () => {
        setLike(!like)
    }

    return (
        <div style={{ border: '3px solid yellow' }}>

            <label>{count}</label>
            <button onClick={handleCount}>Sumar</button>
            <button onClick={handleLike}>Me gusta</button>
        </div>
    )
}


