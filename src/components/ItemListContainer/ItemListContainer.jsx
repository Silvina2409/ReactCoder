import { useEffect } from "react"
import { useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

function ItemListContainer ({greating}){
    const [products, setProducts] = useState ([])
    useEffect(() =>{
        getProducts ()
        .then (response =>{
            setProducts (response)
        })
        .catch (error => {
            console.error (error)
        })
    }, [])
    return (
        <div>
            <h1> {greating} </h1>
            <ItemList products = {products} />
        </div>
    )

}
export default ItemListContainer