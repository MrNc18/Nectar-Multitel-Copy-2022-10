import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { showAlert } from "../../../utils/showAlert";
import {
  getTeleByCat,
  getDeleteTele,
  getEditTele,
  getAddTele,
  getAllTele,
  getAllTeleMenus,
  imageUrl,
} from "../../../services/Phase_2/TeeleComm";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const ADPrivateNetwork = () => {
  const [buttondisabled, setButtonDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const [Image, setImage] = useState("");
  const [data, setData] = useState(false);
  const [teleMenu, setTeleMenu] = useState("");
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState("");
  const [DeleteShow, setDeleteShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [file, setfile] = useState("");
  const [description, setDescription] = useState("");
  const handleClose = () => {
    setShow(false);
    setButtonDisabled(false);
  };
  const handleShow = () => setShow(true);
  const [data2, setData2] = useState({
    id: "",
    Title: "",
    category: "",
  });
  const { id, Title, category } = data2;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };

  // const handleFileChange = (event) => {
  //   let files = event.target.files;
  //   let reader = new FileReader();
  //   reader.readAsDataURL(files[0]);

  //   reader.onload = (e) => {
  //     var output = document.getElementById("image");
  //     console.log("output", output);
  //     output.src = reader.result;
  //     setfile(e.target.result);
  //   };
  // };

  const handleFileChange = (event) => {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('image');
      console.log("output",output)
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    setfile(event.target.files);
    console.log(file);
  };

  const handleDeleteshow = (item) => {
    setDeleteShow(true);
    setDeleteRecord(item);
  };
  const handlecloseDelete = () => {
    setDeleteShow(false);
  };

  const handleEditClose = () => {
    setData2("");
    setDescription("");
    setfile("");
    setShowEditModal(false);
  };

  //   Add API

  const handleSubmit = async (e) => {
    e.preventDefault();

    let teleMenuId = "";
    {
      teleMenu &&
        teleMenu.map((item) => {
          if (item.name === category) {
            teleMenuId = item.id;
          }
        });
    }

    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("description", description);
    data.append("name", Title);
    data.append("category_id", teleMenuId);

    if (Title === "" || description === "" || category === "") {
      setErrorMsg("Fill the Mandatory Fields");
    } else
      try {
        setButtonDisabled(true);
        await getAddTele(data);
        showAlert("Added Network successfully", "success");
        setData2("");
        setDescription("");
        setShow(false);
        setButtonDisabled(false);
        handleAllTeleData();
      } catch (error) {
        showAlert(error.data.message, "error");
      } finally {
        setShow(false);
      }
  };

  //Edit API

  const handleEditShow = (item) => {
    setImage(item.image);
    setDescription(item.description);
    setData2({
      id: item.id,
      Title: item.name,
      category: item.telecommunication_submenu.name,
    });
    setShowEditModal(true);
    console.log("item", item, description);
  };

  const handleEditData = async () => {
    let teleMenuId = "";
    {
      teleMenu &&
        teleMenu.map((item) => {
          if (item.name === category) {
            teleMenuId = item.id;
          }
        });
    }
    console.log("file",file.length)

    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x])
    }
    data.append("description", description);
    data.append("name", Title);
    data.append("id", id);
    data.append("category_id", teleMenuId);

    try {
      await getEditTele(data);
      showAlert("Network Edited Sucessfully", "success");
      setData2(" ");
      setDescription("");
      setfile("");
      setShowEditModal(false);
      handleAllTeleData();
    } catch (error) {
      showAlert("Something Went Wrong", "error");
    }
  };

  //Get Api

  const handleAllTeleData = async () => {
    try {
      const resp = await getAllTele(data);
      setData(resp && resp.data);
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error);
      showAlert("something went Wrong", "error");
    }
  };

  const handleTeleCat = async () => {
    try {
      const resp = await getAllTeleMenus();
      setTeleMenu(resp.data);
      console.log("menu", resp.data);
    } catch (error) {
      showAlert("something Went Wrong", "error");
    }
  };

  useEffect(() => {
    handleAllTeleData();
    handleTeleCat();
  }, []);

  //Delete Api

  const handleDeleteData = async () => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeleteTele(data);
      showAlert("Network Deleted Successfully", "success");
      setDeleteShow(false);
      handleAllTeleData();
    } catch (error) {
      console.log("error", error);
      showAlert("Something Went Wrong", "error");
    }
  };

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div
            class="col-lg-12 col-md-12 text-left"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h3 className="mt-4 mb-4">TeleCommunication Management</h3>
            <div
              className="header justify-content-end"
              style={{ marginTop: "10px" }}
            >
              {/* <button
                type="button"
                className="btn btn-primary btn-sm my-3"
                style={{
                  marginBottom: "10px",
                  backgroundColor: "#0076B5",
                }}
                onClick={handleShow}
              >
                <i className="fas fa-plus-circle"></i> Add New Network
              </button> */}
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
                    Add New Network
                  </Modal.Title>
                  <div className="container">
                    <Form.Group>
                      <Form.Label>Title</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="text"
                        value={Title}
                        name="Title"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>category</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        value={category}
                        name="category"
                        onChange={handleChange}
                      >
                        <option value="" disabled="disabled">
                          Select Option
                        </option>
                        {teleMenu &&
                          teleMenu.map((item) => (
                            <option value={item.name}>{item.name}</option>
                          ))}
                      </select>
                      <Form.Label>Description</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <CKEditor
                        editor={ClassicEditor}
                        id="description"
                        data={description}
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log("description", data);
                          setDescription(data);
                        }}
                      />
                      <Form.Label>Upload Image</Form.Label>{" "}
                      <Form.Control
                        type="file"
                        id="file"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleFileChange}
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
          <div style={{ paddingLeft: "15px", paddingBottom: "10px" }}>
            <h6>
              <b>Note: </b>Here we Can manage all Internal data related to the
              TeleCommunication Categories
            </h6>
          </div>
        </div>
        <div>
          {" "}
          <Table striped bordered hover size="md" responsive>
            <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
              <tr>
                <th>Sr.No.</th>
                <th>Id</th>
                <th>Title</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.id ? item.id : ""}</td>
                    <td>{item.name ? item.name : ""}</td>
                    <td>{item?.telecommunication_submenu?.name}</td>
                    <td>
                      {/* <a
                        className="nav-link"
                        onClick={() => {
                          handleDeleteshow(item);
                        }}
                      > */}
                        {/* {" "}
                        <i className="fa fa-trash-o" />
                      </a> */}
                      <a
                        className="nav-link"
                        onClick={() => {
                          handleEditShow(item);
                        }}
                      >
                        <i
                          className="fa fa-edit"
                          style={{ paddingLeft: "0px" }}
                        />
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          {/* Delete Modal */}
          <Modal show={DeleteShow} onHide={handlecloseDelete}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "#0076B5" }}>
                Delete Network
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Are you sure want to delete this Network ?</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => handlecloseDelete()}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => handleDeleteData(deleteRecord)}
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
                    Edit Network
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
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={Title}
                        // name="Title"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>category</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        value={category}
                        name="category"
                        onChange={handleChange}>
                        <option value={category} disabled ="disabled">{category}</option>
                      
                        {/* <option value="" disabled="disabled">
                          Select Option
                        </option>
                        {teleMenu &&
                          teleMenu.map((item) => (
                            <option value={item.name}>{item.name}</option>
                          ))} */}
                      </select>
                      <Form.Label>Description</Form.Label>
                      <CKEditor
                        editor={ClassicEditor}
                        id="description"
                        data={description}
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setDescription(data);
                          // onChange(data);
                        }}
                      />
                      <Form.Label>Upload</Form.Label>{" "}
                      <div className="form-group text-center img_uploads">
                        <img
                          id="image"
                          style={{ maxwidth: "100%", borderRadius: "50%", height:"120px" }}
                          src={
                            Image
                              ? `${imageUrl(Image)}`
                              :"/assets/images/default_user.png"
                          }
                          className="img-fluid"
                        />
                        <label
                          className=""
                          style={{ marginTop: "15px", cursor: "pointer" }}
                        >
                          <i className="fas fa-camera bg-info p-2 rounded-circle text-white" style={{bottom:"1%"}}></i>
                          {/* <br /> */}
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
                    </Form.Group>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleEditData}
                    style={{ width: "200%" }}
                  >
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ADPrivateNetwork;
