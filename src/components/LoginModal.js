import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./atoms/InputField";

function LoginModal({ show, handleClose }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const disable = !username || !password;

  const navigate = useNavigate();

  return (
    <Modal show={show} onHide={handleClose} className="login_modal">
      <Modal.Body style={{ padding: "35px 40px" }}>
        <button
          type="button"
          className="close"
          onClick={handleClose}
          style={{ position: "absolute", top: "5px", right: "10px" }}
        >
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
        <h3 className="modal_heading">
          <span className="primary-color">Hello,</span> Please Login Below.
        </h3>

        <Form>
          <InputField
            id="username"
            type="text"
            label="Username"
            mendetory
            value={{ username }}
            handleChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            id="password"
            type="password"
            label="Password"
            mendetory
            value={{ password }}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-group small mb-1">
            <div
              className="custom-control custom-checkbox d-flex align-items-center justify-content-between"
              style={{ paddingLeft: 0 }}
            >
              <InputField type="checkbox" label="Remember me" />

              <a
                onClick={() => navigate("/forgot-password")}
                className="text-primary fw-500"
              >
                Forgot Password
              </a>
            </div>
          </div>

          <div className="form-group small mb-1">
            <div
              className="custom-control custom-checkbox d-flex align-items-center justify-content-between"
              style={{ paddingLeft: 0 }}
            >
              <Button
                variant="primary"
                disabled={disable}
                className="primary_bg"
                onClick={() => console.log(username, password)}
              >
                Login
              </Button>

              <p className="mt-3">
                Don't have an account?&nbsp;
                <Link
                  to="/register"
                  className="text-primary fw-500"
                  style={{ textDecoration: "underline" }}
                >
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
