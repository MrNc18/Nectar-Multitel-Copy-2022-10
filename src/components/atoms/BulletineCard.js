import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getNewsByCategory } from "../../services/WhoWeAreFront";
import { imageUrl } from "../../services/category";

function BulletineCard() {
  const [bulletines, setBulletines] = useState([]);

  const handleAllRequirement = async () => {
    const data = { slug: "bulle" };
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
        
            <Card style={{ width: "10rem" }}>
              {/* {item?.image?.map((img) => {
                <Card.Img variant="top" src={imageUrl(img)} />
              })} */}
              <Card.Img variant="top" src={imageUrl(item.image)} />
              <Card.Body className="text-center">
                <Card.Title>{item.news_date}</Card.Title>
                <Card.Text>{item.title}</Card.Text>
              </Card.Body>
            </Card>
          
      </Col>
      ))}
    </>
  );
}

export default BulletineCard;
