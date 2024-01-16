import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {


  return (
    <>
    
      <NavBar></NavBar>
      <ItemListContainer greating = {'Bienvenidos!'} /> 
      <ItemCount initial = {1} stock = {10} onAdd = {(quantity) => console.log("cantidad agregada:", quantity)} />
    </>
  )
}

export default App
