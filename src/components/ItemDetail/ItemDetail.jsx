
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ItemDetail.module.css'
import { CartContext } from '../../Context/CartContext'




const ItemDetail = ({item}) => {
   
    const {carrito, agregarAlCarrito} = useContext(CartContext)
    console.log(carrito)

    const [cantidad, setCantidad] = useState(1)
    const handleRestar= () =>{
        cantidad > 1 && setCantidad (cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < item.stock  && setCantidad (cantidad +1 )
    }


  return (
    <div>
        <div>
        <h3 className={styles.nombre}> {item.name} </h3>    
        <img className={styles.img}  src= {item.image} alt={item.name} />
        </div>
        <div>
            <p className= {styles.descripcion} >  {item.description} </p>
            <p className= {styles.precio}> Precio: ${item.price} </p>
            <p className= {styles.stock} > Stock: {item.stock } </p>
        </div>
        <div>
            <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={() => {agregarAlCarrito (item, cantidad)}} />
        </div>
       
    </div>
  )
}

export default ItemDetail














