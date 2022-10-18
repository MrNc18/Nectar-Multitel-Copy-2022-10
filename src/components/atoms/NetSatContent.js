import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import Mission from "../components/atoms/Mission";

const NetSat = () => {
  function NetSatContent({ data }) {
    return (
      <>
        <div>
          <h2 style={{ color: "#1D3557" }} className="pt-5">
            {data.heading1}
          </h2>

          <p className="pt-5">{data.description1}</p>
        </div>

        <div>
          <h5 style={{ color: "#3190C3" }} className="pt-4">
            {data.heading2}
          </h5>

          <p className="pt-4">{data.description2}</p>
          <p>{data.list}</p>
          <li>{data.list1}</li>
          <li>{data.list2}</li>
          <li>{data.list3}</li>
          <li>{data.list4}</li>
          <li>{data.list5}</li>
          <li>{data.list6}</li>
        </div>
        <div>
          <div>
            <h5 style={{ color: "#3190C3" }} className="pt-4">
              {data.heading3}
            </h5>
            <p className="pt-4">{data.description3}</p>
            <div>
              <p>{data.list7}</p>
              <li>{data.list8}</li>
              <li>{data.list9}</li>
              <li>{data.list10}</li>
              <li>{data.list11}</li>
              <li>{data.list12}</li>
              <li>{data.list13}</li>
            </div>
          </div>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "Net Sat",
    description1:
      "Access high-speed Internet anywhere, anytime Customers/users expect to be able to access desired content and applications anytime and anywhere. Multitel, with its VSat network linked to a high performance state-of-the-art satellite platform (HTS), provides high quality Internet access in areas not conveniently served by terrestrial networks.",
    heading2: "NetSat_Prime",
    description2:
      "High-performance, symmetrical, contention-free, enterprise Internet service to meet customers with the most demanding requirements",

    list: "Characteristics: ",
    list1: " Service without contention",
    list2: " Symmetric Access",
    list3: " Public IP",
    list4: "Possibility of assigning Public IP addresses ",
    list5: " Unlimited monthly traffic(Flat rate regime)",
    list6: "SLA Gold ",

    heading3: "NetSat_Pro",
    description3:
      "Business Internet service, asymmetric, with low contention, good performance and with a very competitive price/quality ratio.",
    list7: "Characteristics: ",
    list8: "  Service with low contention ",
    list9: "Asymmetrical Access 1:2 or 1:4",
    list10: "Downlink up to 10Mb",
    list11: " Uplink up to 4Mb ",
    list12: " 1.2m or 1.8m antenna depending on location and contracted speed",
    list13: "Unlimited monthly traffic(Flat rate regime)",
    list14: " SLA Silver ",
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <NetSatContent data={obj} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NetSat;
