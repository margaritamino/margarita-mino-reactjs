import { createContext, useState } from "react";

//creamos un contexto para el carrito

const cartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addProductInCart = (newProduct) => {
        //comprobar el roducto
        const tempCart = [...cart]
        const indexProduct = cart.findIndex((productCart)=> productCart.id === newProduct.id )
        if(indexProduct >= 0) {
            //si id existe sumar cantidades

         tempCart[indexProduct].quantity = tempCart[indexProduct].quantity + newProduct.quantity

         setCart(tempCart)


        }else{
            //si no existe agregar como producto nuevo
            setCart( [ ...cart, newProduct] )  
        }
        
            

    }

    const deletProductById = (idProduct)=> {
        const productFilter = cart.filter( (productCart)=> productCart.id !== idProduct )
        setCart(productFilter)

    }

    const deletCart = ()=> {
        setCart([])
    }
    
    const totalQuantity = () => {
        const quantity = cart.reduce( (total, productCart)=> total + productCart.quantity,0)

        return quantity
    }

    const totalPrice = () => {
        const price = cart.reduce( (total, productCart)=> total + ( productCart.quantity * productCart.price ),0 )

        return price
    }


    return(
        <cartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deletProductById, deletCart }} >
          {children}
        </cartContext.Provider>
    )

}

export { cartContext, CartProvider}