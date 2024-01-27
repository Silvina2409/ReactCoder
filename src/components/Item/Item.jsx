import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
    
  return (
    <div>
         <h3> {producto.name }</h3>
        <img src= {producto.image} />
        <div>
           
            <p> Precio: ${producto.price} </p>
            <p> Categoria: {producto.category} </p>
            <Link to = {`/item/${producto.id}`}> Ver más</Link>

        </div>

    </div>
  )
}

export default Item





