import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getAllNews } from "../../services/WhoWeAreFront";
import { imageUrl } from "../../services/category";

function BulletineCard( ) {
  const [bulletines, setBulletines] = useState([]);

  const handleAllRequirement = async () => {
    try {
      const resp = await getAllNews();
      console.log(resp);
      setBulletines(resp && resp.data);
      console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllRequirement();
  }, []);

  return (
    <>
      <Col md={6} lg={3} className="mb-4">
        {bulletines &&
          bulletines.map((item) => (
            <Card style={{ width: "10rem" }}>
                  <Card.Img
                  variant="top"
                  src={imageUrl(item.image)}
                />
              <Card.Body className="text-center">
                <Card.Title>{item.news_date}</Card.Title>
                <Card.Text>{item.title}</Card.Text>
              </Card.Body>
            </Card>
          ))}
      </Col>
    </>
  );
}

export default BulletineCard;
