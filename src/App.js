import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Product from './Components/Product';
import Products from './Components/Products';
import Cart from './Components/Cart';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Registration from './Components/Registration';
import About from './Components/About';
import Contact from './Components/Contact';
import Checkout from './Components/Checkout';
import ProductsCat from './Components/ProductsCat';
import Wishlist from './Components/Wishlist';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/product/:category" element={<ProductsCat></ProductsCat>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products/:id" element={<Product></Product>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
        <Route path="/faq" element={<FAQ></FAQ>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
