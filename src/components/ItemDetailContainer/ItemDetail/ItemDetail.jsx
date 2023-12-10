import { useState } from "react"
import { useCartContext } from "../../contexts/Cartcontext"
import { ItemCounter } from "../../ItemCounter/ItemCounter"
import { Link } from "react-router-dom"

export const ItemDetail = ({ product }) => {
    const [isCounter, setIsCounter] = useState(true)
    const { addProduct } = useCartContext()

    const onAdd = (cantidad) => {
        addProduct({ ...product, cantidad })
        setIsCounter(false)
    }


    return (
        <div className="row">
            <div className="col-12 text-center mt-5">
                <h1>Product Detail</h1>
            </div>
            <div className="col-6 text-center mt-5">
                <img src={product.imageUrl} alt={'image'} className="img-fluid" />
                <h2>{product.name}</h2>
            </div>


            <div className="col-6 mt-5">
                <h4>Description: {product.description}</h4>
                <h4>Price: {product.price}</h4>
                <h4>Stock: {product.stock}</h4>
                {
                    isCounter ?
                        <ItemCounter onAdd={onAdd} inital={1} stock={10} />
                        :
                        <>
                            < Link className="bt btn-outline-dark" to='/cart'>Finish Order</Link>
                            <Link className="btn btn-outline-dark" to='/'>Keep Buying</Link>
                        </>
                }
            </div>
        </div>
    )
}
