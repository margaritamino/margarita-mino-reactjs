import { getProducts } from "../../data/data"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import "./itemlistcontainer.css"




const ItemListContainer = ( {saludo}) => {

    const [ products, setProducts]= useState([])
    const { idCategory } = useParams()

    console.log( idCategory)

    useEffect(() => {
        getProducts()
        .then((data) => {
            if(idCategory){
            //filtrar productos
            const productsFilter = data.filter( ( product) => product.category === idCategory )
            setProducts(productsFilter)

        }
            else{
                //todos los productos

                setProducts(data)

            }           
        })
        .catch( (error) => {
            console.error(error)
        })
        .finally( () => {
            console.log("Finalizo la promesa")
        })
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