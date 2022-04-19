import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Table, Dropdown } from "react-bootstrap";
import "./contacts.css";
import {
  // getAddServiceProducts,
  // getAllServicesProducts,
  // getDeleteServiceProducts,
  // getEditServiceProducts,
  // getAllInternetServices,
  imageUrl,
} from "../../services/category";
import { Link } from "react-router-dom";

function Contacts() {
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // console.log("serviceList", servicesList);
  };
  const [show, setShow] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState("");
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [DeleteShow, setDeleteShow] = useState(false);
  const [file, setFile] = useState("");
  //   const [banfile, setBanfile] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  // const [servicesList, setServicesList] = useState("");
  const [contactList, setContactList] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const toggleOpen = () => setDropdown(!dropdown);

  const [data2, setData2] = useState({
    id: "",
    name: "",
    Phone: "",
    email: "",
    Adress: "",
    category: "",
  });
  const { id, name, Phone, email, Adress, category } = data2;

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
      // await getDeleteServiceProducts(data);
      alert("Promotion Deleted Sucessfully");
      setDeleteShow(false);
      handleAllContactList();
    } catch (error) {
      console.log("error", error);
      alert("Something Went Wrong");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // let ServiceId = ''
    // {servicesList &&
    //     servicesList.map((item) => {
    //     if(item.name === category){
    //         ServiceId = item.id
    //       console.log("item.id",item.id)
    //     }
    //   })
    //   }
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("adress", Adress);
    data.append("name", name);
    data.append("email", email);
    data.append("category", category);
    data.append("phone", Phone);
    // data.append("adress", Adress);

    if (
      name === "" ||
      Adress === "" ||
      email === "" ||
      Phone === "" ||
      category === ""
    ) {
      setErrorMsg("Fill the Mandatory Filelds");
    } else
      try {
        // await getAddServiceProducts(data);
        alert("Added  contacts Succesfully.", "success");
        setErrorMsg("");
        setData2(" ");
        setShow(false);
        handleAllContactList();
      } catch (error) {
        alert(error.data.message, "error");
      } finally {
        setShow(false);
      }
  };

  //  edit API
  const handleEditShow = (item) => {
    setData2({
      // id: item.id,
      // name: item.name,
      // description: item.description,
      // category:item.service.name,
      // price:item.price,
      // SortDescription:item.service.sort_description
    });
    setShowEditModal(true);
  };
  const handleEditContacts = async () => {
    // let EditServiceId = ''
    // {servicesList &&
    //     servicesList.map((item) => {
    //     if(item.name === category){
    //         EditServiceId = item.id
    //       console.log("item.id",item.id)
    //     }
    //   })
    //   }
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("category", category);
    data.append("name", name);
    data.append("phone", Phone);
    data.append("email", email);
    // data.append("serviceId", EditServiceId);
    data.append("adress", Adress);
    data.append("id", id);

    try {
      // await getEditServiceProducts(data);
      alert("Contacts Edited Sucessfully");
      setData2("");
      setFile("");
      setShowEditModal(false);
      handleAllContactList();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };
  const handleEditClose = () => {
    setData2("");
    setShowEditModal(false);
  };

  //Get All Category Api

  const handleAllContactList = async () => {
    try {
      // const resp = await getAllServicesProducts();
      // setProductsList(resp && resp.data);
      // console.log("resp", resp);
    } catch (error) {
      console.log("error", error);
      alert("something went Wrong");
    }
  };

  useEffect(() => {
    handleAllContactList();
  }, []);

  //filter

  const handleclick = () => {
    console.log("filter");
  };

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
                <Dropdown.Item>Ip Telephony</Dropdown.Item>
                <Dropdown.Item>Network equipments</Dropdown.Item>
                <Dropdown.Item>cpe</Dropdown.Item>
                <Dropdown.Item>Telecom</Dropdown.Item>
                <Dropdown.Item>otherproducts</Dropdown.Item>
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
              <i className="fas fa-plus-circle"></i> Add New Contacts
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
                  Add New Contacts
                </Modal.Title>
                <div className="container">
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      name="name"
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      value={Phone}
                      name="Phone"
                      onChange={handleChange}
                    ></Form.Control>
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
        {/* </div> */}
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
            {contactList &&
              contactList.map((item, i) => (
                <tr>
                  {console.log("pc", contactList)}

                  <td>{i + 1}</td>
                  <td>{item.name}</td>
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
      {/* Delete Modal */}

      <Modal show={DeleteShow} onHide={handlecloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#0076B5" }}>Delete Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure want to delete this Promotion ?</p>
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

      {/* Edit Modal */}
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
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    name="name"
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    value={Phone}
                    name="Phone"
                    onChange={handleChange}
                  ></Form.Control>
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
