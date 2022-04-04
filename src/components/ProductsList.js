import React,{useState,useEffect} from "react";
import data from "../Data";
import "./proList.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAllProducts,imageUrl} from "../services/category";
import Image19 from ".././assets/Image19.png"
import {formatAmount} from "../utils/AmountFormatter"

const ProductsList = () => {
  const navigate = useNavigate();
  const [allProducts,setAllProducts] = useState('')

  const handleGetallProducts  = async () =>{
    try{
    const resp =  await getAllProducts()
    setAllProducts(resp.data)
    console.log("resp",resp)
    }
    catch(error) {
      alert("something Went Wrong","Error") 
    }
  }

  useEffect(() => {
    handleGetallProducts();
     console.log("allProducts",allProducts)
  }, []);

  

  const displayProducts =
  
  allProducts &&
  allProducts.map((product) => {
      return (
        <Col md={4} key={product.id}>
          <Card style={{ width: "16rem", marginBottom: "25px" }}>
            <a
              onClick={() =>
                navigate(`/products/${product.slug}`)
              }
            >
              <Card.Img
                variant="top"
                src={(imageUrl(product.cover_img) !=null) ? imageUrl(product.cover_img):Image19}
                style={{ border: "25px solid #F5F6FA", height: "180px" }}
              />
            </a>
            <Card.Body style={{ textAlign: "left", height: "180px" }}>
              <a
                onClick={() =>
                  navigate(`/products/${product.slug}`)
                }
              >
                <Card.Title style={{ fontSize: "x-small" }}>
                  {product.name}
                </Card.Title>
              </a>
              <Card.Text style={{ textAlign: "left", fontSize: "small" }}>
                {product.description}
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
                {formatAmount(product.price)}
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
