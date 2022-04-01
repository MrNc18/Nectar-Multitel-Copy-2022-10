import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { baseurl } from "../../utils/request";

// const Products = () => (
//   <Col xl={4} lg={4} md={6}>
//   <Card style={{ width: "18rem", marginBottom:"20px", }}>
//     <Card.Img variant="top" src="/assets/images/product.png" style={{border:"45px solid #F5F6FA"}} />
//     <Card.Body style={{textAlign:"left"}}>
//       <Card.Title>Equipment Name Here</Card.Title>
//       <Card.Text style={{textAlign:"left"}}>
//         Some heading here
//       </Card.Text>
//       <Col xs={12} md={6} style={{color:"orange", textAlign:"left"}}>
//         <span class="fa fa-star checked"></span>
//         <span class="fa fa-star checked"></span>
//         <span class="fa fa-star checked"></span>
//         <span class="fa fa-star checked"></span>
//         <span class="fa fa-star checked"></span>
//         <p style={{textAlign:"left"}}>$.360</p>
//       </Col>
//       <Col>
//       <Button className="pull-right" variant="primary" size="sm" style={{marginTop:"-42px", backgroundColor:"#0076B5", background:"#0076B5"}}>
//           Add to Cart
//         </Button>
//       </Col>
//     </Card.Body>
//   </Card>
// </Col>
// );

// const getDetails = () => {
//   let content = [];
//   for (let i = 0; i < 8; i++) {
//     content.push(<Products key={i} />);
//   }
//   return content;
// };

function ProductCard({ product }) {
  return (
    // <Container>
    //   <Row>
    //   {getDetails()}
    //   </Row>
    // </Container>
    <Col xl={4} lg={4} md={6}>
      <Card style={{ width: "18rem", marginBottom: "20px" }}>
        <Card.Img
          variant="top"
          src={
            product?.cover_img
              ? `${baseurl}/images/${product?.cover_img}`
              : "/assets/images/product.png"
          }
          style={{ border: "45px solid #F5F6FA" }}
        />
        <Card.Body style={{ textAlign: "left" }}>
          <Card.Title>{product?.name}</Card.Title>
          <Card.Text style={{ textAlign: "left" }}>
            {product?.description}
          </Card.Text>
          <Col xs={12} md={6} style={{ color: "orange", textAlign: "left" }}>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <p style={{ textAlign: "left" }}>${product?.price}</p>
          </Col>
          <Col>
            <Button
              className="pull-right"
              variant="primary"
              size="sm"
              style={{
                marginTop: "-42px",
                backgroundColor: "#0076B5",
                background: "#0076B5",
              }}
            >
              Add to Cart
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
