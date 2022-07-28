import React, { useState } from "react";



function RecruitmentForm() {
  const [file, setFile] = useState([]);

  const [data2, setData2] = useState({
    name: "",
    email: "",
    city: "",
    telephone: "",
    household: "",
    message: "",
  });




  const { name, email, telephone, household, message, city } = data2;
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


            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">



              </div>

              <div class="dropdown mb-1">


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
              <div className="form-group">
                {" "}
                <button
                  className="btn  contactbtn btn-lg  pull-left"
                  name="submit"
                  type="submit"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Send Message
                </button>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group"></div>
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
