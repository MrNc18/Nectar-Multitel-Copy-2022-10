import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PromotionCard({ detail }) {
  let navigate = useNavigate();
  return (
    <Row style={{ justifyContent: "center" }}>
      <Col lg={12} md={12} sm={12} xs={12}>
        <Card className="my-5" style={{ flexDirection: "row", justifyContent: "center" }}>
          <Card.Img
            variant="top"
            src="/assets/images/fiber.png"
            style={{ width: "35%" }}
          />
          <Card.Body>
            <Card.Title>Unlimited Business</Card.Title>
            {!detail ? (
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            ) : (
              <>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  blandit interdum felis sit amet vehicula. Vestibulum sagittis
                  luctus elit, non lobortis neque fringilla non. Duis tempus
                  sollicitudin nunc id placerat. Vestibulum non nibh a lacus
                  viverra congue nec ut velit. Sed id dui nisi. Proin at
                  suscipit velit.
                </Card.Text>
                <Card.Text>
                  Sed id lacus metus. Proin ultrices turpis vitae eleifend
                  tempus. Nam dapibus vitae augue consequat facilisis. Phasellus
                  rhoncus ac dui at tristique. Etiam porttitor eros non orci
                  fermentum.
                </Card.Text>
              </>
            )}

            <Row style={{ flexDirection: "row" }}>
              <Col>
                <Button variant="outline-primary" style={{ border: "none" }}>
                  <i className="fa-solid fa-wifi fa-lg"></i> Internet
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" style={{ border: "none" }}>
                  <i class="fa-solid fa-tower-broadcast fa-lg"></i> Unlimited
                  Data
                </Button>
              </Col>
            </Row>
            {!detail && (
              <>
                <hr />
                <Button
                  variant="outline-primary"
                  style={{ border: "none" }}
                  onClick={() => navigate("/categories/promotions/tag")}
                >
                  View Full Details{" "}
                  <i class="fa-solid fa-arrow-right fa-lg"></i>
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default PromotionCard;
