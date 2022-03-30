import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import { showAlert } from "../utils/showAlert";

function RegnConfirmation() {
  const [btnLoading, setBtnLoading] = useState();

  const navigate = useNavigate();

  const confirm = () => {
    // try {

    //     setBtnLoading(true);
    //     const data = {
    //         email,
    //         code: otp,
    //     };
    // //   await verifyEmail(data);
    //     navigate("/reset-passsword", { state: data });
    //     showAlert("Email verification successfull.", "success");
    // } catch (error) {
    //     console.log(error);
    //     showAlert(error.data.massage, "error");
    // } finally {
    //     setBtnLoading(false);
    // }
  };


  return (
    <LandingPage woproducts>
      <ServiceBanner title="Registration Confirmation" regnPage />
      <section className="regn_form pos-relative">
        <div className="client_regn">
          <h3 className="modal_heading mb-4">
            <span className="primary-color">Hello,</span> Confirmation Required!
          </h3>
          <p>
            Please click the button below to confirm your registration.
          </p>

          <Form>
            <Button
              disabled={btnLoading}
              className="primary_bg"
              onClick={confirm}
            >
              {btnLoading ? "Confirming...." : "Confirm"}
            </Button>
          </Form>
        </div>
        <img className="dots_regn1" src="/assets/images/dots.png" />
        <img className="dots_regn2" src="/assets/images/dots.png" />
      </section>
    </LandingPage>
  );
}

export default RegnConfirmation;
