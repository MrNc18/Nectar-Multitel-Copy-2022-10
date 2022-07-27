import React, { useState } from "react";
import { showAlert } from "../../utils/showAlert";

function RecruitmentForm() {
  const [data2, setData2] = useState({
    name: "",
    email: "",
    city: "",
    subject: "",
    message: "",
  });

  const { name, email, message, city, subject } = data2;
  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
    console.log("target", e.target);
  };

  //   Add API

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="detail-box">
        <div className="card-body form-custom">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <label htmlFor="exampleInputtext" className="mb-1">
                  Full Name
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
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <label htmlFor="exampleInputtext" className="mb-1">
                  Email Address
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
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <label htmlFor="exampleInputtext" className="mb-1">
                  Country/city
                </label>
                <span style={{ color: "red" }}> * </span>
                <input
                  type="email"
                  className="form-control"
                  id=""
                  name="city"
                  value={city}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <label htmlFor="exampleInputtext" className="mb-1">
                  Subject
                </label>
                <span style={{ color: "red" }}> * </span>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="form-group">
                <label htmlFor="exampleInputtext" className="mb-1">
                  Message
                </label>
                <span style={{ color: "red" }}> * </span>
                <textarea
                  type="text"
                  className="form-control"
                  id=""
                  name="message"
                  value={message}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                {" "}
                <button
                  className="btn contactbtn btn-md pull-left"
                  name="submit"
                  type="submit"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  onClick={handleSubmit}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecruitmentForm;
