import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailConteiner/itemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'



function App() {
  

  return (
    
      <div>
        <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path ="/" element={<ItemListContainer saludo={"Bienvenidos a Mi Ropero"} /> } />
          <Route path ="/category/:idCategory" element={ <ItemListContainer /> }/>
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />
    
        
        </Routes>

        </BrowserRouter>
  

      </div>
 
  );
}

export default App;
