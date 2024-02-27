import { Link } from 'react-router-dom'
import cart from './assets/cart.png'
import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


const CartWidget = () => {
  const {cantidadEnCarrito} = useContext(CartContext) 
  return (
    <div>
        
        <Link  to =  "/carrito" > 
        <img src= {cart} alt="imagen carrito de compras" />
        <span> {cantidadEnCarrito()} </span>
         </Link>

    </div>
  )
}

export default CartWidget

