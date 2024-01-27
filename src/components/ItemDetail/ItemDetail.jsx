import React from 'react'


const ItemDetail = ({item}) => {
  return (
    <div>
        <div>
        <h3> {item.name} </h3>    
        <img src= {item.image} alt={item.name} />
        </div>
        <div>
            <p> Descripción: {item.description} </p>
            <p> Precio: ${item.price} </p>
            <p> Categoría: {item.categoria} </p>
            <p>Stock: {item.stock } </p>
        </div>
    </div>
  )
}

export default ItemDetail
















/*import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ name, image, category, price, description, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const handleOnAdd = (quantity) =>{
        setQuantityAdded (quantity)
    }
  return (
    <div>
        <header> 
            <h2> {name}  </h2>
        </header>
        <picture>
            < img src= {image} alt = {name} />
        </picture>
        <section>
            <p> Categoria: {category} </p>
            <p> Descripción: {description} </p>
            <p> Precio: ${price} </p>
        </section>
        <footer>
            {
            quantityAdded > 0 ? (
                <Link to = '/cart' > Terminar Compra </Link>) : (<ItemCount initial = {1} stock = {stock} onAdd = {handleOnAdd } />) 
            }
        </footer>
    </div>
  )
}

export default ItemDetail*/