import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,imagen, precio,stock}) => {
  return (
    <div>
        <header>
            <h2> 
                {nombre}
            </h2>
        </header>    
        <div>
            <img src= {imagen} alt={nombre} />
        </div>

        <section>
            <p>
               Precio: $ {precio}
            </p>
            <p>
                Stock disponible: {stock}
            </p>
        </section>

        <footer>
            <Link to= {`/item/${id}`} > Ver detalle </Link>
                        
        </footer>    
       
    </div>
  )
}

export default Item