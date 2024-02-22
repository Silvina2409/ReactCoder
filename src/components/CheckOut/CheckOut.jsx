import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'

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
      return ( <div> 
        <h3> Muchas gracias por tu compra</h3>
        <h4> Tu número de pedido es: {pedidoId} </h4>
      </div>)
    }
  
    return (
   
    <div>
    <h3> Finalizar Compra</h3>
    <form onSubmit={handleSubmit(comprar)} >
      <input type='text' placeholder='Ingrese su nombre' {...register ("nombre")} /> 
      <input type="email" placeholder='Ingrese su E-Mail'{...register ("email")} />
      <button type='submit'> COMPRAR </button>
        </form>
    </div>
  )
}

export default CheckOut