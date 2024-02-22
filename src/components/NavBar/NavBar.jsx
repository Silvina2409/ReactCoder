import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
import Logo from "../Logo/Logo"

function NavBar (){
    return (
        <nav >
            <div className={styles.alineacion}>
            <Logo/> 
            <Link to= "/"> <h2 className={styles.titulo}> Furniture Tienda de Muebles </h2> </Link>
            </div>
            <div className= {styles.lista}>
                <Link className={styles.menulink} to= "/nosotros"> Nosotros</Link>
                <Link className={styles.menulink} to =  "/productos" > Productos </Link>
               
                
                <Link className={styles.menulink} to= "/productos/Silla" > Sillas</Link>
                <Link className={styles.menulink}  to= "/productos/Sillon" > Sillones </Link>
                <Link  className={styles.menulink} to = "/productos/Mesa" > Mesas </Link>
                <Link className={styles.menulink} to =  "/contacto" > Contacto </Link>
                <CartWidget />
            </div>            
            
           
            

        </nav>
       
    )
}
export default NavBar