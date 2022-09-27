import React from 'react'
import {Link} from 'react-router-dom'

const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='left-footer'> 
      <img className='logo2' src='/img/e.png' alt="#" />
      <p> 
      Becoming Indias no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made e-Shop the online platform that it is today..</p>
      
      <div className='insta'>
        
<img src="https://img.icons8.com/ios/50/017f81/instagram-new--v1.png" alt="#" />
<img src="https://img.icons8.com/ios-glyphs/50/017f81/facebook-new.png" alt="#" />
<img src="https://img.icons8.com/ios-glyphs/50/017f81/twitter--v1.png" alt="#" />
<img src="https://img.icons8.com/ios-glyphs/50/017f81/pinterest.png" alt="#" />
      </div>
      
      </div>

      <div className='center-footer'>
        
        <div className='usefull-links'>
        <h4>Usefull Links</h4>
        <Link to="/" className='links' onClick={()=>{props.serShowCart(false)}} > Home</Link>
        <Link to ="/contect" className='links' onClick={()=>{props.serShowCart(false)}} > Contect</Link>
        <Link to ="/shoes" className='links' onClick={()=>{props.serShowCart(false)}}> Shoes</Link>
        <Link to="/shirt" className='links'  onClick={()=>{props.serShowCart(false)}} > Shirts</Link>
        <Link to ="/jean" className='links' onClick={()=>{props.serShowCart(false)}}  > Jeans</Link>
        <Link to ="/cart" className='links' onClick={()=>{props.serShowCart(true)}} > Cart</Link>
        </div>

      </div>

      <div className='right-footer'>
        <img src='./img/footer1.jpg' alt="#" />
      </div>
      
    </div>
  )
}

export default Footer
