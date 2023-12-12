import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../contexts/Cartcontext"
import { useState } from "react"
import { Link } from "react-router-dom"


export const CartContainer = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        repeatEmail: ''
    })
    const [isId, setIsId] = useState('')
    const { cartList, vaciarCarrito, totalPrice, removeProduct } = useCartContext()

    const handleOrder = async (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = formData
        order.items = cartList.map(({ id, name, price }) => ({ id, name, price }))
        order.total = totalPrice()

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, order)
            .then(resp => setIsId(resp.id))
            .catch(err => console.log(err))
            .finally(() => {
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    repeatEmail: ''
                })

                vaciarCarrito()
                setTimeout(() => {
                    setIsId('')
                }, 8000)
            })
    }

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <div>
            {isId != '' && <label>order number: {isId}</label>}
            {cartList.map(product => <div Key={product.id}>
                <img calssName="w-25" src={product.imageUrl} />
                Quantity: {product.cantidad}- Price: {product.price} - subtotal: {product.cantidad * product.price}
                <button className="btn btn-danger" onClick={() => removeProduct(product.id)}> X </button>
            </div>
            )}

            {
                totalPrice() === 0 ?
                    <div>
                        <br />No Product<br />
                        <Link to={'/'}>Choose a product</Link>
                    </div>
                    :
                    <>
                        <br /><label>Total Price: {totalPrice()}</label><br />
                        <br /><button className="btn btn-danger" onClick={vaciarCarrito}>Empty Cart</button><br />
                        <form className="form-control p-5 m-5" onSubmit={handleOrder}>

                            <label>Enter Name</label><br />
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleOnChange}
                            />
                            <br /><label>Enter Phone Number</label><br />
                            <input
                                className="form-control"
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleOnChange}
                            />
                            <br /><label>Enter email</label><br />
                            <input
                                className="form-control"
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleOnChange}
                            /><br />
                            <br /><label>Re-entered email</label><br />
                            <input
                                className="form-control"
                                type="text"
                                name="repeatEmail"
                                value={formData.repeatEmail}
                                onChange={handleOnChange}
                            /><br />
                            <button className="btn btn-danger">Finish Order</button>
                        </form>
                    </>
            }
        </div>
    )
}
