import React from 'react'
import { useState } from 'react'
import styles from "./ItemCount.module.css"

const ItemCount = ({stock,initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)
    const increment = () =>{
        if (quantity < stock) {
            setQuantity (quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1){
            setQuantity (quantity -1)
        }
    }
  return (
    <div >
        <div className={styles.ItemCount} > 
            <button className={styles.menos}  onClick={ decrement} > - </button>
            <h4 className={styles.numero}>{quantity} </h4>
            <button className={styles.menos} onClick={increment}> + </button>
        </div>
        <div>
            <button className={styles.botonAgregar} onClick = {() => onAdd (quantity)} disabled ={!stock}>
                Agregar al Carrito
            </button>
        </div>
    </div>
  )
}

export default ItemCount
