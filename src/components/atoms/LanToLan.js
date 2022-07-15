import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getTelecommunicationBySlug } from "../../services/WhoWeAreFront";
import { showAlert } from "../../utils/showAlert";


// const obj = {
//   heading: "Lan-To-Lan",
//   description:
//     "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
//   subheading: "No backbone pass",
//   subheading_description:
//     "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
// };

// function L2LToP({ data }) {
//   return (
//     <div>
//       <h4 className="mt-5 mb-3" style={{ color: "#1D3557" }}>
//         {data.heading}
//       </h4>
//       <p>{data.description}</p>
//     </div>
//   );
// }
// function L2LButton({ data }) {
//   return (
//     <div>
//       <h5 className="mt-5 mb-3" style={{ color: "#0478B6" }}>
//         {data.subheading}
//       </h5>
//       <p>{data.subheading_description}</p>
//     </div>
//   );
// }

function LanToLan() {
  const [lantolan, setLantolan] = useState({});

  const handleLanToLan = async () => {
    const data = { slug: "lan-to-lan" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
    setLantolan(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleLanToLan();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            {/* <L2LToP data={obj} />
            <L2LButton data={obj} />
            <L2LButton data={obj} /> */}
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {lantolan.name}
            </h4>
            <p>{lantolan.description}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LanToLan;
