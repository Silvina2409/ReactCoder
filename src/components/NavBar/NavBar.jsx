import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar (){
    return (
        <nav >
            
           
            <Link to= "/"> <h2 className={styles.titulo}> Furniture Tienda de Muebles </h2> </Link>

            <div className= {styles.lista}>
                <Link className={styles.menulink} to= "/nosotros"> Nosotros</Link>
                <Link className={styles.menulink} to =  "/productos" > Productos </Link>
                <Link  className={styles.menulink} to = "/productos/mesa" > Mesas </Link>
                <Link className={styles.menulink} to= "/productos/silla" > Sillas</Link>
                <Link className={styles.menulink}  to= "/productos/sillon" > Sillones </Link>
                <CartWidget />
            </div>            
            
           
            

        </nav>
       
    )
}
export default NavBar