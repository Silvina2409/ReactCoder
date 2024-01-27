import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Item.module.css'


const Item = ({producto}) => {
    
  return (
    <div>
      <div className={styles.item}>
           <h3 className={styles.nombre}> {producto.name }</h3>
            <img className={styles.img} src= {producto.image} />
           <p className={styles.precio}> Precio: ${producto.price} </p>
           
            <Link className={styles.ver}  to = {`/item/${producto.id}`}> Ver más</Link>

        </div>

    </div>
    
  )
}

export default Item





