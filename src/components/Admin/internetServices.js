import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import CreateMultiselect from "../atoms/CreateMultiselect";
import {
  getAllInternetServices,
  getAddServices,
  getDeleteServices,
  getEditServices,
  imageUrl,
} from "../../services/category";
import { Link } from "react-router-dom";

function InternetServices() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState("");
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [DeleteShow, setDeleteShow] = useState(false);
  const [file, setFile] = useState("");
  //   const [banfile, setBanfile] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [servicesList, setServicesList] = useState("");

  const [data2, setData2] = useState({
    id: "",
    name: "",
    description: "",
    tag: "",
  });
  const { id, name, tag, description } = data2;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file);
  };
  //   const handleBanFileChange = (event) => {
  //     setBanfile(event.target.files);
  //   };
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
      await getDeleteServices(data);
      alert("Promotion Deleted Sucessfully");
      setDeleteShow(false);
      handleAllServices();
    } catch (error) {
      console.log("error", error);
      alert("Something Went Wrong");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
      data.append("description", description);
      data.append("name", name);
      data.append("tag", tag);
    }

    if (name === "" || description === "" || file === "" || tag === "") {
      setErrorMsg("Fill the Mandatory Filelds");
    } else
      try {
        await getAddServices(data);
        alert("Added  Promotion.", "success");
        setShow(false);
        handleAllServices();
      } catch (error) {
        alert(error.data.message, "error");
      } finally {
        setShow(false);
      }
  };

  //  edit API
  const handleEditShow = (item) => {
    setData2({
      id: item.id,
      name: item.name,
      description: item.description,
      tag: item.tag,
    });
    setShowEditModal(true);
  };
  const handleEditServices = async () => {
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("description", description);
    data.append("name", name);
    data.append("id", id);
    data.append("tag", tag);

    try {
      await getEditServices(data);
      alert("Promotion Edited Sucessfully");
      setShowEditModal(false);
      handleAllServices();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };
  const handleEditClose = () => {
    setShowEditModal(false);
  };

  //Get All Category Api

  const handleAllServices = async () => {
    try {
      let tableDataArr = [];
      const resp = await getAllInternetServices();
      setServicesList(resp && resp.data);
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error);
      alert("something went Wrong");
    }
  };

  useEffect(() => {
    handleAllServices();
  }, []);

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <h3 className="mt-4 mb-4">Internet Services</h3>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div className="header justify-content-end">
              <button
                type="button"
                className="btn btn-primary btn-sm my-3"
                style={{
                  marginRight: "15px",
                  backgroundColor: "#0076B5",
                  marginTop: "30px !important",
                }}
                onClick={handleShow}
              >
                <i className="fas fa-plus-circle"></i> Add New service
              </button>
              <Modal show={show} onHide={handleClose} className="add_cat_modal">
                {/* <Modal.Header closeButton>
                  <Modal.Title style={{ color: "#0076B5", marginLeft: "25px" }}>
                    Add New Category
                  </Modal.Title>
                </Modal.Header> */}

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
                    Add New Service
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
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={description}
                        name="description"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Upload Image</Form.Label>{" "}
                      <Form.Control
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                      ></Form.Control>
                      <Form.Label>Service Category</Form.Label> <br />
                      <Form.Select size="default" style={{height:"35px",color:"grey",borderColor:"beige"}}>
                        <option>     Please select the Category     </option>
                      </Form.Select>
                      <br />
                      <Form.Label>Key (tags)</Form.Label> <CreateMultiselect />
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
        </div>
        <Table striped bordered hover size="md" responsive>
          <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
            <tr>
              <th>Sr.No.</th>
              <th>Id</th>
              <th>Services</th>
              <th>Image</th>
              <th>Tags</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* <tbody>
            {categoryList &&
              categoryList.map((item, i) => (
                <tr>
                  {console.log("pc", categoryList)}

                  <td>{i + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <img
                      src={imageUrl(item.image)}
                      style={{ width: "60px" }}
                    />
                  </td>
                  {/* <td>{item.quantity}</td> */}
          {/* <td>
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
                </tr> */}
          {/* ))}
          </tbody>  */}
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
                Edit Promotion List
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
                  <Form.Label>Upload</Form.Label>{" "}
                  <Form.Control
                    type="file"
                    id="file"
                    // value={file}
                    onChange={handleFileChange}
                  ></Form.Control>
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
