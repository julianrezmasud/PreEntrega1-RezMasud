import { useCartContext } from "../contexts/CartContext"

export const CartWidget = () => {
    const { totalCantidad } = useCartContext()

    return (
        <div>

            {totalCantidad() != 0 && totalCantidad()}  🛒
        </div>
    )
}




