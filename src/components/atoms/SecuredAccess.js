import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getTelecommunicationBySlug } from "../../services/WhoWeAreFront";
import { showAlert } from "../../utils/showAlert";

// const obj = {
//   heading: "Secure Access",
//   description:
//     "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
//   subheading: "Latecy Critical Applications",
//   subheading_description:
//     "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
// };

// const data1 = [
//     {
//         service: "Fiber + Optical Link",
//         particularities:{
//           des:"Limited to locations where:",
//           p1: "- FO Network Coverage",
//           p2: "- Line of Sight with a Multitel POP less than 5Km away"
//         },
//         connectivities:{
//           p1:"FO - up to 1Gb",
//           p2:"LO - up to 1Gb"
//         }
//     },

// ]

// function SaToP({ data }) {
//   return (
//     <div>
//       <h4 className="mt-5 mb-3" style={{ color: "#1D3557" }}>
//         {data.heading}
//       </h4>
//       <p>{data.description}</p>
//     </div>
//   );
// }
// function SaButton({ data }) {
//   return (
//     <div>
//       <h5 className="mt-5 mb-3" style={{ color: "#0478B6" }}>
//         {data.subheading}
//       </h5>
//       <p>{data.subheading_description}</p>
//     </div>
//   );
// }

function SecuredAccess() {
  const [securedaccess, setSecuredAccess] = useState({});

  const handleSecuredAccess = async () => {
    const data = { slug: "secured-access" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setSecuredAccess(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleSecuredAccess();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            {/* <SaToP data={obj} /> */}
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {securedaccess.name}
            </h4>

            <p>{securedaccess.description}</p>
            {/* <Table bordered responsive="md" className="my-5">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Particularities</th>
                  <th>Connectivities</th>
                </tr>
              </thead>
              <tbody> */}
            {/* {data1.map((item) => (
                    <tr>
                        <td>{item.service}</td>
                        <td>{item.particularities.des} <br /> {item.particularities.p1} <br /> {item.particularities.p2} </td>
                        <td>{item.connectivities.p1} <br /> {item.connectivities.p2}</td>
                    </tr>
                ))} */}
            {/* </tbody>
            </Table> */}
            {/* <SaButton data={obj} /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SecuredAccess;
