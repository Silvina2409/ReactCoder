import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import styles from "./CheckOut.module.css"

const CheckOut = () => {
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    
    const {register, handleSubmit} = useForm()
    const [pedidoId, setPedidoId] = useState ("")

    const comprar = (data) => {
     const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal()
     }
     console.log (pedido)
     const pedidosRef = collection (db, "pedidos");
     addDoc (pedidosRef, pedido)
      .then ((doc) => {
        setPedidoId(doc.id)
        vaciarCarrito()
      })
    }
    if (pedidoId) {
      return ( <div className= {styles.CheckOut5}> 
        <h3 className= {styles.CheckOut1}> Muchas gracias por su compra</h3>

        <h4 className= {styles.CheckOut1} > Su número de pedido es: {pedidoId} </h4>
      </div>)
    }
 
    return (
   
    <div className= {styles.CheckOut5}>
      <h3 className= {styles.CheckOut1}> Finalizar Compra</h3>
      <form onSubmit={handleSubmit(comprar)} className= {styles.CheckOut4} >
        <input className= {styles.CheckOut2}  type='text' placeholder='Ingrese su nombre' {...register ("nombre")} /> 
        <input className= {styles.CheckOut2} type="email" placeholder='Ingrese su E-Mail'{...register ("email")} />
        <button type='submit' className= {styles.CheckOut3}> COMPRAR </button>
      </form>
   </div>
  )
}

export default CheckOut