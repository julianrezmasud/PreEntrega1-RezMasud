import { Link } from "react-router-dom"


export const Item = ({ product }) => {
    return (
        <div className='card w-25'>
            <div className='card-body p-o text-center'>
                <img src={product.imageUrl} className='card-img-top w-100' alt='imagen' />
                <h6>{product.name}</h6>
                <p>Price: {product.price}</p>
                <p>Stock: {product.stock}</p>
            </div>
            <div className='card-footer'>
                <Link to={`/detail/${product.id}`} className='btn btn-outLine-dark w-100'>Detail</Link>
            </div>
        </div>
    )
}