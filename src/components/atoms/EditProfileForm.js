import React,{useState} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {updateUser} from "../../services/authentication"
import { AUTH_TOKEN, deleteCookie, getCookie } from "../../utils/cookie";
import { getUserDetailsByToken } from "../../services/authentication"

function EditProfileForm() {

  const [userData, setUserData] = useState("");
  const isAuthenticated = getCookie(AUTH_TOKEN);
  // console.log(isAuthenticated);

  const getDataByToken = async () => {
    if (isAuthenticated) {
      const result = await getUserDetailsByToken();
      // console.log(result);
      setUserData(result?.data?.data);
      console.log("huvdugbdugbeu",result?.data?.data)
    }
  };

  React.useEffect(() => {
    getDataByToken();
    setData({
      firstName: userData.first_name,
      lastName: userData.last_name,
      mail:userData.email,
      gender:userData.gendar,
      city:userData.city,
      number:userData.phone,
      dob:userData.dob_date
    });
  }, []);

  const [data, setData] = useState({
    id: "",
    firstName: "",
    lastName:'',
    city:'',
    gender:'',
    number:'',
    mail:'',
    proffesion:'',
    zipcode:'',
    dob:''

  });
  const { id, firstName,lastName,city,gender,number,mail,proffesion,zipcode,dob} = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleEditProfile = async () => {
    const data = {
      // 'id':policyId
      'first_name':firstName,
      'last_name': lastName,
      'email': mail,   
      'gendar':gender,
      'city':city,
      'phone': number,
      'dob_date':dob,

    };
    try {
      const resp = await updateUser(data);
      alert("Profile Updated Sucessfully....")
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
          <div
            class="shadow p-3 mb-5 bg-white rounded"
            style={{ marginTop: "30px" }}
          >
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
                      name="firstname"
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
                  <label for="inputBirthday" class="col-sm-6 col-form-label">
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
                    <select class="custom-select" id="inputGroupSelect01"
                    value={gender}
                    name="gender"
                    onChange={handleChange}>
                      <option selected>Select</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Others</option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputCity" class="col-sm-6 col-form-label">
                    <i class="fa-solid fa-city mr-5"></i>City
                  </label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputCity"  value={city}
                    name="city"
                    onChange={handleChange}/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputNumber" class="col-sm-6 col-form-label">
                    <i class="fa-solid fa-mobile-screen-button mr-5"></i>Mobile
                    Number
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
                    <i class="fa-solid fa-envelope-open mr-5"></i>Mail Address
                  </label>
                  <div class="col-sm-6">
                    <input type="email" class="form-control" id="inputEmail"  value={mail}
                    name="mail"
                    onChange={handleChange}/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputProfession" class="col-sm-6 col-form-label">
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
                    <input type="text" class="form-control" id="inputZipCode"
                     value={zipcode}
                     name="zipcode"
                     onChange={handleChange} />
                  </div>
                </div>
                <div className="d-grid gap-2 mt-5 mb-3">

                  

                  <Button variant="primary" size="lg" style={{width:"100%"}} onClick={()=>handleEditProfile()}>

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
