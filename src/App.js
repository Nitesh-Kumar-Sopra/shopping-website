import Home from "./pages/Home";
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import ProductList from "./pages/ProductList"
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import ProductSingle from "./pages/ProductSingle";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/> } />
        <Route path="register" element = {<Register/> } />
        <Route path="cart" element = {<Cart/> } />
        <Route path="login" element = {<Login/> } />
        <Route path="product" element = {<Product/> } />
        <Route path="productlist" element = {<ProductList/> } />
        <Route path="productsingle" element = {<ProductSingle/> } />
        
       
      </Routes>
    </Router>
           
    
   
  );
}

export default App;
