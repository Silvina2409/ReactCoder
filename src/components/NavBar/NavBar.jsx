import CartWidget from "../CartWidget/CartWidget"

function NavBar (){
    return (
        <nav>
            <h2> Furniture Tienda de Muebles</h2>

            <div>
                <ul>
                
                    <li> Mesas </li>
                    <li> Sillas</li>
                    <li> Sillones</li>
                </ul>
                <CartWidget />
            </div>

        </nav>
       
    )
}
export default NavBar