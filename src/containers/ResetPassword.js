import React, { useState,useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import InputField from "../components/atoms/InputField";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import { useLocation, useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import { isValidEmail } from "../utils/validators";
import { showAlert } from "../utils/showAlert";
import {resetPassword} from "../services/authentication"





function ResetPassword() {

  const [btnLoading, setBtnLoading] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const { state } = useLocation();
  const { email,otp } = state;
  const navigate = useNavigate();
  const [data,setData] = useState({
    password:"",
    confirmPassword:""
  })
  const {password,confirmPassword} = data

  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }
 

  const buttonEnabled = password && confirmPassword;


  const reset = async () => {
    setConfirmPasswordError("");
    if (password == confirmPassword) {
    try {
      setBtnLoading(true);
      await resetPassword({email,otp,password});
      // history.push("/auth/login");
      navigate("/home")
      showAlert("password Changed Successfully.", "success");
      alert("password Changed Successfully.", "success");
    } 
    catch (error) {
      showAlert(error.data.message, "error");
      
    } finally {
      setBtnLoading(false);
    }
  }
  else{
          setBtnLoading(false)
          setConfirmPasswordError ("Password is not matching")
  }
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
          <div className="col-12 col-sm-6 col-md-6 col-lg-12">
              <div className="form-group">
                <label htmlFor="exampleInputtext" className="mb-1">
                  Password
                </label>
                <span style={{ color: "red" }}> * </span>
                <input
                  type="password"
                  className="form-control"
                  id=""
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-12">
              <div className="form-group">
                <label htmlFor="exampleInputtext" className="mb-1">
                Confirm  Password
                </label>
                <span style={{ color: "red" }}> * </span>
                <input
                  type="password"
                  className="form-control"
                  id=""
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
             {confirmPasswordError && <p className="errorText">{confirmPasswordError}</p>}
            <Button
              disabled={btnLoading || !buttonEnabled}
              className="primary_bg"
              onClick={reset}
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
