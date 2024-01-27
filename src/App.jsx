import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nosotros from './components/Nosotros/Nosotros'

function App() {


  return (
    <div>
      
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path= "/" element = {<ItemListContainer/>} />
          <Route path = "/item/:id" element = {<ItemDetailContainer/>} />
          <Route path= "/productos" element = {<ItemListContainer/>} />
          <Route path= "/productos/:category" element = {<ItemListContainer/>} />
          <Route path = "/nosotros" element = {<Nosotros/>} />
        </Routes>
       
      
      </BrowserRouter>
     
      
    </div>
  )
}

export default App
