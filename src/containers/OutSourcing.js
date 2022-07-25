import React, { useEffect, useState } from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { showAlert } from "../utils/showAlert";
import { showAlert } from "../utils/showAlert";
import { getDigitotalBySlug } from "../services/DigitotalFront";
import { imageUrl } from "../services/category";
const OutSourcing = () => {
  const navigate = useNavigate();
  const [outsourcing, setOutsourcing] = useState({});

  const handleAllOutsourcing = async () => {
    const data = { slug: "outsourcing" };
    try {
      const resp = await getDigitotalBySlug(data);
      console.log(resp);
      setOutsourcing(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllOutsourcing();
  }, []);

  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="OutSourcing" />

        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>Start</Breadcrumb.Item>

                <Breadcrumb.Item>Digital</Breadcrumb.Item>

                <Breadcrumb.Item> Other Services</Breadcrumb.Item>

                <Breadcrumb.Item
                  active
                  style={{ color: "#0C7CB8", fontWeight: "600" }}
                >
                  Outsourcing
                </Breadcrumb.Item>
              </Breadcrumb>

              <NavDropdown title="Select Service" id="basic-nav-dropdown">
                <NavDropdown.Item>OMG</NavDropdown.Item>
                <NavDropdown.Item>Special Services</NavDropdown.Item>

                <NavDropdown.Item style={{ color: "#0C7CB8" }}>
                  Outsourcing
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </div>
          </div>
          <div className="row">
            <div style={{ display: "flex" }} className="pt-5  col-12 col-md-4">
              <div>
                <img
                  className="img-fluid"
                  height={250}
                  width={350}
                  src={imageUrl(outsourcing?.image)}
                  alt=""
                />
              </div>
            </div>
            <div className=" pt-5 col-md-8">
              <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
                {outsourcing?.name}
              </h4>
              <div
                className="mb-5 mt-3"
                dangerouslySetInnerHTML={{
                  __html: outsourcing?.description,
                }}
              ></div>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default OutSourcing;
