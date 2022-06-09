import React, { useState } from "react";

function RecruitmentForm() {
  const [file, setFile] = useState([]);

  const [data2, setData2] = useState({
    name: "",
    email: "",
    telephone: "",
    household: "",
    message: "",
  });

  const { name, email, telephone, household, message } = data2;
  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
    console.log("target", e.target);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file);
  };

  return (
    <>
      <div className="detail-box">
        <div className="card-body form-custom">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
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
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
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
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <label htmlFor="exampleInputtext" className="mb-1">
                  Telephone
                </label>
                <span style={{ color: "red" }}> * </span>
                <input
                  className="form-control"
                  type="number"
                  min={1}
                  id=""
                  name="telephone"
                  value={telephone}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <label htmlFor="exampleInputtext" className="mb-1">
                  Household
                </label>
                <span style={{ color: "red" }}> * </span>
                <input
                  className="form-control"
                  type="text"
                  id=""
                  name="household"
                  value={household}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="exampleInputtext" className="mb-1">
                  Choose File
                </label>
                <span style={{ color: "red" }}> * </span>
                <input
                  type="file"
                  accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="form-control"
                  required
                  id=""
                  name="resume"
                  onChange={handleFileChange}
                />
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
                />
              </div>
            </div>
            {/*  */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group"></div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <button
                  className="btn btn-primary btn-lg  pull-right"
                  name="submit"
                  type="submit"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Submit
                </button>
              </div>
            </div>

            {/*  */}

            <label
              style={{
                color: "red",
                justifyContent: "center",
                paddingTop: "30px",
              }}
            ></label>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecruitmentForm;
