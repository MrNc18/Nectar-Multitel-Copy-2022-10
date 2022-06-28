import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getAllNews } from "../../services/WhoWeAreFront";
import { imageUrl } from "../../services/category";

const Gallery = ({ title, content, desc }) => {
  const [isActive, setIsActive] = useState(false);
  const [gallery, setGallery] = useState([]);

  const handleAllRequirement = async () => {
    try {
      const resp = await getAllNews();
      console.log(resp);
      setGallery(resp && resp.data);
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
    {gallery &&
      gallery.map((item) => (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          <h5 style={{ color: "#1D3557"}}>{item.title}</h5>
        </div>
        <div>
          <h5>{isActive ? "-" : "+"}</h5>
        </div>
      </div>
      {isActive && (
        <div className="accordion-content1">
          <p style={{ color: "#1D3557"}}>{item.description}</p>
          <Container>
            <Row>
              <div className="imgcontent"> 
                <img src={imageUrl(item.image)} alt="" style={{ width: "100%" }} />
              </div>
            </Row>
          </Container>
        </div>
      )}
    </div>
    ))}
    </>
  );
};

export default Gallery;
