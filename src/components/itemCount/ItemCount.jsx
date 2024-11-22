import React, { useState } from 'react'
import "./ItemCount.css"
  // controla el contador de las cantidades de producto

const ItemCount = ( { stock, addProduct } ) => {
    const [count, setCount]= useState(1)

    //resta 1 al contador

    const handleClickSubtract = () => {
        if( count > 1 ){
        setCount(count - 1)
    }
    }

    const handleClickAdd = () => {
        if( count < stock){
        setCount( count + 1)
    }

    }

  return (
    <div className='item-conten'>
      <div className='item-selec'>
        <button onClick={handleClickSubtract}>-</button>
        <p>{count} </p>
        <button onClick={handleClickAdd}>+</button>
        </div>
        <button className='button-add' onClick={ () => addProduct(count) }>Agregar producto</button>
    </div>
  )
}

export default ItemCount