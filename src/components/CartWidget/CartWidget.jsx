import { Link } from 'react-router-dom'
import cart from './assets/cart.png'
import React from 'react'


const CartWidget = () => {
  return (
    <div>
        
        <Link  to =  "/carrito" > 
        carrito
        <span> 0 </span>
         </Link>

    </div>
  )
}

export default CartWidget

/*function CartWidget () {
    return (
        <div>
            <img src= {cart} alt="imagen carrito de compras" />
            0

            <Link className={styles.menulink} to =  "/carrito" > Carrito </Link>
        </div>
    )
}
export default CartWidget*/