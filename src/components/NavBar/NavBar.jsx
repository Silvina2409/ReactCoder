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
                <Link  className={styles.menulink} to = "/productos/mesa" > Mesas </Link>
                <Link className={styles.menulink} to= "/productos/silla" > Sillas</Link>
                <Link className={styles.menulink}  to= "/productos/sillon" > Sillones </Link>
                <CartWidget />
            </div>            
            
           
            

        </nav>
       
    )
}
export default NavBar