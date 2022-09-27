import React, {useState} from 'react'
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const ProductPage = (props) => {

const data =props.data;
  
 const [productData, setProductData ]=useState(0)

const increment=()=>{
  
setProductData(productData+1);
}
const decrement =()=>{
  if(productData>0)
  setProductData(productData-1);
  else{
    setProductData(0);
  }
}


  return ( <>
  
    <div className='productPage'>

      <div className='leftSide' data-aos="fade-left"><img src={data.img} className='product-img' alt="#"  ></img>
      
      
      </div>

      <div className='rightSide' data-aos="fade-left">
        <div className='product-data'>

       <h2>{data.name}</h2> 
      <h5 className='title'>{data.title}</h5>
      

<p className='price'>Rs.{data.price} <p className='off'>43% OFF</p></p>

<div className='size-colour'>
  
  <div className='size'>
    <div className='select-size'>Select Size</div>
  <select>
    <option>Select Size</option>
    <option>XXL</option>
    <option>XL</option>
    <option>L</option>
    <option>M</option>
  </select></div>

<div className='colour'>
  <div className='c2'>Colour</div> 
<div className='red'>
<div className='colour1'></div>
<div className='colour2'></div>
<div className='colour3'></div>
<div className='colour4'></div>
</div>
</div>

</div>
<div className='add-to-cart'>
  <button className='add' onClick={decrement}>-</button>{productData}<button className='add' onClick={increment}>+</button>
  <button className='add-cart'onClick={()=>{props.addToCart(data)}} >Add To Cart</button>
</div>
<div>
  <p>Product Details</p>

  <p className='title'>{data.productDetail}</p></div>
        </div>
      </div> 
      </div>
{/* Slider */}

<div className='topproducts'> You may also like's</div>
<div className='product-page-slider'>
       <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 banner" src="/img/jean.jpg" alt="First slide" />
          <Carousel.Caption>
            <Link to="/jean">
              <button className="jeans-btn"> SHOP NOW</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src= "/img/shoes.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <Link to="/shoes">
              <button className="shoes-btn"> SHOP NOW</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 banner" src="/img/shirt.jpg" alt="Third slide" />

          <Carousel.Caption>
            <Link to="/shirt">
              {" "}
              <button className="shirt-btn"> SHOP NOW</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>  
    </div>
    </>
  )
}

export default ProductPage
