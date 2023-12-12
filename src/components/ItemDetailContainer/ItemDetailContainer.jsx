import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { Loading } from "../Loading/Loading"



export const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { pid } = useParams()

    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'products', pid)

        getDoc(queryDoc)
            .then(resultado => setproduct({ id: resultado.id, ...resultado.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])



    return (
        loading ?
            <Loading />
            :
            <ItemDetail product={product} />
    )
}