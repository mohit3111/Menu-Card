import React from "react";
import Slider from "./Slider";
import "./style.css";
import products from "./productAPI";
import {Link} from "react-router-dom";


const Home = (props) => {
  
  return (
    <div className="home-page">
      <Slider />
      <p className="topproducts" >Top Products</p>
      <div className="p2">
 <div className="products">


      {products.map((values) => {
            return (
              <>
              
                <div className="cards " data-aos="flip-left">
                  <div style={{ width: "18rem" , borderRadius: "0px" }} >
                    <div className="container1">
                    <img className="product-cart-img" src={values.img}  alt="#"/>
                    
                    <div className="button" > <button  onClick={()=>{props.addToCart(values)}} className='cart-btn'>Add to cart</button>
                      <Link to="/productpage" className="link" onClick={()=>{props.setData(values)}}><button className='cart-btn'>Buy Now</button></Link></div>
                      </div>
                    <div className="product-text">
                    <Link to="/productpage" className="link" onClick={()=>{props.setData(values)}}>
                      <span className="card-item-name">{values.name}</span>
                      <p className="card-item-title">{values.title}</p>
                      <span className="card-item-price ">₹{values.price}</span>
                      </Link>
                    </div>
                   
                  </div>
                </div>
                
              </>
            );
          })}
    </div>
      </div>
    </div>
  );
};

export default Home;

