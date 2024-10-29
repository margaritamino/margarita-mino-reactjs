//vista
import "./itemdetail.css"

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <img src={product.image} alt="" />
      <div className="detail-conten">
        <h2 className="detail-name">{product.name}</h2>
        <p className="detail-descr">{product.description}</p>
        <p className="detail-prec">Precio: ${product.price}</p>
      </div>
    </div>
  )
}
export default ItemDetail