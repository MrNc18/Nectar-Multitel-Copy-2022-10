import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import data from "../../Data";
import {
  getAllCategories,
  getAddCategory,
  getDeleteCategory,
  getEditCategory,
  imageUrl,
} from "../../services/category";
import { showAlert } from "../../utils/showAlert";

function Categories() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState("");
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [buttondisabled, setButtonDisabled] = useState(false);
  const [DeleteShow, setDeleteShow] = useState(false);
  const [file, setFile] = useState("");
  const [banfile, setBanfile] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [categoryList, setcategoryList] = useState("");
  const [tableData, setTableData] = useState("");
  const [Image, setImage] = useState("");
  const [BannerImage, setBannerImage] = useState("");
  const [data2, setData2] = useState({
    id: "",
    name: "",
    description: "",
    slug: "",
  });
  const { id, name, slug, description, link } = data2;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };
  // const handleFileChange = (event) => {
  //   setFile(event.target.files);
  //   console.log(file);
  // };

  const handleFileChange = (event) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("image");
      console.log("output", output);
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    setFile(event.target.files);
    console.log(file);
  };

  const handleBanFileChange = (event) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("image1");
      console.log("output", output);
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    setFile(event.target.files);
    console.log(file);
  };

  // const handleBanFileChange = (event) => {
  //   setBanfile(event.target.files);
  // };
  const handleDeleteshow = (item) => {
    setDeleteShow(true);
    setDeleteRecord(item);
  };
  const handlecloseDelete = () => {
    setDeleteShow(false);
  };

  const handleDeleteProduct = async () => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeleteCategory(data);
      showAlert("Category Deleted Successfully", "success");
      setDeleteShow(false);
      handleAllCategories();
    } catch (error) {
      console.log("error", error);
      showAlert("Something Went Wrong", "error");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
      data.append("banfile", banfile[x]);
      data.append("description", description);
      data.append("name", name);
    }

    if (name === "" || description === "" || file === "") {
      setErrorMsg("Fill the Mandatory Fields");
    } else
      try {
        setButtonDisabled(true);
        await getAddCategory(data);
        showAlert("Added  category.", "success");
        setShow(false);
        setFile("");
        handleAllCategories();
      } catch (error) {
        showAlert(error.data.message, "error");
      } finally {
        setShow(false);
      }
  };

  //  edit API
  const handleEditShow = (item) => {
    console.log("items", item);
    setImage(item.image);
    setBannerImage(item.image);
    setData2({
      id: item.id,
      name: item.name,
      description: item.description,
    });
    setShowEditModal(true);
  };
  const handleEditProduct = async () => {
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
      data.append("banfile", banfile[x]);
    }
    data.append("description", description);
    data.append("name", name);
    data.append("id", id);

    try {
      await getEditCategory(data);
      showAlert("Category Edited Successfully", "success");
      setShowEditModal(false);
      setData2(" ");
      setFile("");
      handleAllCategories();
    } catch (error) {
      showAlert("Something Went Wrong", "error");
    }
  };
  const handleEditClose = () => {
    setShowEditModal(false);
    setData2(" ");
    setFile("");
  };

  //Get All Category Api

  const handleAllCategories = async () => {
    try {
      let tableDataArr = [];
      const resp = await getAllCategories();
      setcategoryList(resp && resp.data);
      console.log("resp", resp);
      resp &&
        resp.data.map((data, i) => {
          const value = {
            id: data.id,
            name: data.name,
            description: data.description,
            file: data.image,
          };
          tableDataArr.push(value);
        });
    } catch (error) {
      console.log("error", error);
      showAlert("something went Wrong", "error");
    }
  };

  useEffect(() => {
    handleAllCategories();
  }, []);

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div class="col-lg-6 col-md-6 text-left">
            <h3 className="mt-4 mb-4">Categories</h3>
          </div>
          <div className="col-lg-6 col-md-6 text-right">
            <div className="header justify-content-end">
              <button
                type="button"
                className="btn btn-primary btn-sm my-3"
                style={{
                  //marginRight: "15px",
                  backgroundColor: "#0076B5",
                  marginTop: "30px !important",
                }}
                onClick={handleShow}
              >
                <i className="fas fa-plus-circle"></i> Add New Category
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
                    Add New Category
                  </Modal.Title>
                  <div className="container">
                    <Form.Group>
                      <Form.Label>Category Name</Form.Label>
                      <span style={{ color: "red" }}> * </span>
                      <Form.Control
                        type="text"
                        value={name}
                        name="name"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Description</Form.Label>
                      <span style={{ color: "red" }}> * </span>
                      <Form.Control
                        type="textarea"
                        value={description}
                        name="description"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Upload Icon</Form.Label>{" "}
                      <span style={{ color: "red" }}> * </span>
                      <div className="form-group text-center img_uploads">
                        <img
                          id="image"
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
                            id="file"
                            type="file"
                            name="file"
                            accept="image/png, image/gif, image/jpeg"
                            onChange={handleFileChange}
                            className="form-control"
                            style={{ display: "none" }}
                          />
                        </label>
                      </div>
                      <Form.Label>Upload Banner</Form.Label>{" "}
                      <div className="form-group text-center img_uploads">
                        <img
                          id="image1"
                          style={{ maxwidth: "100%", borderRadius: "50%", height:"120px" }}
                          src={
                            BannerImage
                              ? `${imageUrl(BannerImage)}`
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
                            id="file"
                            type="file"
                            name="file"
                            accept="image/png, image/gif, image/jpeg"
                            onChange={handleBanFileChange}
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
          <thead  className = "admintable" style={{ backgroundColor: "#0076B5", color: "white" }}>
            <tr>
              <th>Sr.No.</th>
              <th>Id</th>
              <th>Category</th>
              <th>Image</th>
              {/* <th>Quantity</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categoryList &&
              categoryList.map((item, i) => (
                <tr>
                  {console.log("pc", categoryList)}

                  <td>{i + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <img src={imageUrl(item.image)} style={{ width: "60px" }} />
                  </td>
                  {/* <td>{item.quantity}</td> */}
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
          <p>Are you sure want to delete this Category ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handlecloseDelete()}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleDeleteProduct(deleteRecord)}
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
                Edit Category List
              </Modal.Title>
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
              ></button>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <Form.Group>
                  <Form.Label>Category Name</Form.Label>
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
                  <Form.Label>Upload Icon</Form.Label>{" "}
                  <div className="form-group text-center img_uploads">
                    <img
                      id="image"
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
                        id="file"
                        type="file"
                        name="file"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleFileChange}
                        className="form-control"
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                  <Form.Label>Upload Banner</Form.Label>{" "}
                 
                  <div className="form-group text-center img_uploads">
                    <img
                      id="image1"
                      style={{ maxwidth: "100%", borderRadius: "50%", height:"120px" }}
                      src={
                        BannerImage
                          ? `${imageUrl(BannerImage)}`
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
                        id="file1"
                        type="file"
                        name="file"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleBanFileChange}
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
