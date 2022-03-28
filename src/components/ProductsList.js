import React from 'react'
 import data from "../Data"
import "./proList.css"
import { Button, Card, Col, Container, Row } from "react-bootstrap";


const  ProductsList = ()  => {

     const displayProducts =  data && data.products.map((product) => {
         return (
        <Col md={4}>
          <Card style={{ width: "16rem",marginBottom:"25px" }}>
            <Card.Img variant="top" src={product.image} style={{border:"25px solid #F5F6FA",height:"180px"}} />
            <Card.Body style={{textAlign:"left",height:"140px"}}>
              <Card.Title style={{fontSize:"x-small"}}>{product.title}</Card.Title>
              <Card.Text style={{textAlign:"left",fontSize:"xx-small"}}>
                {product.specification}
              </Card.Text>
              <Col xs={12} md={8} style={{color:"orange", textAlign:"left",paddingLeft:"initial"}}>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <p style={{textAlign:"left"}}>{product.price}</p>
              </Col>
              <Col>
              <Button className="pull-right" variant="primary" size="sm" style={{marginTop:"-55px",marginLeft:"90px"}}>
                  Add to Cart
                </Button>
              </Col>
            </Card.Body>
          </Card>
        </Col>

         );
       });
  return (
   
    <Container>
        <Row>
        <h5 className='text-left' style={{padding:"40px"}}>our products</h5><br/>
         <div className='row' style={{paddingLeft:"65px"}}>{displayProducts}</div>
         </Row>
 

        </Container>
    
  )
}

export default ProductsList