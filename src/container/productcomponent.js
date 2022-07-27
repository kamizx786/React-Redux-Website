import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
const Productcomponent = () => {
const Products=useSelector((state)=>state.allproducts.products);
// const {id,title,image,description,price,category}=Products;
  return (
   <>
   <Row>
   {
    Products.map((curlElem)=>{
        return(
    <Col>
     <Card style={{ width: '18rem' }} key={curlElem.id}>
      <Card.Img variant="top" src={curlElem.image} width="300px" height="300px" />
      <Card.Body>
        <Card.Title>{curlElem.title}</Card.Title>
        <Card.Header>{curlElem.category}</Card.Header>
        <Card.Footer>
       <h6>Price:${curlElem.price}</h6>
        </Card.Footer>
<Link to={`/detail/${curlElem.id}`} state={{id:curlElem.id}}>
<Button variant="primary">Add to Cart</Button>
</Link>
      </Card.Body>
    </Card>
    </Col>
        );
    })
   }
    </Row>
   </>
  )
}

export default Productcomponent


           
       