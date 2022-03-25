import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputField from "../components/atoms/InputField";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import LoginModal from "../components/LoginModal";
import { isValidEmail } from "../utils/validators";

export const regnFooter = React.createContext()

function ClientRegistration() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [btnLoading, setBbtnLoading] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    const value = {
        name,
        username,
        email,
        password,
        confirmPassword,
        validation: {
          confirmPassword: confirmPasswordError,
          email: emailError,
        },
      };

      const buttonEnabled = name && username && password && email && confirmPassword;

      const signIn = () => {
        setEmailError("");
        setConfirmPasswordError("");
        let hasError = false;
        if (!isValidEmail(email)) {
          hasError = true;
          setEmailError("Email is not valid. Please enter a valid email.");
        }
    
        if (password !== confirmPassword) {
          hasError = true;
          setConfirmPasswordError("Passwords not matching.");
        }
    
        if (hasError) return;
    
        console.log(value)
      };

  return (
      <regnFooter.Provider value={true}>
    <LandingPage>
      <ServiceBanner title="Client Registration" />
      <section className="regn_form pos-relative">
        <div className="client_regn">
          <h3 className="modal_heading mb-4">
            <span className="primary-color">Hello,</span> Please Register Below.
          </h3>

          <Form>
            <InputField
              id="name"
              label="Name"
              mendetory
              value={value}
              handleChange={(e) => setName(e.target.value)}
            />
            <InputField
              id="username"
              label="Username"
              mendetory
              value={value}
              handleChange={(e) => setUsername(e.target.value)}
            />
            <InputField
              id="email"
              type="email"
              label="Email Address"
              mendetory
              value={value}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              id="password"
              type="password"
              label="Password"
              mendetory
              value={value}
              handleChange={(e) => setPassword(e.target.value)}
            />
            <InputField
              id="confirmPassword"
              type="password"
              label="Confirm Password"
              mendetory
              value={value}
              handleChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* <InputField
              type="checkbox"
              label={
                <>
                  By clicking "Register", I agree to the{" "}
                  <a href="#">Terms and Condition</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </>
              }
            /> */}

            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                By clicking "Register", I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
                </label>
                </div>

            <div className="form-group small mb-1 mt-3">
              <div
                className="custom-control custom-checkbox d-flex align-items-center justify-content-between"
                style={{ paddingLeft: 0 }}
              >
                <Button
                  variant="primary"
                  disabled={!buttonEnabled || !checked}
                  onClick={signIn}
                >
                  Register
                </Button>

                <p className="mt-3">
                  Already have an account?&nbsp;
                  <a
                    onClick={() => setShowLoginModal(true)}
                    className="text-primary fw-500"
                    style={{ textDecoration: "underline" }}
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </Form>
        </div>
        <img className="dots_regn1" src="/assets/images/dots.png" />
        <img className="dots_regn2" src="/assets/images/dots.png" />
      </section>
      {showLoginModal && (
        <LoginModal
          show={showLoginModal}
          handleClose = {() => setShowLoginModal(false)}
        />
      )}
    </LandingPage>
    </regnFooter.Provider>
  );
}

export default ClientRegistration;
