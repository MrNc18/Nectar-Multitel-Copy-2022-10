import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { loginUser } from "../services/authentication";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./atoms/InputField";
import { showAlert } from "../utils/showAlert";
import { setCookie, AUTH_TOKEN } from "../utils/cookie";
import { jobApply } from "../services/Phase_2/WhoWeR";
import { isOnlyTextValid, isValidEmail } from "../utils/validators";

function ApplyJobModal({ show, handleClose, recruitment }) {
  console.log(recruitment);
  const [file, setFile] = useState("");
  const [btnLoading, setBtnLoading] = useState();
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneErr, setPhoneErr] = useState("");

  const [data2, setData2] = useState({
    name: "",
    categoryId: "",
    email: "",
    phone: "",
    household: "",
    message: "",
  });

  const { name, email, phone, household, message, categoryId } = data2;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file);
  };

  const disable =
    !name || !email || !phone || !categoryId || !file || btnLoading;

  const applyJob = async (e) => {
    console.log(data2)
    console.log(file)

    e.preventDefault();
      setEmailError("");
      setNameError("");
      setPhoneErr("");
      let hasError = false;
      if (!isValidEmail(email)) {
        hasError = true;
        setEmailError("Email is not valid.", "error");
      }
      if (!isOnlyTextValid(name)) {
        hasError = true;
        setNameError("Name should contain only alphabets.", "error");
      }
      if (phone.length !== 10) {
        hasError = true;
        setPhoneErr("Phone no. should contain 10 digits.", "error");
      }
  
      if (hasError) return;

    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("file", file[x]);
    }
      data.append("name",name)
      data.append("categoryId",categoryId)
      data.append("email",email)
      data.append("phone",phone)
      data.append("household",household)
      data.append("message",message)
    
    try {
      setBtnLoading(true);
      await jobApply(data);
      // alert("Logged in")
      showAlert("Job application successful.", "success");
      handleClose()
    } catch (error) {
      console.log("erm",error.data.massage)
      showAlert("Something went wrong. Please try again.", "error")
    } finally {
      setBtnLoading(false);
    }
  };

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
          <span className="primary-color">Hello,</span> Please Fill in the
          details below.
        </h3>

        <div className="detail-box">
          <div className="card-body form-custom">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="exampleInputtext" className="mb-1">
                    Name
                  </label>
                  <span style={{ color: "red" }}> * </span>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    name="name"
                    value={name}
                    required
                    onChange={handleChange}
                  />
                  {nameError && <div style={{display: 'block'}} className="invalid-feedback">{nameError}</div>}
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="exampleInputtext" className="mb-1">
                    Email
                  </label>
                  <span style={{ color: "red" }}> * </span>
                  <input
                    type="email"
                    className="form-control"
                    id=""
                    name="email"
                    value={email}
                    required
                    onChange={handleChange}
                  />
                  {emailError && <div style={{display: 'block'}} className="invalid-feedback">{emailError}</div>}
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="exampleInputtext" className="mb-1">
                    Telephone
                  </label>
                  <span style={{ color: "red" }}> * </span>
                  <input
                    className="form-control"
                    type="number"
                    id=""
                    name="phone"
                    value={phone}
                    required
                    onChange={handleChange}
                  />
                  {phoneErr && <div style={{display: 'block'}} className="invalid-feedback">{phoneErr}</div>}
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="exampleInputtext" className="mb-1">
                    Position
                  </label>
                  <span style={{ color: "red" }}> * </span>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    name="categoryId"
                    value={categoryId}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select position
                    </option>
                    {recruitment &&
                      recruitment.map((item) => (
                        <option value={item?.categoryId}>{item?.recruitment_category?.name}</option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="exampleInputtext" className="mb-1">
                    Household
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id=""
                    name="household"
                    value={household}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="exampleInputtext" className="mb-1">
                    Upload CV
                  </label>
                  <span style={{ color: "red" }}> * </span>
                  <input
                    type="file"
                    accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="form-control"
                    id=""
                    name="resume"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="exampleInputtext" className="mb-1">
                    Message
                  </label>

                  <textarea
                    type="text"
                    className="form-control"
                    id=""
                    name="message"
                    value={message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-12 text-center">
                <div className="form-group">
                  <button 
                    className="btn btn-primary btn-lg"
                    disabled={disable}
                    onClick={applyJob}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ApplyJobModal;
