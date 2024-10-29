//se ocupa de la vistas
import { Link } from "react-router-dom"
import "./itemlistcontainer.css"

const Item = ({ product }) => {
  return (
    <div className="item">
    <img src={product.image} className="item-img" alt="pantalon" />
    <div className="itemver">
    <h2>{ product.name} </h2>
    <p>Precio: ${product.price} </p>

    <Link to={ "/detail/" + product.id }><button className="detail-button">Ver detalle</button>
    </Link>
    </div>

   

    
    
    </div>

  )
}

export default Item
