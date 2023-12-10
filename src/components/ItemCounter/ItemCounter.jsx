import { useCounter } from "../hooks/useCounter"


export const ItemCounter = ({ inital = 1, stock = 5, onAdd }) => {
    const { counter, handleRestar, handleSumar } = useCounter(inital, stock)

    const handleOnAdd = () => {
        onAdd(counter)
    }

    return (
        <div className="w-25">
            <button className='btn btn-outline-dark' onClick={handleSumar}> + </button>
            <label>{counter}</label>
            <button className='btn btn-outline-dark' onClick={handleRestar}> - </button>
            <button className='btn btn-outline-dark' onClick={handleOnAdd}> Add to Cart </button>
        </div>
    )
}