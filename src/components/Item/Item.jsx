import React from 'react'

const Item = ({nombre,precio,stock}) => {
  return (
    <div>
        <header>
            <h2> 
                {nombre}
            </h2>
        </header>    
      

        <section>
            <p>
               Precio: $ {precio}
            </p>
            <p>
                Stock disponible: {stock}
            </p>
        </section>

        <footer>
            <button> Ver detalle </button>
        </footer>    
       
    </div>
  )
}

export default Item