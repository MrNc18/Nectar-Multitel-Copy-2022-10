import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imageUrl } from "../../services/category";
import { getAllNews } from "../../services/WhoWeAreFront";

function NewsCard({
  forwardlink = "/newssecond",
  forwardlink1 = "/newsfirst",
}) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllNews();
      console.log(response);
      setNews(response?.data);
    })();
  }, []);

  return (
    <>
      <Container>
        <h4
          style={{ color: "#1D3557", marginTop: "30px", marginBottom: "20px" }}
        >
          News
        </h4>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Col lg={6}>
            {news &&
              news.map((items) => {
                return (
                  <Card style={{ width: "18rem" }}>
                    {/* <Card.Img variant="top" src={imageUrl(items.image)}/> */}
                    <img src={imageUrl(items.image)} alt="No Image"  style={{ width: "60px" }} />
                    
                    <Card.Body className="text-center">
                      <Card.Title>{items?.news_date}</Card.Title>
                      <Card.Title>{items?.title}</Card.Title>
                      {/* <img src={imageUrl(items.image)} alt="" />  */}
                      <hr />
                      <Link to={forwardlink1}>
                        <Button
                          variant="primary"
                          size="sm"
                          style={{
                            backgroundColor: "#0076B5",
                            border: "2px solid #0076B5",
                          }}
                        >
                          View More
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                );
              })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewsCard;
