import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function EditProfileForm() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div
            class="shadow p-3 mb-5 bg-white rounded"
            style={{ marginTop: "-31px" }}
          >
            <Col md={12}>
              <form className="mx-5">
                <div class="row mb-3">
                  <label for="inputName" class="col-sm-6 col-form-label">
                    <i class="fa-solid fa-user mr-5"></i>Full Name
                  </label>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      class="form-control"
                      id="inputFullName"
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
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputGender" class="col-sm-6 col-form-label">
                    <i class="fa-solid fa-mercury mr-5"></i>Gender
                  </label>
                  <div class="col-sm-6">
                    <select class="custom-select" id="inputGroupSelect01">
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
                    <input type="text" class="form-control" id="inputCity" />
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
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail" class="col-sm-6 col-form-label">
                    <i class="fa-solid fa-envelope-open mr-5"></i>Mail Address
                  </label>
                  <div class="col-sm-6">
                    <input type="email" class="form-control" id="inputEmail" />
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
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputZipCode" class="col-sm-6 col-form-label">
                    <i class="fa-brands fa-usps mr-5"></i>Zip Code
                  </label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputZipCode" />
                  </div>
                </div>
                <div className="d-grid gap-2 mt-5 mb-3">
                  <Button variant="primary" size="lg" style={{width:"100%"}}>
                    Update Profile
                  </Button>
                </div>
              </form>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default EditProfileForm;
