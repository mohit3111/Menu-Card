import React, { useState } from "react";
import products from "./productAPI";
import {Link } from "react-router-dom";



const ProductCard = (props) => {
  
    const [data, setData] = useState(products);


  const fresult=data.filter((curdata)=>{
    return curdata.categorie===props.categorie;
  }
  )

  return (
    <div className="products">


      {fresult.map((values) => {
            return (
              <>
              
                <div className="cards " data-aos="zoom-in-up">
                  <div style={{ width: "18rem" , borderRadius: "0px" }} >
                    <div className="container1">
                    <img className="product-cart-img" src={values.img} alt="#"  />
                    
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
  )
}

export default ProductCard
