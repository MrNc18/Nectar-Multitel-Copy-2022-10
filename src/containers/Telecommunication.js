import React, { useState, useEffect } from "react";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { showAlert } from "../utils/showAlert";
import { getWho_teli_digiBySlug } from "../services/DigitotalFront";

const Telecommunication = () => {
  const [telecommunication, setTelecommunication] = useState({});

  const handleAlltelecommunication = async () => {
    const data = { slug: "telicommunication" };
    try {
      const resp = await getWho_teli_digiBySlug(data);
      console.log(resp);
      setTelecommunication(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAlltelecommunication();
  }, []);

  return (
    <>
      <LandingPage woproducts>
        <section className="telecommunication">
          <h1
            className="white-color text-center"
            style={{ marginRight: "80px" }}
          >
            {" "}
            Telecommunication
          </h1>
        </section>

        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb ">
              <Breadcrumb>
                <Breadcrumb.Item href="telecommunication">
                  Start
                </Breadcrumb.Item>

                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Telecommunication
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          <div>
            <div>
              <h2 style={{ textAlign: "center", color: "#1D3557" }}>
                {telecommunication.title}
              </h2>
            </div>
            <div style={{ textAlign: "center", color: "#1E86BE" }}>
              <p className="mt-5">{telecommunication.sub_description}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>{telecommunication.description}</p>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default Telecommunication;
