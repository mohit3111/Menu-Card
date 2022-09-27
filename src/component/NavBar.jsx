import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = (props) => {


  return (
    <div className='navBar'>

{['xxl'].map((expand) => (
 
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" style={{flexWrap :"nowrap"}}>
          <Container fluid>
            <Navbar.Brand href="#" ><div className='eshop'>
        <Link to="/" onClick={()=>{props.serShowCart(false)}}> <img className='logo' src="/img/e.png" alt="#"/></Link> 
        </div></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  e-SHOP
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                <div className='links'>

                  <Nav.Link href="#action1"> <Link to="/" className='link' onClick={()=>{props.serShowCart(false)}}  > Home</Link></Nav.Link>
                  <Nav.Link href="#action2"> <Link to ="/shoes" className='link' onClick={()=>{props.serShowCart(false)}}> Shoes</Link></Nav.Link>
                  <Nav.Link href="#action2"><Link to="/shirt" className='link'  onClick={()=>{props.serShowCart(false)}} > Shirts</Link></Nav.Link>
                  <Nav.Link href="#action2"> <Link to ="/jean" className='link' onClick={()=>{props.serShowCart(false)}} > Jeans</Link></Nav.Link>
                  <Nav.Link href="#action2"> <Link to ="/contect" className='link' onClick={()=>{props.serShowCart(false)}} > Contect</Link></Nav.Link>
                  </div>         
                   </Nav>

                <Form className="d-flex">
                
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}


<div className='icons'>
    <Link to="/cart" className='link' ><img src="/img/cart.png" alt='#' onClick={()=>{props.serShowCart(true)}}/><sup>{props.count}</sup></Link>
</div>
    </div>
  )
}

export default NavBar;
