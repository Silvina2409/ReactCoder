import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
function NavBar (){
    return (
        <nav>
            
               
            <Link to= "/">
                 <h2> Furniture Tienda de Muebles </h2>

            </Link>

            <div>
                <NavLink to = { "/categoria/mesa"} > Mesas </NavLink>
                <NavLink to={ "/categoria/silla"} > Sillas</NavLink>
                <NavLink to={ "/categoria/sillon"} > Sillones </NavLink>
            </div>            
            
            <CartWidget />
            

        </nav>
       
    )
}
export default NavBar