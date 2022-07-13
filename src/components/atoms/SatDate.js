import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";

const obj = {
  heading: "Sat Date",
  description:
    "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
  subheading: "Sat_Backup Date",
  subheading_description:
    "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
};

// function SdToP({ data }) {
//   return (
//     <div>
//       <h4 className="mt-5 mb-3" style={{ color: "#1D3557" }}>
//         {data.heading}
//       </h4>
//       <p>{data.description}</p>
//     </div>
//   );
// }
// function SdButton({ data }) {
//   return (
//     <div>
//       <h5 className="mt-5 mb-3" style={{ color: "#0478B6" }}>
//         {data.subheading}
//       </h5>
//       <p>{data.subheading_description}</p>
//     </div>
//   );
// }

function SatDate() {

  const [SatDate, setSatDate] = useState({});

  const handleAllSatDate = async () => {
    const data = { slug: "sat-date" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setSatDate(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllSatDate();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            {/* <SdToP data={obj} />
            <SdButton data={obj} />
            <SdButton data={obj} /> */}
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {SatDate?.name}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: SatDate?.description }} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SatDate