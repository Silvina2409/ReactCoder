import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    const handleVaciar = () => {
        vaciarCarrito()
    }
  return (
    <div>
        <h1> Carrito</h1>
        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <h2> {prod.name} </h2>
                    <h4> Cantidad: {prod.cantidad} </h4>
                    <h4>Precio unitario: ${prod.price} </h4>
                    <h4>Precio total: ${prod.price * prod.cantidad} </h4>
                   
                </div>
            ))
        }

        {
            carrito.length > 0 ?
                <div>
|                    <h3> Precio total: ${precioTotal()} </h3>
                     <button onClick={handleVaciar}> Eliminar </button>
                </div>   
                : 
                <h4> El carrito esta vacío</h4>
        }
       


    </div>
  )
}

export default Carrito