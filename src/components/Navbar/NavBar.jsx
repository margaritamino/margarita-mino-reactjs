import CartWitget from "./CartWitget"
import "../nav.css"


const NavBar = () =>{
    return(
   
        <div className="brand">
            <h2>Mi Ropero</h2>
           

            <ul>
                <li>Remera</li>
                <li>Pantalones</li>
                <li>Sacos</li>
            </ul>


        <CartWitget/>
    </div>
    )
}
export default NavBar