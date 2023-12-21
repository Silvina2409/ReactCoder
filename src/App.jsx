import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {


  return (
    <>
    
      <NavBar></NavBar>
      <ItemListContainer greating = {'Bienvenidos!'} /> 
    </>
  )
}

export default App
