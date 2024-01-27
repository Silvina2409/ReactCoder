import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
function NavBar (){
    return (
        <nav>
            
               
            <Link to= "/"> <h2> Furniture Tienda de Muebles </h2> </Link>

            <div>
                <Link to= "/nosotros"> Nosotros</Link>
                <Link to =  "/productos" > Productos </Link>
                <Link to = "/productos/mesa" > Mesas </Link>
                <Link to= "/productos/silla" > Sillas</Link>
                <Link to= "/productos/sillon" > Sillones </Link>
            </div>            
            
            <CartWidget />
            

        </nav>
       
    )
}
export default NavBar