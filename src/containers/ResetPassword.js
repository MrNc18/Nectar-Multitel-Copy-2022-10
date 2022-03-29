import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputField from "../components/atoms/InputField";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import LoginModal from "../components/LoginModal";
import { isValidEmail } from "../utils/validators";


function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const buttonEnabled = newPassword && confirmPassword;

  const formValue = {
    newPassword,
    confirmPassword,
    validation: { confirmPassword: confirmPasswordError },
  };

  const resetPassword = async () => {
    setConfirmPasswordError("");
    if (newPassword !== confirmPassword) {
      setConfirmPasswordError("Passwords not matching.");
      return;
    }
    console.log(newPassword)
    // try {
    //   setBbtnLoading(true);
    //   await forgotPassword(email);
    //   history.push("/auth/login");
    //   showAlert("Recovery link sent to your mail, Please check..", "success");
    // } catch (error) {
    //   showAlert(error.data.message, "error");
    // } finally {
    //   setBbtnLoading(false);
    // }
  };

  return (
    <LandingPage woproducts>
      <ServiceBanner title="Reset Password" regnPage/>
      <section className="regn_form pos-relative">
        <div className="client_regn">
          <h3 className="modal_heading mb-4">
            <span className="primary-color">Hello,</span> Please create a new password.
          </h3>

          <Form>
            <InputField
              id="newPassword"
              type="password"
              label="New Password"
              mendetory
              value={formValue}
              handleChange={(e) => setNewPassword(e.target.value)}
            />
            <InputField
              id="confirmPassword"
              type="password"
              label="Confirm Password"
              mendetory
              value={formValue}
              handleChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              disabled={btnLoading || !buttonEnabled}
              className="primary_bg"
              onClick={resetPassword}
            >
            {btnLoading ? "Resetting...." : "Reset Password"}
          </Button>
          </Form>
        </div>
        <img className="dots_regn1" src="/assets/images/dots.png" />
        <img className="dots_regn2" src="/assets/images/dots.png" />
      </section>
    </LandingPage>
  );
}

export default ResetPassword;
