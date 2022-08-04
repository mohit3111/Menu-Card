import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import Menu from './menuApi';
import { useState } from 'react';



function BasicExample({menuData}) {

        const [itemName,setItem]=useState(Menu);

        const orderNow=(elem)=>{
          var data=itemName[elem-1];
            console.warn(data.name);
          
        };

  return (
    <>
    {menuData.map((curElem)=>{
      return(
        <>
      <Card style={{ width: '18rem' }} className="card" key={curElem.id}>

      <Card.Img variant="top" src="holder.js/100px180" />

      <Card.Body>
        <div className='name'>
        <Card.Title className='dish'>{curElem.name}</Card.Title>
        <h6>{curElem.category}</h6>
        </div>

        <Card.Text>{curElem.description}</Card.Text>

        <div className='btn'>
        <h6>{curElem.price}</h6>
      <Button variant="primary" onClick={()=>{orderNow(curElem.id)}}>Order Now</Button>
        </div>

      </Card.Body>
    </Card>
        </>
      )

    })}

    </>
  );
}

export default BasicExample;