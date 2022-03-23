import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function ProductCard() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/assets/images/product.png" style={{border:"45px solid #F5F6FA"}} />
            <Card.Body style={{textAlign:"left"}}>
              <Card.Title>Equipment Name Here</Card.Title>
              <Card.Text style={{textAlign:"left"}}>
                Some heading here
              </Card.Text>
              <Col xs={12} md={6} style={{color:"orange", textAlign:"left"}}>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <p style={{textAlign:"left"}}>$.360</p>
              </Col>
              <Col>
              <Button className="pull-right" variant="primary" size="sm" style={{marginTop:"-60px"}}>
                  Add to Cart
                </Button>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/assets/images/product.png" style={{border:"45px solid #F5F6FA"}} />
            <Card.Body style={{textAlign:"left"}}>
              <Card.Title>Equipment Name Here</Card.Title>
              <Card.Text style={{textAlign:"left"}}>
                Some heading here
              </Card.Text>
              <Col xs={12} md={6} style={{color:"orange", textAlign:"left"}}>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <p style={{textAlign:"left"}}>$.360</p>
              </Col>
              <Col>
              <Button className="pull-right" variant="primary" size="sm" style={{marginTop:"-60px"}}>
                  Add to Cart
                </Button>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/assets/images/product.png" style={{border:"45px solid #F5F6FA"}} />
            <Card.Body style={{textAlign:"left"}}>
              <Card.Title>Equipment Name Here</Card.Title>
              <Card.Text style={{textAlign:"left"}}>
                Some heading here
              </Card.Text>
              <Col xs={12} md={6} style={{color:"orange", textAlign:"left"}}>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <p style={{textAlign:"left"}}>$.360</p>
              </Col>
              <Col>
              <Button className="pull-right" variant="primary" size="sm" style={{marginTop:"-60px"}}>
                  Add to Cart
                </Button>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCard;
