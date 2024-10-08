import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './App.css'



function App() {
  

  return (
    
      <div>
        <NavBar/>

        <ItemListContainer saludo={"Bienvenidos a Mi Ropero"} />

    

      </div>
 
  );
}

export default App;
