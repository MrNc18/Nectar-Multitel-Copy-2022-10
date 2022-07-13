import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";

// const obj = {
//     heading: "Private Networks",
//     subheading:
//       "We eliminate distances between disperesed locations in your organization",
//     description:
//       "Our offer of Private Network(WAN) solutions is supported on a multiserver network infrastructure, on MPLS-TP Backbone and also on a VSat platform and has specialized and consultancy service that permanently articulate the evolution of technology to the specificity of the each Customer's business.",
//   };

// function PrivateNetwork({ data }) {
//   return (
//     <div>
//       <h4 className="mt-5 mb-5" style={{color:"#1D3557"}}>{data.heading}</h4>
//       <h5 className="mb-3" style={{color:"#0478B6"}}>{data.subheading}</h5>
//       <p>{data.description}</p>
//     </div>
//   );
// }

function PrivateNetworkContent() {

  const [privateNetworks, setPrivateNetworks] = useState({});

  const handleAllPrivateNetworkContent = async () => {
    const data = { slug: "private-network" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setPrivateNetworks(resp && resp.data.data);
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
            {/* <PrivateNetwork data={obj} /> */}
            <h4 className="mt-3 mb-4" style={{color:"#1D3557"}}>{privateNetworks?.name}</h4>
            <div dangerouslySetInnerHTML={{ __html: privateNetworks?.description }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PrivateNetworkContent;
