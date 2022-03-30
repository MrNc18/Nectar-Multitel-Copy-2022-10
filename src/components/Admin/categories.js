import React, { useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import data from "../../Data";

function Categories() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [DeleteShow, setDeleteShow] = useState(false);
  const [file, setFile] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [data2, setData2] = useState({
    id: "",
    categoryName: "",
    ProductName: "",
    quantity: "",
    description: "",
  });
  const { id, categoryName, ProductName, quantity, description } = data2;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file);
  };
  const handleDeleteshow = () => {
    setDeleteShow(true);
  };
  const handlecloseDelete = () => {
    setDeleteShow(false);
  };

  const handleDeleteProduct = () => {
    console.log("record Deleted");
    alert("Category Deleted Sucessfully");
    setDeleteShow(false);
  };
  const handleSubmit = () => {
    if (
      id === "" ||
      ProductName === "" ||
      categoryName === "" ||
      description === "" ||
      quantity === "" ||
      file === ""
    ) {
      setErrorMsg("Fill the Mandatory Filelds");
    } else {
      console.log("dataaa", data2, file);
      setShow(false);
    }
  };

  //  edit API
  const handleEditShow = (item) => {
    setData2({
      id: item.id,
      categoryName: item.title,
      ProductName: item.product,
      quantity: item.quantity,
      description: item.description,
    });
    setShowEditModal(true);
  };
  const handleEditProduct = () => {
    console.log(data2);
    setShowEditModal(false);
  };
  const handleEditClose = () => {
    setShowEditModal(false);
  };

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <h3 className="mt-4 mb-4">Categories</h3>
          <div className="col-xl-9 col-lg-3 col-md-9 col-sm-9">
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
                <i className="fas fa-plus-circle"></i> Add New Category
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
                    Add New Category
                  </Modal.Title>
                  <div className="container">
                    <Form.Group>
                      <Form.Label>Category Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={categoryName}
                        name="categoryName"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={description}
                        name="description"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Upload Icon</Form.Label>{" "}
                      <Form.Control
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                      ></Form.Control>
                      <Form.Label>Upload Banner</Form.Label>{" "}
                      <Form.Control
                        type="file"
                        id="banner"
                        onChange={handleFileChange}
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
        </div>
        <Table striped bordered hover size="md" responsive>
          <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
            <tr>
              <th>Sr.No.</th>
              <th>Category</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.categories
                // .slice(
                //     pagesVisited,
                //     pagesVisited + usersPerPage
                //   )
                .map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td>
                      <img src={item.image} style={{ width: "60px" }} />
                    </td>
                    <td>{item.quantity}</td>
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
          <p>Are you sure want to delete this Category?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handlecloseDelete()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDeleteProduct()}>
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
                Edit category List
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <Form.Group>
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={categoryName}
                    name="categoryName"
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={ProductName}
                    name="ProductName"
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={quantity}
                    name="quantity"
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
                    onChange={handleFileChange}
                  ></Form.Control>
                </Form.Group>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                size="lg"
                onClick={handleEditProduct}
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

export default Categories;
