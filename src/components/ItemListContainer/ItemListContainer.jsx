import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { mFetch } from "../../components/helpers/mFetch"
import { ItemList } from "./ItemList/ItemList"

export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        if (cid) {
            mFetch()
                .then(result => setProductos(result.filter(product => product.category === cid)))
                .catch(err => console.log(err))
        } else {
            mFetch()
                .then(result => setProductos(result))
                .catch(err => console.log(err))
        }
    }, [cid])


    return (
        <>
            <h2 className="text-center">{greeting}</h2>
            <ItemList productos={productos} />
        </>

    )
}
