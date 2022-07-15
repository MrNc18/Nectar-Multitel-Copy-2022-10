import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getTelecommunicationBySlug } from "../../services/WhoWeAreFront";
import { showAlert } from "../../utils/showAlert";



// const obj = {
//     heading: "Link EN",
//     description:
//       "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
//   };

//   function Len({ data }) {
//     return (
//       <div>
//         <h4 className="mt-5 mb-3" style={{ color: "#1D3557" }}>
//           {data.heading}
//         </h4>
//         <p>{data.description}</p>
//       </div>
//     );
//   }

function LinkEN() {

  const [linken, setLinken] = useState({});

  const handleLinkEN = async () => {
    const data = { slug: "link-en" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
   setLinken(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
 handleLinkEN();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            {/* <Len data={obj} /> */}
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {linken.name}
            </h4>
            <p>{linken.description}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LinkEN