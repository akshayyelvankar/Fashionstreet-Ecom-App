import logo from './logo.svg';
import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import {Route,Routes} from 'react-router-dom';
import Product from './components/Product';



function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/products' element={<Products/>}/> 
       <Route path='/products/:id' element={<Product/>}/>
     </Routes>
     
     
    </>
  );
}

export default App;
