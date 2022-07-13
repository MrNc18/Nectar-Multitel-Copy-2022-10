import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getTelecommunicationByCategory } from "../../services/WhoWeAreFront";
import { showAlert } from "../../utils/showAlert";



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

  const handlePrivateNetwork = async () => {
    const data = { slug: "prime-date-heading" };
    try {
      const resp = await getTelecommunicationByCategory(data);
      console.log(resp);
      setPrimeDate(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handlePrivateNetwork();
  }, []);


  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {primeDate.name}
            </h4>
            <div>
              <h4 className="mb-3" style={{ color: "#0478B6" }}>
                {primeDate.subheading}
              </h4>
              <p>{primeDate.description}</p>
            </div>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PrimeDate;
