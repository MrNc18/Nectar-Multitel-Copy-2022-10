import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imageUrl } from "../../services/category";
import { getAllNews } from "../../services/WhoWeAreFront";
import { useNavigate } from "react-router-dom";

function NewsCard({
  forwardlink = "/newssecond",
  forwardlink1 = "/newsfirst",
  newsFirst,
}) {
  const [news, setNews] = useState([]);

  const navigate = useNavigate();

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
          {news &&
            news.map((items) => {
              return (
                <Col lg={6}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={imageUrl(items.image)}
                      style={{ height: "150px" }}
                    />

                    <Card.Body className="text-center">
                      <Card.Title>{items?.news_date.slice(0, 10)}</Card.Title>
                      <Card.Text>{items?.title}</Card.Text>
                      <hr />
                      <Button
                        variant="primary"
                        size="sm"
                        style={{
                          backgroundColor: "#0076B5",
                          border: "2px solid #0076B5",
                        }}
                        onClick={() => navigate(`/newscard/${items?.slug}`)}
                      >
                        View More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}

export default NewsCard;
