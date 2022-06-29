import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { accordionImgData } from "../components/atoms/accordionImgData";
import Gallery from "../components/atoms/Gallery";
import { getNewsByCategory } from "../services/WhoWeAreFront";
import { showAlert } from "../utils/showAlert";
import { imageUrl } from "../services/category";

function EventGallery() {
  const [gallery, setGallery] = useState([]);

  const handleAllRequirement = async () => {
    const data = { slug: "event-gallery-1" };
    try {
      const resp = await getNewsByCategory(data);
      console.log(resp);
      setGallery(resp && resp.data.data);
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
      <Container>
        <Row>
          {gallery &&
            gallery?.news?.map((item) => (
              <Col md={12}>
                <div className="accordion">
                  <>
                    <Gallery
                      title={item?.title}
                      desc={item?.description}
                      content={imageUrl(item.image)}
                    />
                  </>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default EventGallery;
