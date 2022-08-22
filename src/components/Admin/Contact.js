import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Table, Dropdown, Row } from "react-bootstrap";
import Select from "react-select";
import "./contacts.css";
import {
  getAddVendor,
  getEditVendor,
  getDeleteVendor,
  getAllVendors,
  imageUrl,
} from "../../services/category";
import { Link } from "react-router-dom";
import { showAlert } from "../../utils/showAlert";
import ReactPaginate from "react-paginate";
import validator from "validator";

function Contacts() {
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // console.log("serviceList", servicesList);
  };
  const [show, setShow] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState("");
  const [buttondisabled, setButtonDisabled] = useState(false);
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [DeleteShow, setDeleteShow] = useState(false);
  const [file, setFile] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [vendorList, setVendorList] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const toggleOpen = () => setDropdown(!dropdown);

  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(vendorList?.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [data2, setData2] = useState({
    id: "",
    username: "",
    Phone: "",
    email: "",
    Adress: "",
  });
  const { Phone, Adress, username, id } = data2;

  // email validator
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const validateEmail = (e) => {
    var uemail = e.target.value;

    if (validator.isEmail(uemail)) {
      setEmailError("");
      setEmail(uemail);
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  // end

  // only accept alphabet
  const [first_name, setFname] = useState("");
  const onFnameChange = (e) => {
    const { value } = e.target;

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setFname(value);
    }
  };

  const [last_name, setLname] = useState("");
  const onLnameChange = (e) => {
    const { value } = e.target;

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setLname(value);
    }
  };

  // end

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file);
  };

  const handleDeleteshow = (item) => {
    setDeleteShow(true);
    setDeleteRecord(item);
  };
  const handlecloseDelete = () => {
    setDeleteShow(false);
  };

  const handleDeleteContacts = async () => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeleteVendor(data);
      showAlert("Vendor Contact Deleted Successfully", "success");
      setDeleteShow(false);
      handleAllContactList();
    } catch (error) {
      console.log("error", error);
      showAlert("Something Went Wrong", "error");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const finalMultiValue =
      category &&
      category.map((data) => {
        return data.value;
      });
    console.log("AddMultiValue", finalMultiValue);
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("address", Adress);
    data.append("first_name", first_name);
    data.append("last_name", last_name);
    data.append("email", email);
    data.append("category", finalMultiValue);
    data.append("phone", Phone);
    // data.append("gendar", gender);
    data.append("user_name", username);
    // data.append("adress", Adress);

    if (
      first_name === "" ||
      last_name === "" ||
      Adress === "" ||
      email === "" ||
      Phone === "" ||
      category === ""
    ) {
      setErrorMsg("Fill the Mandatory Fields");
    } else if (Phone.length != 10 || Phone < 0) {
      setErrorMsg("Enter the  Valid Phone");
    } else
      try {
        setButtonDisabled(true);
        await getAddVendor(data);
        showAlert("Added contact Succesfully.", "success");
        setErrorMsg("");
        setEmail("");
        setFname('');
        setLname("");
        setData2(" ");
        setCategory(" ");
        setShow(false);
        handleAllContactList();
      } catch (error) {
        showAlert(error.data.message, "error");
      } finally {
        setShow(false);
      }
  };

  //  edit API
  const handleEditShow = (item) => {
    console.log(item, "item");
    const editdata = item.category.split(",");
    const EditCategory = editdata.map((item) => createOption(item));
    // console.log("edit",editdata)
    // console.log("editcat",EditCategory)
    setCategory(EditCategory);
    setData2({
      id: item.id,
      username: item.user_name,
      Phone: item.phone,
      email: item.email,
      Adress: item.address,
      first_name: item.first_name,
      last_name: item.last_name,
    });
    setFname(item.first_name);
    setLname(item.last_name);
    setEmail(item.email);
    setShowEditModal(true);
  };
  const handleEditContacts = async () => {
    console.log("setcat", category);
    const finalMultiValue =
      category &&
      category.map((data) => {
        return data.value;
      });
    console.log("AddMultiValue", finalMultiValue);
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("id", id);
    data.append("address", Adress);
    data.append("first_name", first_name);
    data.append("last_name", last_name);
    data.append("email", email);
    data.append("category", finalMultiValue);
    data.append("phone", Phone);
    // data.append("gendar", gender);
    data.append("user_name", username);
    // data.append("adress", Adress);

    try {
      await getEditVendor(data);
      showAlert("Contact Edited Successfully", "success");
      setData2("");
      setEmail("");
      setFname('');
      setLname("");
      setFile("");
      setCategory("");
      setShowEditModal(false);
      handleAllContactList();
    } catch (error) {
      showAlert("Something Went Wrong", "error");
    }
  };
  const handleEditClose = () => {
    setEmail("");
    setFname('');
    setLname("");
    setData2("");
    setCategory("");
    setShowEditModal(false);
  };

  //Get All Category Api

  const handleAllContactList = async (data) => {
    try {
      const resp = await getAllVendors(data);
      setVendorList(resp && resp.data.data);
      console.log("resp", resp.data.data);
    } catch (error) {
      console.log("error", error);
      showAlert("something went Wrong", "error");
    }
  };

  useEffect(() => {
    handleAllContactList();
  }, []);

  //filter

  const handleClick = async (categories) => {
    console.log("category", categories);
    const data = {
      category: categories,
    };
    try {
      const resp = await getAllVendors(data);
      setVendorList(resp && resp.data.data);
      console.log("resp", resp.data.data);
    } catch (error) {
      console.log("error", error);
      showAlert("something went Wrong", "error");
    }
  };

  const Categoryoptions = [
    { value: "Informatics & Accessories", label: "Informatics & Accessories" },
    { value: "Ip Telephony", label: "Ip Telephony" },
    { value: "Network equipments", label: "Network equipments" },
    { value: "cpe", label: "cpe" },
    { value: "Telecom", label: "Telecom" },
    { value: "Promotions", label: "Promotions" },
    { value: "otherproducts", label: "otherproducts" },
  ];

  const createOption = (label) => ({
    label,
    value: label,
  });

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div class="col-lg-6 col-md-6 text-left">
            <h3 className="mt-4 mb-4">Vendor Contacts</h3>
          </div>
          {/* <div className=
          "header justify-content-end"> */}
          <div className="col-lg-6 col-md-6 text-right">
            <Dropdown
              className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-4 my-2 my-md-0"
              style={{ position: "relative" }}
            >
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ background: "#0076B5", border: "none" }}
              >
                <span className="username">Categories</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleAllContactList()}>
                  All Categories
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleClick("Informatics & Accessories")}
                >
                  Informatics & Accessories
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick("Ip Telephony")}>
                  Ip Telephony
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick("Network Equipment")}>
                  Network equipments
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick("Cpe")}>
                  cpe
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick("Telecom")}>
                  Telecom
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick("Promotions")}>
                  Promotions
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick("otherproducts")}>
                  otherproducts
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <button
              type="button"
              className="btn btn-primary btn-sm my-3"
              style={{
                // marginRight: "15px",
                backgroundColor: "#0076B5",
                marginTop: "30px !important",
              }}
              onClick={handleShow}
            >
              <i className="fas fa-plus-circle"></i> Add New Contact
            </button>
            <Modal show={show} onHide={handleClose} className="add_cat_modal">
              <Modal.Body>
                <button
                  type="button"
                  className="close"
                  onClick={handleClose}
                  style={{ position: "absolute", top: "5px", right: "10px" }}
                >
                  <span aria-hidden="true">×</span>
                  <span className="sr-only">Close</span>
                </button>
                <Modal.Title style={{ color: "#0076B5", marginLeft: "25px" }}>
                  Add New Contact
                </Modal.Title>
                <div className="container">
                  <Form.Group>
                    <Form.Label> First Name</Form.Label>
                    <span style={{ color: "red" }}> * </span>
                    <Form.Control
                      type="text"
                      value={first_name}
                      name="first_name"
                      onChange={onFnameChange}
                      required
                    ></Form.Control>
                    <Form.Label> Last Name</Form.Label>
                    <span style={{ color: "red" }}> * </span>
                    <Form.Control
                      type="text"
                      value={last_name}
                      name="last_name"
                      onChange={onLnameChange}
                      required
                    ></Form.Control>
                    <Form.Label>User Name</Form.Label>
                    <span style={{ color: "red" }}> * </span>
                    <Form.Control
                      type="text"
                      value={username}
                      name="username"
                      onChange={handleChange}
                      required
                    ></Form.Control>
                    <Form.Label>Phone</Form.Label>
                    <span style={{ color: "red" }}> * </span>
                    <Form.Control
                      type="number"
                      value={Phone}
                      name="Phone"
                      min={1}
                      step={1}
                      onChange={handleChange}
                      required
                    ></Form.Control>
                    <Form.Label>Category</Form.Label>
                    <span style={{ color: "red" }}> * </span>
                    <Select
                      isMulti
                      name="category"
                      options={Categoryoptions}
                      // onChange={handleChange}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      value={category}
                      onChange={(value) => {
                        setCategory(value);
                        console.log(value);
                      }}
                      required
                    />
                    <Form.Label>Email</Form.Label>
                    <span style={{ color: "red" }}> * </span>
                    <Form.Control
                      type="text"
                      name="email"
                      onChange={(e) => validateEmail(e)}
                      required
                    ></Form.Control>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      {emailError}
                    </p>
                    <Form.Label>Address</Form.Label>
                    <span style={{ color: "red" }}> * </span>
                    <Form.Control
                      type="textarea"
                      value={Adress}
                      name="Adress"
                      onChange={handleChange}
                      required
                    ></Form.Control>
                  </Form.Group>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="primary"
                  size="lg"
                  disabled={buttondisabled}
                  onClick={handleSubmit}
                  style={{ width: "200%" }}
                >
                  Submit
                </Button>

                <label style={{ color: "red", justifyContent: "center" }}>
                  {errorMsg}
                </label>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        {/* {/ </div> /} */}
        <Table striped bordered hover size="md" responsive>
          <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Category</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vendorList &&
              vendorList
                .slice(pagesVisited, pagesVisited + usersPerPage)
                .map((item, i) => (
                  <tr>
                    {console.log("pc", vendorList)}

                    <td>{i + 1}</td>
                    <td>{`${item.first_name} ${item.last_name}`}</td>
                    <td>{item.category}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        className="nav-link"
                        onClick={() => {
                          handleDeleteshow(item);
                        }}
                      >
                        {" "}
                        <i className="fa fa-trash-o" />
                      </a>
                      <a
                        className="nav-link"
                        onClick={() => {
                          handleEditShow(item);
                        }}
                      >
                        <i className="fa fa-edit" />
                      </a>
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </div>
      <Row>
        <div className="col-md-7"></div>
        <div
          className="col-md-5 product_pagination"
          style={{
            display: "inherit",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <ReactPaginate
            previousLabel={<i class="fa-solid fa-arrow-left fa-lg"></i>}
            nextLabel={<i class="fa-solid fa-arrow-right fa-lg"></i>}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </Row>
      {/* {/ Delete Modal /} */}

      <Modal show={DeleteShow} onHide={handlecloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#0076B5" }}>Delete Contact</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure want to delete this Vendor Contact ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handlecloseDelete()}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleDeleteContacts(deleteRecord)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* {/ Edit Modal /} */}
      <div className="col-xl-5  col-lg-4 col-md-3 col-sm-2">
        <div className="header">
          <Modal show={ShowEditModal} onHide={handleEditClose} size="md">
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "#0076B5", marginLeft: "25px" }}>
                Edit Contacts List
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <Form.Group>
                  <Form.Label> First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={first_name}
                    name="first_name"
                    onChange={onFnameChange}
                  ></Form.Control>
                  <Form.Label> Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={last_name}
                    name="last_name"
                    onChange={onLnameChange}
                  ></Form.Control>
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    name="username"
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    value={Phone}
                    name="Phone"
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Label>Category</Form.Label>
                  <Select
                    isMulti
                    name="category"
                    // defaultValue={edit}
                    options={Categoryoptions}
                    // onChange={handleChange}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    value={category}
                    onChange={(value) => {
                      setCategory(value);
                      console.log(value);
                    }}
                  />
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Label>Adress</Form.Label>
                  <Form.Control
                    type="textarea"
                    value={Adress}
                    name="Adress"
                    onChange={handleChange}
                  ></Form.Control>
                </Form.Group>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                size="lg"
                onClick={handleEditContacts}
                style={{ width: "200%" }}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
