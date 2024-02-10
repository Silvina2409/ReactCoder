import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nosotros from './components/Nosotros/Nosotros'
import Contact from './components/Contact/Contact'
import { CartProvider } from './Context/CartContext'

import Carrito from './components/Carrito/Carrito'

function App() {
  
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path= "/" element = {<ItemListContainer/>} />
          <Route path = "/item/:id" element = {<ItemDetailContainer/>} />
          <Route path= "/productos" element = {<ItemListContainer/>} />
          <Route path= "/productos/:category" element = {<ItemListContainer/>} />
          <Route path = "/nosotros" element = {<Nosotros/>} />
          <Route path = "/contacto" element = {<Contact/>} />
          <Route path = "/carrito" element = {<Carrito/>} />
        </Routes>
       
      
      </BrowserRouter>
    
      </CartProvider>
    </div>
  )
}

export default App
