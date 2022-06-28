import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getAllNews } from "../../services/WhoWeAreFront";
import { imageUrl } from "../../services/category";
import { getNewsByCategory } from "../../services/WhoWeAreFront";
import { useParams } from "react-router-dom";

const BulletineCard = ({ title, content, desc }) => {
  const [bulletines, setBulletines] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    (async () => {
      const response = await getNewsByCategory({ slug: params?.slug });
      console.log("bulletin card highlight", response);
      setBulletines(response?.data?.data);
    })();
  }, [params?.slug]);
  return (
    <>

      <Col md={6} lg={3} className="mb-4">
        
        {bulletines &&
          bulletines.map((item) => (  
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top"  />
              <Card.Body className="text-center">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.name}</Card.Text>
              </Card.Body>
            </Card>
            
          ))}
      </Col>
    </>
  );
}

export default BulletineCard;
