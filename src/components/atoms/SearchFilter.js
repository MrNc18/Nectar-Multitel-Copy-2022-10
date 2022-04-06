import React from "react";
import { Button, Col, Container, Row, Card, InputGroup } from "react-bootstrap";

const Brands = () => (
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
    <label class="form-check-label" for="flexCheckDefault">
      Brand Name Here
    </label>
  </div>
);

const getDetails = () => {
  let content = [];
  for (let i = 0; i < 15; i++) {
    content.push(<Brands key={i} />);
  }
  return content;
};

function SearchFilter() {
  return (
    <Container>
      <Row>
        <Col md={12} style={{ marginTop: "30px" }}>
        <div class="input-group">
            <input class="form-control py-2 border-right-0 border" type="search" placeholder="Search Here" id="example-search-input" />
            <span class="input-group-append">
                <button class="btn btn-outline-secondary border-left-0 border" type="button">
                    <i class="fa fa-search"></i>
                </button>
              </span>
        </div>
          <Card style={{ marginTop: "30px" }}>
            <Card.Header style={{ backgroundColor: "#0076B5", color: "white" }}>
              SHOP BY
            </Card.Header>
            <Card.Body>
              <div className="by_price mb-3">
                <p className="headng mb-2">FILTER BY PRICE</p>
                <div className="row mb-2">
                  <div className="col-4">
                    <p className="small mb-0">Min</p>
                    <input
                      type="text"
                      className="w-100"
                      name="min_price"
                      id="min_price"
                      value={"0"}
                    />
                  </div>
                  to
                  <div className="col-4">
                    <p className="small mb-0">Max</p>
                    <input
                      type="text"
                      className="w-100"
                      name="max_price"
                      id="max_price"
                      value={"15000"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="range"
                      className="w-100"
                      name="rangeInput"
                      min="0"
                      max="50000"
                      defaultValue={""}
                      step="500"
                    />
                  </div>
                </div>
              </div>
              <h6 className="mt-3">REFINE YOUR SEARCH</h6>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  In Promotion
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  New
                </label>
              </div>
              <h6 className="mt-3">BRANDS</h6>
              <p>{getDetails()}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchFilter;
