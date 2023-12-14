import { useCartContext } from "../contexts/CartContext"

export const CartWidget = () => {
    const { totalAmount } = useCartContext()

    return (
        <div>

            {totalAmount() != 0 && totalAmount()}  🛒
        </div>
    )
}




