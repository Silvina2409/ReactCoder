import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ItemDetail.module.css'



const ItemDetail = ({item}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const handleOnAdd = (quantity) =>{
        setQuantityAdded (quantity)
    }
  return (
    <div>
        <div>
        <h3 className={styles.nombre}> {item.name} </h3>    
        <img className={styles.img}  src= {item.image} alt={item.name} />
        </div>
        <div>
            <p className= {styles.descripcion} >  {item.description} </p>
            <p className= {styles.precio}> Precio: ${item.price} </p>
            <p className= {styles.stock} >Stock: {item.stock } </p>
        </div>
        <footer>
            {
            quantityAdded > 0 ? (
                <Link to = '/' > Terminar Compra </Link>) : (<ItemCount initial = {1} stock = {item.stock} onAdd = {handleOnAdd } />) 
            }
        </footer>
    </div>
  )
}

export default ItemDetail
















/*
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