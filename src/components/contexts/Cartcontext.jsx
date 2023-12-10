import { createContext, useContext, useState } from "react"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const isCart = (pid) => cartList.findIndex(product => product.id === pid)

    const addProduct = (product) => {

        const indexProduct = isCart(product.id)
        if (indexProduct != -1) {
            cartList[indexProduct].cantidad += product.cantidad
            return setCartList([...cartList])
        }
        setCartList([
            ...cartList,
            product
        ])
    }

    const vaciarCarrito = () => {
        setCartList([])

    }


    const totalPrice = () => cartList.reduce((totalPrecio, product) => totalPrecio += (product.price * product.cantidad), 0)
    const totalCantidad = () => cartList.reduce((totalProduct, product) => totalProduct += product.cantidad, 0)
    const removeProduct = (pid) => {
        setCartList(cartList.filter(product => product.id != pid))
    }


    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            vaciarCarrito,
            totalPrice,
            totalCantidad,
            removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}







