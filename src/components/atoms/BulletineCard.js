import React from "react";
import { Button, Card, Col } from "react-bootstrap";

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllNews } from "../../services/WhoWeAreFront";


function BulletineCard({src}) {
 
  return (
    <>
      <Col md={6} lg={3} className="mb-4">
                    <Card style={{ width: "10rem" }}>
                      <Card.Img variant="top"   src={src} />
                      <Card.Body className="text-center">
                        <Card.Title>  dfdfgffgd</Card.Title>
                        <Card.Text> dfdfdgf</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
      <div>
       
       
 
      </div>
    </>
  );
}

export default BulletineCard;
