import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import './App.css';



function App() {
  

  return (
    
      <div>
        <BrowserRouter>
        <CartProvider>
        <NavBar/>
         
          
        <Routes>
          <Route path ="/" element={<ItemListContainer saludo={"Bienvenidos a Mi Ropero"} /> } />
          <Route path ="/category/:idCategory" element={ <ItemListContainer /> }/>
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />    
          <Route path="/cart" element={<Cart/>} /> 
          <Route path="/Checkout" element={<Checkout/>} /> 
        </Routes> 
                    
             
       </CartProvider>
       </BrowserRouter>
  

      </div>
 
  )
}

export default App
