import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {getTelecommunicationBySlug} from "../../services/WhoWeAreFront";
import { showAlert } from "../../utils/showAlert";


// const obj = {
//     heading: "internet",

//     description:
//     "Multitel's Internet Service is aimed at companies or organizations that need a high performance service that allows access, exchange and sharing of a vast set of information and resources . We use international connectivity via submarine cable, through different  providers in order to guarantee continuity of service and minimize the effect of failure of one of the accesses.National traffic exchanges between the various internet providers s in Angola are established via IXP (Internet Exchange Point).We offer several types of Internet connectivity service in order to meet the requirements of different type of customers .",
//       list1:"Net_Prime",
//       list2:"Net_Pro",
//       list3:"Net_Sat",

//   };


const NetPro = () => {
  const [netpro, setNetpro] = useState({});

  const handleNetpro= async () => {
    const data = { slug: "net-pro" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setNetpro(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleNetpro();
  }, []);





  //   return (
  //     <>
  //     <div>
  //       <h4 className="mt-5 mb-5" style={{color:"#1D3557"}}>{data.name}</h4>

  //       <p>{data.description}</p>
  //     </div>
  //     <div>
  //       <li>{data.list1}</li>
  //       <li>{data.list2}</li>
  //       <li>{data.list3}</li>

  //     </div>
  //     </>
  //   );
  // }

  // function PrivateNetworkContent() {

  return (
    <>

      <Container>
        <Row>
          <Col md={12} className="mt-2">
            {/* <PrivateNetwork data={obj} /> */}
            {/* {privateNetwork &&
           privateNetwork.map((data) => { */}

            <div>
              <h4 className="mt-5 mb-5" style={{ color: "#1D3557" }}>{netpro.name}</h4>

              <p>{netpro.description}</p>
            </div>
            <div>
              {/* <li>{data.list1}</li>
              <li>{data.list2}</li>
              <li>{data.list3}</li> */}

            </div>

          </Col>

        </Row>
      </Container>

    </>


  );
}

export default NetPro;
