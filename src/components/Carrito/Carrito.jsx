import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import {Link} from "react-router-dom"
import styles from "./Carrito.module.css"

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    const handleVaciar = () => {
        vaciarCarrito()
    }
  return (
    <div>
        <h1 className={styles.carrito1}> Carrito</h1>
        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <h2   className={styles.carrito1}> {prod.name} </h2>
                    <h4  className={styles.carrito1}> Cantidad: {prod.cantidad} </h4>
                    <h4  className={styles.carrito1}>Precio unitario: ${prod.price} </h4>
                    <h4 className={styles.carrito1} >Precio total: ${prod.price * prod.cantidad} </h4>
                   
                </div>
            ))
        }

        {
            carrito.length > 0 ?
                <div>
|                    <h3 className={styles.carrito1} > Precio total: ${precioTotal()} </h3>
                    <div className={styles.carrito3}>
                        <button onClick={handleVaciar} className={styles.carrito2}> Eliminar </button> 
                        <Link to= "/checkout" className={styles.carrito4} > Finalizar Compra</Link>
                    </div> 
                </div>   
                : 
                <h4 className={styles.carrito5}> El carrito esta vacío</h4>
        }
       


    </div>
  )
}

export default Carrito