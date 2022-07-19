import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";


// const obj = {
//   heading: "Prime Date",
//   subheading: "Optical Fiber",
//   description:
//     "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
// };

// function PDate({ data }) {
//   return (
//     <div>
//       <h4 className="mb-3" style={{ color: "#0478B6" }}>
//         {data.subheading}
//       </h4>
//       <p>{data.description}</p>
//     </div>
//   );
// }

function PrimeDate() {

  const [primeDate, setPrimeDate] = useState({});

  const handleAllPrivateNetworkContent = async () => {
    const data = { slug: "prime-date-heading" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setPrimeDate(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllPrivateNetworkContent();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
          <h4 className="mt-3 mb-4" style={{color:"#1D3557"}}>{primeDate?.name}</h4>
            <div dangerouslySetInnerHTML={{ __html: primeDate?.description }} />
            {/* <PDate data={obj} />
            <PDate data={obj} />
            <PDate data={obj} /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PrimeDate;
