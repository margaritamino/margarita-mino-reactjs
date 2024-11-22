import { useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./nav.css"


const CartWitget = () => {
  const { totalQuantity }= useContext(cartContext)

  const total = totalQuantity()


  return (
    <Link to="/cart" className="carrito">
        <img src="https://static.vecteezy.com/system/resources/previews/007/790/778/original/shopping-cart-icon-vector.jpg" alt="" />
        <p>{total >= 1 && total}</p>
        <p></p>

    </Link>
  )
}

export default CartWitget
  