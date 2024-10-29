import CartWitget from "./CartWitget"
import { Link } from "react-router-dom"

import "./nav.css"

const NavBar = () =>{
    return(

        <nav>
   
        <div className="brand">

            <Link to="/" className="titulo">
            <img src="/img/logo.png" alt="" />
            <h2>Mi Ropero</h2>
            </Link>

            <ul className="opcion">
                <li>
                 <Link to="/category/remeras">Remera</Link>  
                </li>
                <li> 
                    <Link to="/category/pantalones">Pantalones</Link>
                </li>
                <li> 
                    <Link to="/category/sacos">Sacos</Link>
                </li>
            </ul>


        <CartWitget/>
    </div>
    </nav>
    )
}
export default NavBar