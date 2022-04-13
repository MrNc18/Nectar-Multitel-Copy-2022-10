import React,{useState,useEffect} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { updateUser } from "../../services/authentication";
import { AUTH_TOKEN, deleteCookie, getCookie } from "../../utils/cookie";
import { getUserDetailsByToken } from "../../services/authentication";
import { baseurl } from "../../utils/request";
import {imageUrl} from "../../services/category"
import moment from "moment";

function EditProfileForm() {
  const [userData, setUserData] = useState({});
  const isAuthenticated = getCookie(AUTH_TOKEN);
  const[file,setFile] = useState('')
  // console.log(isAuthenticated);
  const [data, setData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    city: "",
    gender: "",
    number: "",
    mail: "",
    proffesion: "",
    zipcode: "",
    dob: "",
    // profile_img: "",
  });

 

  const getDataByToken = async () => {
    if (isAuthenticated) {
      const result = await getUserDetailsByToken();
      // console.log(result);
      setUserData({ ...userData, ...result?.data?.data });
      console.log("huvdugbdugbeu", result?.data?.data);
    }
  };

  useEffect(() => {
    getDataByToken();
    console.log(userData);
  }, []);

  React.useEffect(() => {
    setData({
      ...data,
      userId: userData?.userId,
      firstName: userData?.first_name,
      lastName: userData?.last_name,
      mail: userData?.email,
      gender: userData?.gendar,
      city: userData?.city,
      number: userData?.phone,
      dob: moment(userData?.dob_date).format("YYYY-MM-DD"),
      proffesion: userData?.proffesion,
      zipcode: userData?.zipcode,
      // profile_img: userData?.profile_img,
    });
  }, [userData]);

  const {
    userId,
    firstName,
    lastName,
    city,
    gender,
    number,
    mail,
    proffesion,
    zipcode,
    dob,
    // profile_img,
  } = data;
  // console.log(userData)
  // console.log(data)
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('profile');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    setFile(event.target.files);
    console.log(file);
  };


  const handleEditProfile = async () => {
   
      const data = new FormData();
        for (var x = 0; x < file.length; x++) {
          data.append("image", file[x]);
        }
      data.append('userId', userId);
      data.append('first_name', firstName);
      data.append('last_name', lastName);
       data.append('email', mail);
       data.append('gendar', gender);
       data.append('city', city);
       data.append('phone', number);
       data.append('dob_date', dob);
       data.append('proffesion',proffesion);
       data.append('zipcode',zipcode);
      
    try {
       await updateUser(data);
      alert("Profile Updated Sucessfully....");
    } catch (error) {
      console.log("error", error);
      // showAlert('In valide data', "error");
    }
  };

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <Container>
          <Row>
            <Col md={12}>
              <p className="text-right">Profile {">"} Edit Profile</p>
            </Col>
          </Row>
          <Row style={{justifyContent:"center"}}>
            <Col md={4}>
              <div className="form-group text-center img_upload">
                <img id='profile' style={{maxwidth:'100%',borderRadius:"50%"}}
                  src={
                    userData.profile_img
                      ? `${baseurl}/images/${userData.profile_img}`
                      : "/assets/images/userimg.png"

                  }
                  className="img-fluid"
                />
                <label
                  className=""
                  style={{ marginTop: "-15px", cursor: "pointer" }}
                >
                  <i className="fas fa-camera bg-info p-2 rounded-circle text-white"></i>
                  <br />
                  <input
                   id="file"
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    className="form-control"
                    style={{ display: "none" }}
                  />
                </label>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div
                class="p-3 mb-5 bg-white rounded"
                style={{ marginTop: "30px" }}
              >
                <h5>Personal Details</h5>
                <Col md={12}>
                  <form className="mx-5">
                    <div class="row mb-3">
                      <label for="inputName" class="col-sm-6 col-form-label">
                        <i class="fa-solid fa-user mr-5"></i>First Name
                      </label>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          id="inputFullName"
                          name="firstName"
                          value={firstName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label for="inputName" class="col-sm-6 col-form-label">
                        <i class="fa-solid fa-user mr-5"></i>Last Name
                      </label>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          id="inputFullName"
                          name="lastName"
                          value={lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label
                        for="inputBirthday"
                        class="col-sm-6 col-form-label"
                      >
                        <i class="fa-solid fa-cake-candles mr-5"></i>Birthday
                      </label>
                      <div class="col-sm-6">
                        <input
                          type="date"
                          class="form-control"
                          id="inputBirthday"
                          name="dob"
                          value={dob}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label for="inputGender" class="col-sm-6 col-form-label">
                        <i class="fa-solid fa-mercury mr-5"></i>Gender
                      </label>
                      <div class="col-sm-6">
                        <select
                          class="custom-select"
                          id="inputGroupSelect01"
                          value={gender}
                          name="gender"
                          onChange={handleChange}
                        >
                          <option selected>Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label for="inputCity" class="col-sm-6 col-form-label">
                        <i class="fa-solid fa-city mr-5"></i>City
                      </label>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          id="inputCity"
                          value={city}
                          name="city"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label for="inputNumber" class="col-sm-6 col-form-label">
                        <i class="fa-solid fa-mobile-screen-button mr-5"></i>
                        Mobile Number
                      </label>
                      <div class="col-sm-6">
                        <input
                          type="number"
                          class="form-control"
                          id="inputNumber"
                          value={number}
                          name="number"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label for="inputEmail" class="col-sm-6 col-form-label">
                        <i class="fa-solid fa-envelope-open mr-5"></i>Mail
                        Address
                      </label>
                      <div class="col-sm-6">
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail"
                          value={mail}
                          name="mail"
                          disabled
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label
                        for="inputProfession"
                        class="col-sm-6 col-form-label"
                      >
                        <i class="fa-solid fa-user-tie mr-5"></i>Profession
                      </label>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          id="inputProfession"
                          value={proffesion}
                          name="proffesion"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label for="inputZipCode" class="col-sm-6 col-form-label">
                        <i class="fa-brands fa-usps mr-5"></i>Zip Code
                      </label>
                      <div class="col-sm-6">
                        <input
                          type="number"
                          class="form-control"
                          id="inputZipCode"
                          value={zipcode}
                          name="zipcode"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="d-grid gap-2 mt-5 mb-3">
                      <Button
                        variant="primary"
                        size="lg"
                        style={{ width: "100%" }}
                        onClick={() => handleEditProfile()}
                      >
                        Update Profile
                      </Button>
                    </div>
                  </form>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default EditProfileForm;
