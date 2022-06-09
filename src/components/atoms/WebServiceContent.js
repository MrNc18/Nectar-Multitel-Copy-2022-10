import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import Mission from "../components/atoms/Mission";

const WebServices = () => {
  function WebServicesContent({ data }) {
    return (
      <>
        <div>
          <h2 style={{ color: "#1D3557" }} className="pt-5">
            {data.heading}
          </h2>
          <div>
            <h5 style={{ color: "#3190C3" }} className="pt-4">
              {data.heading1}
            </h5>
            <div>
              <p claame="pt-5">{data.description1}</p>
            </div>
          </div>

          <div>
            <h5 style={{ color: "#3190C3" }} className="pt-4">
              {data.heading2}
            </h5>

            <p claame="pt-5">{data.description2}</p>
          </div>
          <div>
            <h5 style={{ color: "#3190C3" }} className="pt-4">
              {data.heading3}
            </h5>

            <p claame="pt-5">{data.description3}</p>
          </div>
        </div>

        <div>
          <h5 style={{ color: "#3190C3" }} className="pt-4">
            {data.heading4}
          </h5>
          <p className="pt-4">{data.description4}</p>
        </div>
      </>
    );
  }

  const obj = {
    heading: "Web Services",
    heading1: "Domain Registration",
    description1:
      "The Domain Registration gives the Organization of companies a professional image, while identifying all users with the entity they represent,either by making it available on a WEB site or by making it available in the form of an electronic address.     Multitel supports the Customer in the administrative procedures for registering the name with the entity, which at the national level are   responsible for registering domains.",
    heading2: "DNS Management",
    description2:
      " The DNS Management service is intended for any Organization with Multitel Internet access that, needing to maintain public IP addresses for its Web, Mail or other services servers and does not want to worry about managing the associated DNS.",
    heading3: "Web Hosting",
    description3:
      "Multitel's Web Hosting service in a Microsoft or Linux environment allows the Customer to make information available on the Internet in a convenient and effictive way. It is intended for all business customers who do not have a public web serve",
    heading4: "Web Housing",
    description4:
      "MULTITEL's Housing service offers the possibility of housing the customer's equipment in specialized facilities, ensuring a permanent and robust connection to the Internet.",
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <WebServicesContent data={obj} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WebServices;
