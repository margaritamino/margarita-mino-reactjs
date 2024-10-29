
import Item from "./Item"
import "./itemlistcontainer.css"

const ItemList = ({ products }) => {
  return (
    <div className="itemlist">         
         {
        products.map((product) => (
       <Item product={product} key={product.id} />

        ))
    }
    </div>
  )
}

export default ItemList