import React, { useState } from 'react'
import { useEffect } from 'react'
import { pedirItemPorId } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {doc, getDoc} from "firebase/firestore"
import {db} from "../../firebase/config"

const ItemDetailContainer = ({itemId}) => {
    const [item,setItem] = useState (null)
    const id = useParams().id
    

    useEffect (() => {
      const docRef = doc( db, "productos", id)
      getDoc (docRef)
      .then ((resp) =>{
        setItem (
          {...resp.data(), id: resp.id}
        )
      })
    }, [id])



  return (
    <div>
      {item && <ItemDetail item= {item} /> }
    </div>
  )
}

export default ItemDetailContainer






