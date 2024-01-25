import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element = {<ItemListContainer  />  } />
          <Route path = '/category/:categoryId ' element = {<ItemListContainer />} />  
          <Route path = '/Item/:itemId' element = {<ItemDetailContainer/>} />
          <Route path = '*' element = { <h3> Error! </h3>} />
        </Routes>
      </BrowserRouter>
      

     
      
    </>
  )
}

export default App
