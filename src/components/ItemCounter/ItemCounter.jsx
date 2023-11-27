import { useCounter } from "../hooks/useCounter"


export const ItemCounter = ({ inital = 1, stock = 5, onAdd }) => {
    const { counter, handleRestar, handleSumar } = useCounter(inital, stock)

    const handleOnAdd = () => {
        onAdd(counter)
    }

    return (
        <div className="w-25">
            <label>{counter}</label>
            <button onClick={handleSumar}> + </button>
            <button onClick={handleRestar}> - </button>
            <button onClick={handleOnAdd}> Add to Cart </button>
        </div>
    )
}