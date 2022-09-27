
import React,{useState}from 'react'
import  "./cart.css";
const Cart = ({cartItm}) => {

    const [cart ,setCart]=useState(cartItm)
    
   

  return (
    <div className='container'>
      <div className='left-cart'>
        <div className='your-cart'>Your Cart</div>
        {
      cart.map((cartItem,cartindex)=>{
        return (
         
          <div className='left-cart-in'>
            <img src={cartItem.img} width={150} alt="#"/>
            <div className='product-name'>
              <div className='name-price cart-inside' >
            <span className='name'>{cartItem.name}</span>
            <span className='price'>₹{cartItem.price*cartItem.quantity}</span>
            </div>
            <span className='categorie cart-inside'>{cartItem.categorie}</span>
            <span className='title cart-inside'>{cartItem.title}</span>
            <div className='quantity-counter cart-inside'>
            <button className='add'
             onClick={()=>{
              const _CART=cart.map((item,index)=> {
                return cartindex === index?{...item, quantity: item.quantity >0?item.quantity - 1:0} : item
              })
                setCart(_CART);
              }}
            >-</button>
            <span className='quantity'>{cartItem.quantity}</span>

            <button className='add'
            onClick={()=>{
              const _CART=cart.map((item,index)=> {
                return cartindex === index?{...item, quantity: item.quantity + 1} : item
              })
                setCart(_CART);
              }}>+</button>
</div>
            
          </div>
          </div>
          
        )
      })
      }      
      </div>


      <div className='right-cart'>

        <span className='summary '><h4>Summary</h4></span>

        <span className="subtotal"><span>Subtotal </span>  <p>₹{
          cart.map(item => item.price * item.quantity).reduce((total, value)=>total+value,0)
        }</p></span>
        
        <span className='delivery subtotal'> <span>Estimated Delivery</span> <p>₹0.00</p></span>
        
        <p className='total subtotal' >Total <span>₹
        {
          cart.map(item => item.price * item.quantity).reduce((total, value)=>total+value,0)
        }
        </span></p>
        <button className='checkout'>Checkout</button>
        
        </div>
    </div>
  )
}

export default Cart
