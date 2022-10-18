import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import CreateMultiselect from "../atoms/CreateMultiselect";
import {
  getAddServiceProducts,
  getAllServicesProducts,
  getDeleteServiceProducts,
  getEditServiceProducts,
  getAllInternetServices,
  imageUrl,
} from "../../services/category";
import { showAlert } from "../../utils/showAlert";

function InternetServices() {
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setErrorMsg("");
  };
  const [show, setShow] = useState(false);
  const [buttondisabled, setButtonDisabled] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState("");
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [DeleteShow, setDeleteShow] = useState(false);
  const [file, setFile] = useState("");
  const [Image, setImage] = useState("");
  //   const [banfile, setBanfile] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [servicesList, setServicesList] = useState("");
  const [productsList, setProductsList] = useState("");

  const [data2, setData2] = useState({
    id: "",
    name: "",
    description: "",
    tag: "",
    price: "",
    category: "",
    SortDescription: "",
  });
  const { id, name, tag, description, price, category, SortDescription } =
    data2;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("proimage");
      console.log("output", output);
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
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

  const handleDeleteService = async () => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeleteServiceProducts(data);
      // alert("Service Deleted Successfully");
      showAlert("Service Deleted Successfully", "success");
      setDeleteShow(false);
      handleAllServiceProducts();
    } catch (error) {
      console.log("error", error);
      showAlert("Something Went Wrong", "error");
    }
  };
  const handleSubmit = async (event) => {
    console.log("price", price);
    event.preventDefault();
    let ServiceId = "";
    {
      servicesList &&
        servicesList.map((item) => {
          if (item.name === category) {
            ServiceId = item.id;
            console.log("item.id", item.id);
          }
        });
    }
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("description", description);
    data.append("name", name);
    data.append("price", price);
    data.append("category", category);
    data.append("service_id", ServiceId);
    data.append("SortDescription", SortDescription);

    if (name === "" || price === "" || category === "" || file === "") {
      setErrorMsg("Fill the Mandatory Fields");
    } else if (price < 1 || price % 1 != "0") {
      setErrorMsg("Enter the Valid Price");
    } else {
      try {
        setButtonDisabled(true);
        await getAddServiceProducts(data);
        showAlert("Added  Services Succesfully.", "success");
        setErrorMsg("");
        setData2(" ");
        setButtonDisabled(false);
        setShow(false);
        handleAllServiceProducts();
      } catch (error) {
        showAlert(error.data.message, "error");
        setButtonDisabled(false);
      } finally {
        setShow(false);
      }
    }
  };

  //  edit API
  const handleEditShow = (item) => {
    setImage(item.cover_img);
    console.log("item", item);
    setData2({
      id: item.id,
      name: item.name,
      description: item.description,
      category: item.service.name,
      price: item.price,
      // SortDescription:item.sort_description?item.sort_description:''
    });
    setShowEditModal(true);
  };
  const handleEditServices = async () => {
    let EditServiceId = "";
    {
      servicesList &&
        servicesList.map((item) => {
          if (item.name === category) {
            EditServiceId = item.id;
            console.log("item.id", item.id);
          }
        });
    }
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("description", description);
    data.append("name", name);
    data.append("price", price);
    data.append("category", category);
    data.append("serviceId", EditServiceId);
    data.append("SortDescription", SortDescription);
    data.append("id", id);

    try {
      await getEditServiceProducts(data);
      showAlert("Service Product Edited Successfully", "success");
      setData2("");
      setFile("");
      setShowEditModal(false);
      handleAllServiceProducts();
    } catch (error) {
      showAlert("Something Went Wrong", "error");
    }
  };
  const handleEditClose = () => {
    setData2("");
    setFile("");
    setShowEditModal(false);
  };

  //Get All Category Api

  const handleAllServiceProducts = async () => {
    try {
      const resp = await getAllServicesProducts();
      setProductsList(resp && resp.data);
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error);
      showAlert("something went Wrong");
    }
  };

  useEffect(() => {
    handleAllServiceProducts();
  }, []);

  const handleAllServices = async () => {
    try {
      const resp = await getAllInternetServices();
      setServicesList(resp && resp.data);
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error);
      showAlert("something went Wrong", "error");
    }
  };

  useEffect(() => {
    handleAllServices();
  }, []);

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div class="col-lg-6 col-md-6 text-left">
            <h3 className="mt-4 mb-4">Service Packages</h3>
          </div>
          <div className="col-lg-6 col-md-6 text-right">
            <div className="header justify-content-end">
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
                <i className="fas fa-plus-circle"></i> Add New package
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
                    Add New Package
                  </Modal.Title>
                  <div className="container">
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="text"
                        value={name}
                        name="name"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Description</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="textarea"
                        value={description}
                        name="description"
                        onChange={handleChange}
                      ></Form.Control>
                      {/* <Form.Label>Sort Description</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={SortDescription}
                        name="SortDescription"
                        onChange={handleChange}
                      ></Form.Control> */}
                      <Form.Label>Upload</Form.Label>{" "}
                      <div className="form-group text-center img_uploads">
                        <img
                          id="proimage"
                          style={{ maxwidth: "100%", borderRadius: "50%", height:"120px" }}
                          src={
                            Image
                              ? `${imageUrl(Image)}`
                              : "/assets/images/default_user.png"
                          }
                          className="img-fluid"
                        />
                        <label
                          className=""
                          style={{ marginTop: "15px", cursor: "pointer" }}
                        >
                          <i className="fas fa-camera bg-info p-2 rounded-circle text-white" style={{bottom:"32%"}}></i>
                          <input
                            id="proimage"
                            type="file"
                            name="file"
                            accept="image/png, image/gif, image/jpeg"
                            onChange={handleFileChange}
                            className="form-control"
                            style={{ display: "none" }}
                          />
                        </label>
                      </div>
                      <Form.Label>Service Category</Form.Label>
                      <span style={{ color: "red" }}>*</span> <br />
                      <Form.Select
                        value={category}
                        name="category"
                        onChange={handleChange}
                        size="default"
                        style={{
                          height: "35px",
                          color: "grey",
                          borderColor: "beige",
                        }}
                      >
                        <option> Please select the Category </option>
                        {servicesList &&
                          servicesList.map((item) => (
                            <option value={item.name ? item.name : ""}>
                              {item ? item.name : ""}
                            </option>
                          ))}
                      </Form.Select>
                      <br />
                      <Form.Label>Price</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="number"
                        min="0"
                        value={price}
                        onkeyup="if(this.value<0){this.value= this.value * -1}"
                        placeholder="Price should be min 0"
                        name="price"
                        onChange={handleChange}
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
        </div>
        <Table striped bordered hover size="md" responsive>
          <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productsList &&
              productsList.map((item, i) => (
                <tr>
                  {console.log("pc", productsList)}

                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.service.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <img
                      src={
                        item.cover_img === null
                          ? "/assets/images/broad2.png"
                          : imageUrl(item.cover_img)
                      }
                      style={{ width: "60px" }}
                    />
                  </td>
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
          <Modal.Title style={{ color: "#0076B5" }}>Delete Service</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure want to delete this Service ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handlecloseDelete()}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleDeleteService(deleteRecord)}
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
                Edit Service Package
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <Form.Group>
                  <Form.Label>Services Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    name="name"
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="textarea"
                    value={description}
                    name="description"
                    onChange={handleChange}
                  ></Form.Control>
                  {/* <Form.Label>Sort Description</Form.Label>
                  <Form.Control
                    type="textarea"
                    value={SortDescription}
                    name="SortDescription"
                    onChange={handleChange}
                  ></Form.Control> */}
                  <Form.Label>Service Category</Form.Label> <br />
                  <Form.Select
                    value={category}
                    name="category"
                    onChange={handleChange}
                    size="default"
                    style={{
                      height: "35px",
                      color: "grey",
                      borderColor: "beige",
                    }}
                  >
                    <option> Please select the Category </option>
                    {servicesList &&
                      servicesList.map((item) => (
                        <option value={item.name ? item.name : ""}>
                          {item ? item.name : ""}
                        </option>
                      ))}
                  </Form.Select>
                  <br />
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={price}
                    min="0"
                    onkeyup="if(this.value<0){this.value= this.value * -1}"
                    name="price"
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Label>Upload</Form.Label>{" "}
                  <div className="form-group text-center img_uploads">
                    <img
                      id="proimage"
                      style={{ maxwidth: "100%", borderRadius: "50%", height:"120px" }}
                      src={
                        Image
                          ? `${imageUrl(Image)}`
                          : "/assets/images/default_user.png"
                      }
                      className="img-fluid"
                    />
                    <label
                      className=""
                      style={{ marginTop: "15px", cursor: "pointer" }}
                    >
                      <i className="fas fa-camera bg-info p-2 rounded-circle text-white"></i>
                      <input
                        id="image"
                        type="file"
                        name="file"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleFileChange}
                        className="form-control"
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                </Form.Group>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                size="lg"
                onClick={handleEditServices}
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

export default InternetServices;
