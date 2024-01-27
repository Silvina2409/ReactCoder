import { useEffect } from "react"
import { useState } from "react"
import { pedirDatos} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


function ItemListContainer (){
    const [productos, setProductos] = useState ([])
    const category= useParams().category
    const [titulo, setTitulo] = useState ("Productos")
    
    useEffect (()=>{
        pedirDatos()
            .then ((res) =>{
                if (category) {
                    setProductos(res.filter((prod)=> prod.category === category))  
                    setTitulo(category)  
                }else{
                    setProductos(res)
                    setTitulo("Productos")
                }
            

            })
    }, [category])

    return (
        <div> 
            <ItemList productos = {productos} titulo = {titulo} />
        </div>
)
}
export default ItemListContainer

