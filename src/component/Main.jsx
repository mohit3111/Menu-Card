import React,{useState} from "react";
import "./style.css";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route} from "react-router-dom";
import Contect from "./Contect";
import Home from "./Home";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProductPage from "./ProductPage";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import './productPage.css';
import './footer.css'
const Main = () => {
  

const [data, setdata] = useState(40);

function setData(dta){
setdata(dta);
}

const [cartItm, SetCartItm] = useState([])

function addToCart(addData){

  SetCartItm([...cartItm , {...addData, quantity : 1}]);

}

const[showCart, serShowCart]=useState(false)

  return (
    <>
      <div className="main">
        <NavBar count={cartItm.length} serShowCart={serShowCart}/>
        <ScrollToTop />
        <div className="Super">Super Deal Free Shipping on Order Over ₹500</div>
        {
          showCart ? <Cart cartItm={cartItm}/>:
          <Routes>
        
          <Route path="/" element={<Home  setData={setData} addToCart={addToCart}/>} />
          <Route path="/shirt" element={<ProductCard categorie="shirt" setData={setData} addToCart={addToCart} />} />
          <Route path="/jean" element={<ProductCard categorie="jeans" setData={setData} addToCart={addToCart}/>} />
          <Route path="/shoes" element={<ProductCard categorie="shoes" setData={setData} addToCart={addToCart}/>} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/productpage" element={<ProductPage data={data}  addToCart={addToCart}/>}/>
          <Route path="/cart" element={<Cart cartItm={cartItm}/>}/>
        </Routes>
        }
        
       


       <div className="newsLetter">
         <h1>Newsletter</h1>
       <p>Get timely updats from your favorite products.</p>
       <div className="input">
       <input placeholder="Your email"/>
       <button><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/017f81/external-Send-email-tanah-basah-glyph-tanah-basah.png" alt="#"/></button>
       </div>
        
       
       </div>
        <Footer serShowCart={serShowCart}/>
<div style={{width:"100%", backgroundColor:"Black", color:"white" ,display:"flex", alignItems:"center" ,justifyContent:"center"}}> ©2022 e-SHOP India Marketing Pvt. Ltd  &nbsp; &nbsp;  &nbsp; Designed Buy Mohit Kansal</div>
      </div>
    </>
  );
};
export default Main;
