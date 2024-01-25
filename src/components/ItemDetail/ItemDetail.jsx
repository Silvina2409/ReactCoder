import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ nombre, imagen, categoria, precio, descripcion, stock}) => {
  return (
    <div>
        <header> 
            <h2> {nombre}  </h2>
        </header>
        <picture>
            < img src= {imagen} alt = {nombre} />
        </picture>
        <section>
            <p> Categoria: {categoria} </p>
            <p> {descripcion} </p>
            <p> {precio} </p>
        </section>
        <footer>
            <ItemCount initial = {1} stock = {stock} onAdd = {(quantity) => console.log("cantidad agregada:", quantity)} />
        </footer>
    </div>
  )
}

export default ItemDetail