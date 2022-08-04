
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import BasicExample from "./card";
import Menu from './menuApi';
import { useState } from 'react';

const ColorSchemesExample=()=> {
  const [menuData, setMenuData]=useState(Menu);

  const filterFunction=(category)=>{
    console.log("i am on click")
    const upDateList=Menu.filter((curElem)=>{
      return curElem.category === category;
    });
    setMenuData(upDateList);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>

          <Navbar.Brand href="#home">Menu Card</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link href="#home" onClick={()=>setMenuData(Menu)}>All</Nav.Link>
            
            <Nav.Link href="#Breakfast" onClick={()=>filterFunction("breakfast")}>Breakfast</Nav.Link>
            <Nav.Link href="#lunch" onClick={()=>filterFunction("lunch")}>lunch</Nav.Link>
            <Nav.Link href="#evening" onClick={()=>filterFunction("evening")}>evening</Nav.Link>
            <Nav.Link href="#Dinner" onClick={()=>filterFunction("dinner")}>Dinner</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <div className="cards">
                < BasicExample menuData={menuData}/>
            </div>
    </>
  );
}

export default ColorSchemesExample;