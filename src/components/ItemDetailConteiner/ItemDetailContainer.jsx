//logica

import { useState, useEffect } from "react"
import db from "../../db/db.js"
import { getDoc, doc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})

  const { idProduct } = useParams()

  
  const getProductById = () => {
    const docRef = doc( db, "products", idProduct)
    getDoc(docRef)
    .then((dataDb)=> {
      const data = { id: dataDb.id, ...dataDb.data() }     
      setProduct(data)
  })
  }
  
  useEffect( ()=> {
    getProductById()
 
  }, [] )

  return (
    <ItemDetail product={product} />
  )
}


export default ItemDetailContainer