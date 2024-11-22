import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./cart.css"


const Cart = () => {
    const { cart, totalPrice, deletProductById, deletCart } = useContext(cartContext)

    //Early return 
    if(cart.length === 0) {
      return(
        <div className="empty-cart">
          <h2>No hay productos en el carrito</h2>
          <Link to="/" className="button-home-empty-cart">Volver al carrito</Link>
        </div>
      )

    }
    
  return (
    <div className="cart">
        {
           cart.map((productCart)=> (
            <div className="cart-item" key={productCart.id}>
                <img className="img-cart-item" src={productCart.image}/>
                <p className="p-cart-item">{productCart.name}</p>
                <p className="p-cart-item">Precio c/u: {productCart.price}</p>
                <p className="p-cart-item">Cantidad: {productCart.quantity}</p>
                <p className="p-cart-item">Precio Parcial: {productCart.quantity*productCart.price}</p>
                <button className="delet-cart-item" onClick={ ()=> deletProductById(productCart.id)}>Eliminar producto</button>
                       
            </div>
           )) 

           
        }    

        <div className="total-cart">

        <p>Precio Total: {totalPrice()}</p>    
        <button onClick={deletCart} className="button-cart">Vaciar carrito</button>      
        <Link to="/checkout" className="button-cart">Terminar con mi compra</Link>  
        <Link to="/" className="button-cart">Seguir comprando</Link>
        </div>
    </div> 
        
      
       
  )
}

export default Cart