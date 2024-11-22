import React from 'react'
import { useState, useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import db from '../../db/db'
import { Link } from 'react-router-dom'
import "./Checkout.css"


const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const [idOrder, setIdOrder] = useState(null)
    const { cart, totalPrice, deletCart } = useContext(cartContext)


     const handleChangeInput = (event) => {
        setDataForm( { ...dataForm, [event.target.name]: event.target.value } )

     }
     
     const handleSubmitForm = (event) =>{
      event.preventDefault()

      const order = {
        buyer: { ...dataForm },
        products: [...cart],
        date: Timestamp.fromDate( new Date() ),
        total: totalPrice()
      }
     
    uploadOrder(order)

     }
     const uploadOrder = (newOrder) =>{
            const orderRef = collection(db, "orders")
            addDoc(orderRef, newOrder)        
         .then((response)=> {
          setIdOrder(response.id)
        })
      .finally(()=>{
        //una vez gemerada la orden, vaciar el carrito
        deletCart()
    })
  
}
  

     return (
    
    <div className="checkout">
        {
            idOrder === null ? (        
          <form onSubmit={handleSubmitForm} className="form-checkout">

          <div className="content-input">
            <label className="label">Nombre completo: </label>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder="Nombre..." />  
          </div>

          <div className="content-input">
            <label className="label">Nombre completo: </label>
            <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder="Telefono..." />
          </div>

          <div className="content-input">
            <label className="label">Nombre completo: </label>
            <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder="email..." />
          </div>


            <button className="button-send-order" type="submit">Terminar mi comra</button>
        
        </form> ) : (
            <div> 
                <h2>Orden generada correctamente</h2>
                <p>Guarde su numero de orden: {idOrder}</p>

                <Link to="/"className="button-to-home">Volver al inicio</Link>
            </div>
        )
        }
       
    </div>
  )
}

export default Checkout