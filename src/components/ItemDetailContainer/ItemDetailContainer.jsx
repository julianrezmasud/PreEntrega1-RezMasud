import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../../components/helpers/mFetch"
import { ItemDetail } from "./ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})
    const { pid } = useParams()

    useEffect(() => {
        mFetch(pid)
            .then(res => setproduct(res))
            .catch(err => console.log('Error: ', err))
    }, [])


    return (
        <ItemDetail {...product} />
    )
}