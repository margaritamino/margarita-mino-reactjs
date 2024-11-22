//vista
import ItemCount from "../itemCount/ItemCount"
import { useContext,useState } from "react"
import { cartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./itemdetail.css"

const ItemDetail = ({ product }) => {

  const [showItemCount, setShowItemCout] = useState(true)

  const { cart, addProductInCart } = useContext(cartContext)

  const addProduct = ( count) => {
    const productCart = { ...product, quantity: count}
    
    addProductInCart(productCart)

    //se cambia el estado para ocultar itemCount
    setShowItemCout(false)   

  }
  return (
    <div className="item-detail">
      <img src={product.image} alt="" />
      <div className="detail-conten">
        <h2 className="detail-name">{product.name}</h2>
        <p className="detail-descr">{product.description}</p>
        <p className="detail-prec">Precio: ${product.price}</p>

        
        {
          showItemCount === true ? 
          (<ItemCount stock={product.stock} addProduct={addProduct} />)
          :
          ( <Link to="/cart" className="Button-end">Terminar mi compra</Link> )
        }

        

      </div>
    </div>
  )
}
export default ItemDetail