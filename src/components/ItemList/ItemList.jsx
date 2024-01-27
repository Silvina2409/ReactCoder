import React from 'react'
import Item from '../Item/Item'
import styles from "./ItemList.module.css"


const ItemList = ({productos, titulo}) => {

  return (
    <div >
      <h2> {titulo} </h2>
      <div className={styles.itemList} > 
        {productos.map ((prod) => <Item producto = {prod} key={prod.id} />)}
      </div>
    </div>
  )
}

export default ItemList





