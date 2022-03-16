import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'

const styles = {
    position: "absolute",
    top: 0,
    right: 0,
    padding: "7px",
    borderRadius: "5px",
    display: "inline-block",
    fontSize: "12px",
    border: "none",
    color: "#fff",
    background: "var(--secondary)",
  };
  
  const ProductCard = () => (
    <div className="col-md-3 mb-4">
      <div className="single_product">
        <div className="portfolio-item portfolio-effect__item portfolio-item--eff1">
          <img
            className="portfolio-item__image img-fluid rounded"
            src="/assets/images/product.png"
            alt="Portfolio Item"
          />
          <div className="portfolio-item__info">
            <div className="portfolio-item__links">
              <div className="portfolio-item__link-block">
                <Button className="portfolio-item__link" style={styles}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="prod_name text-center">
          <span>Mega Speed Router</span>
        </div>
      </div>
    </div>
  );
  
  const getDetails = () => {
    let content = [];
    for (let i = 0; i < 8; i++) {
      content.push(<ProductCard key={i} />);
    }
    return content;
  };

function FooterProducts() {
  return (
    <section id="products" className="pt-5 pb-5">
        <Container>
          <h2 className="mb-4">Our Quality Products</h2>
          <Row>{getDetails()}</Row>
        </Container>
      </section>
  )
}

export default FooterProducts
