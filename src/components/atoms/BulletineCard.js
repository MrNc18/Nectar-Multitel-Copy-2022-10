import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getNewsByCategory } from "../../services/WhoWeAreFront";
import { imageUrl } from "../../services/category";

function BulletineCard() {
  const [bulletines, setBulletines] = useState([]);

  const handleAllRequirement = async () => {
    const data = { slug: "bulle-1" };
    try {
      const resp = await getNewsByCategory(data);
      console.log(resp);
      setBulletines(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllRequirement();
  }, []);
  return (
    <>
    {bulletines &&
          bulletines?.news?.map((item) => (
      <Col md={6} lg={3} className="mb-4">
        {console.log(bulletines, "resp")}
        
            <Card style={{ width: "11rem" }}>
              <Card.Img variant="top" src={imageUrl(item.image)} style={{height:"150px"}} />
              <Card.Body className="text-center">
                <Card.Title>{item.news_date.slice(0, 10)}</Card.Title>
                <Card.Text>{item.news_number}</Card.Text>
              </Card.Body>
            </Card>
          
      </Col>
      ))}
    </>
  );
}

export default BulletineCard;
