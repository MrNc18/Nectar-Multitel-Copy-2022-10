import React, { useState, useEffect } from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { showAlert } from "../utils/showAlert";
import { getTelecommunicationBySlug } from "../services/TelecommunicationFront";

const VSAT = () => {
  const [VSAT, setVSAT] = useState({});

  const handleAllVSAT = async () => {
    const data = { slug: "vsat" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setVSAT(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllVSAT();
  }, []);

  // function Vsat({ data }) {
  //   return (
  //     <>
  //       <div className="container">
  //         <div>
  //           <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
  //         </div>
  //         <div>
  //           <p>{data.description1}</p>
  //         </div>
  //         <div>
  //           <p>{data.description2}</p>
  //         </div>
  //         <div>
  //           <h6 className="pt-4">{data.heading2}</h6>
  //         </div>
  //         <div className="pl-3 dotcol">
  //           <ul>
  //             <li>{data.tag1}</li>
  //             <li>{data.tag2}</li>
  //             <li>{data.tag3}</li>
  //             <li>{data.tag4}</li>
  //             <li>{data.tag5}</li>
  //             <li>{data.tag6}</li>
  //             <li>{data.tag7}</li>
  //             <li>{data.tag8}</li>
  //             <li>{data.tag9}</li>
  //             <li>{data.tag10}</li>
  //             <li>{data.tag11}</li>
  //             <li>{data.tag12}</li>
  //             <li>{data.tag13}</li>
  //           </ul>
  //         </div>
  //         <div>
  //           <h6 className="pt-4">{data.heading3}</h6>
  //         </div>
  //         <div className="pl-3 dotcol">
  //           <ul>
  //             <li>{data.stag1}</li>
  //             <li>{data.stag2}</li>
  //           </ul>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  // const obj = {
  //   heading1: "VSAT",
  //   description1:
  //     "Multitel's VSat Network, aimed at the business market, is supported by a state-of-the-art high-performance satellite (HTS), has national coverage and supports two-way data, voice, video and Internet communication.",
  //   description2:
  //     "A VSat solution makes it possible to service remote locations, with dicult access or without coverage of the basic network, presenting itself as an advantageous alternative to the terrestrial network, or a complementary oer to terrestrial technologies for backup solutions with eective guarantee of redundancy",
  //   heading2: "Platform Features:",
  //   tag1: "SkyEdge II Platform - Gilat",
  //   tag2: "Intelsat Is37e Satellite (EPIC)",
  //   tag3: "KU band",
  //   tag4: "Downlink up to 10Mb",
  //   tag5: "Uplink up to 4Mb",
  //   tag6:"Symmetrical or asymmetrical solutions depending on the type of service contracted",
  //   tag7:"High availability and security ",
  //   tag8:"Centralized supervision and management ",
  //   tag9:"Trac Acceleration and Prioritization Features",
  //   tag10:"1.2m or 1.8m remote antennas",
  //   tag11:"Quick installation",
  //   tag12:"Trac-independent monthly fee (Flat Rate regime) ",
  //   tag13:"SLA in accordance with the type of service contracted",
  //   heading3: "Service",
  //   stag1: "DataSat ",
  //   stag2: "Net Sat",
  // };

  return (
    <>
      <LandingPage>
        <ServiceBanner title="VSAT" regnPage />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Telecommunications</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  VSAT
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          {/* <Vsat data={obj} /> */}
          <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
            {VSAT?.name}
          </h4>
          <div className="mb-5 mt-3" dangerouslySetInnerHTML={{ __html: VSAT?.description }} />
        </div>
      </LandingPage>
    </>
  );
};

export default VSAT;
