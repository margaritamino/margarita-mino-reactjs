
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { getDocs, collection, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import "./itemlistcontainer.css"




const ItemListContainer = ( {saludo}) => {

    const [ products, setProducts]= useState([])
    const { idCategory } = useParams()

    const getProducts = () => {
        const producstRef = collection(db, "products")
        getDocs(producstRef)
        .then((dataDb)=> {
           const data = dataDb.docs.map((productDb)=> {
                return {id: productDb.id, ...productDb.data() }
            })

            setProducts(data)
        }) 
    }

    
    const getProductsByCategory = () => {
        const productsRef = collection(db, "products")
        const queryfilter = query( productsRef, where( "category",  "==", idCategory) )

        getDocs(queryfilter)        
        .then((dataDb) => { 
            const data = dataDb.docs.map((productDb)=> {
            return { id: productDb.id, ...productDb.data() }
        })
        
        setProducts(data)
   
        })      
    }
    
    useEffect(() => {
       if(idCategory){
        getProductsByCategory()
       }else{
        getProducts()
       }

    }, [idCategory])

 
    
    return (
        <div className="contenido">
            <h1> { saludo} </h1>
            
            <div className="produc">

            <ItemList products={products}  />

            </div>

  
        </div>
    )
}

export default ItemListContainer