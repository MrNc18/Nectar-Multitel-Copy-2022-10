import React from "react";
import data from "../Data";
import "./proList.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ProductsList = () => {
  const navigate = useNavigate();

  const displayProducts =
    data &&
    data.products.map((product) => {
      return (
        <Col md={4} key={product._id}>
          <Card style={{ width: "16rem", marginBottom: "25px" }}>
            {/* <Link state={{ product }} to={`/products/${product.title}`}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ border: "25px solid #F5F6FA", height: "180px" }}
              />
            </Link> */}
            <a
              onClick={() =>
                navigate(`/products/${product.title}`, { state: { product } })
              }
            >
              <Card.Img
                variant="top"
                src={product.image}
                style={{ border: "25px solid #F5F6FA", height: "180px" }}
              />
            </a>
            <Card.Body style={{ textAlign: "left", height: "180px" }}>
              <a
                onClick={() =>
                  navigate(`/products/${product.title}`, { state: { product } })
                }
              >
                <Card.Title style={{ fontSize: "x-small" }}>
                  {product.title}
                </Card.Title>
              </a>
              <Card.Text style={{ textAlign: "left", fontSize: "small" }}>
                {product.specification}
              </Card.Text>
              <Col
                xs={12}
                md={8}
                style={{
                  color: "orange",
                  textAlign: "left",
                  paddingLeft: "initial",
                }}
              >
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p style={{ textAlign: "left", color: "#1D3557" }}>
                  {product.price}
                </p>
              </Col>
              <Col>
                <Button
                  className="pull-right secondary_bg"
                  variant="primary"
                  size="sm"
                  style={{
                    marginTop: "-55px",
                    marginLeft: "90px",
                    border: "none",
                  }}
                >
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
        <h5 className="text-left" style={{ padding: "40px" }}>
          Products
        </h5>
        <br />
        <div className="row" style={{ paddingLeft: "65px" }}>
          {displayProducts}
        </div>
      </Row>
    </Container>
  );
};

export default ProductsList;
