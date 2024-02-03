import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nosotros from './components/Nosotros/Nosotros'
import Contact from './components/Contact/Contact'
import { CartContext } from './Context/CartContext'
import { useState } from 'react'

function App() {
  const [carrito, setCarrito] = useState ([])
  
  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad}
    const nuevoCarrito = [...carrito]

    const estaCarrito = nuevoCarrito.find ((producto) => producto.id === itemAgregado.id)
    if (estaCarrito) {
        estaCarrito.cantidad +=  cantidad
        setCarrito(nuevoCarrito)
    }else{
        nuevoCarrito.push(itemAgregado)
        setCarrito (nuevoCarrito)
    }
    
}
  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0 ) 
  } 

  return (
    <div>
      <CartContext.Provider value= { {carrito, agregarAlCarrito, cantidadEnCarrito}}>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path= "/" element = {<ItemListContainer/>} />
          <Route path = "/item/:id" element = {<ItemDetailContainer/>} />
          <Route path= "/productos" element = {<ItemListContainer/>} />
          <Route path= "/productos/:category" element = {<ItemListContainer/>} />
          <Route path = "/nosotros" element = {<Nosotros/>} />
          <Route path = "/contacto" element = {<Contact/>} />
        </Routes>
       
      
      </BrowserRouter>
      </CartContext.Provider>
      
    </div>
  )
}

export default App
