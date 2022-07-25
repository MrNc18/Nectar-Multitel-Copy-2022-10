import React, { useState, useEffect } from "react";
import { showAlert } from "../../../utils/showAlert";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  getDigiDataBySlug,
  getAddDigi,
  getEditDigiMenu,
  getDeleteDigiMenu,
  getAllDigiMenu,
  imageUrl,
} from "../../../services/Phase_2/Digiapi";
const AdDigi = () => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState("");
  const [buttondisabled, setButtonDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const [DeleteShow, setDeleteShow] = useState("");
  const [deleteRecord, setDeleteRecord] = useState("");
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [file, setfile] = useState("");
  const [description, setDescription] = useState("");
  const [Image, setImage] = useState("");
  const [data2, setData2] = useState({
    id: "",
    name: "",
    description: "",
  });
  const { id, name } = data2;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };

  const handleFileChange = (event) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("image");
      console.log("output", output);
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    setfile(event.target.files);
    console.log(file);
  };

  //Get All

  const handleAllTeleMenus = async () => {
    try {
      const resp = await getAllDigiMenu();
      setData(resp.data);
      console.log("menu", resp.data);
    } catch (error) {
      showAlert("something Went Wrong", "error");
    }
  };

  useEffect(() => {
    handleAllTeleMenus();
  }, []);

  //Add Api

  const handleSubmit = async () => {
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }

    data.append("description", description);
    data.append("name", name);
    data.append("id", id);
    if (name === "" || description === "") {
      setErrorMsg("Fill the Mandatory Fields");
    } else
      try {
        await getAddDigi(data);
        showAlert("TeleCommunication Added Successfully", "success");
        setData2(" ");
        setfile("");
        setDescription("");
        setImage("");
        setShow(false);
        handleAllTeleMenus();
      } catch (error) {
        showAlert("Something Went Wrong", "error");
      }
  };

  //Edit API
  const handleEditShow = (item) => {
    setImage(item.image);
    setDescription(item.description);
    setData2({
      id: item.id,
      name: item.name,
    });
    setShowEditModal(true);
  };

  const handleEditData = async () => {
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }

    data.append("description", description);
    data.append("name", name);
    data.append("id", id);
    try {
      await getEditDigiMenu(data);
      showAlert("TeleCommunication Data Edited Successfully", "success");
      setData2(" ");
      setfile("");
      setImage("");
      setDescription("");
      setShowEditModal(false);
      handleAllTeleMenus();
    } catch (error) {
      showAlert("Something Went Wrong", "error");
    }
  };

  const handleEditClose = () => {
    setData2(" ");
    setfile("");
    setImage("");
    setDescription("");
    setShowEditModal(false);
  };

  //Delete Api

  const handleDeleteshow = (item) => {
    setDeleteShow(true);
    setDeleteRecord(item);
  };
  const handlecloseDelete = () => {
    setDeleteShow(false);
  };

  const handleDeleteTeleMenu = async () => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeleteDigiMenu(data);
      showAlert("TeleCommunication Deleted Successfully", "success");
      setDeleteShow(false);
      handleAllTeleMenus();
    } catch (error) {
      console.log("error", error);
      showAlert("Something Went Wrong", "error");
    }
  };

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div class="col-lg-6 col-md-6 text-left">
            <h3 className="mt-4 mb-4">Digitotal</h3>
          </div>
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
              <i className="fas fa-plus-circle"></i> Add New Digitotal
            </button> */}
            <Modal show={show} onHide={handleClose} className="add_cat_modal">
              <Modal.Body>
                <div className="container">
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      name="name"
                      onChange={handleChange}
                    ></Form.Control>
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
                        style={{ maxwidth: "100%", borderRadius: "50%" }}
                        src={
                          Image
                            ? `${imageUrl(Image)}`
                            : "/assets/images/default_user.png"
                        }
                        className="img-fluid"
                      />
                      <label
                        className=""
                        style={{ marginTop: "10px", cursor: "pointer" }}
                      >
                        <i className="fas fa-camera bg-info p-2 rounded-circle text-white"></i>
                        <br />
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
            DigiTotal.
          </h6>
        </div>
        <div>
          {" "}
          <Table striped bordered hover size="md" responsive>
            <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
              <tr>
                <th>Sr.No.</th>
                <th>Id</th>
                <th>Title</th>
                <th>image</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item?.id}</td>
                    <td>{item?.name}</td>
                    <td>
                      <img
                        src={imageUrl(item?.image)}
                        alt="No Image"
                        style={{ width: "60px" }}
                      />
                    </td>
                    {/* <td>
                    {/* {item.message_tags && Tabletag(item)} */}
                    {/* </td>  */}

                    <td>
                      <center>
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
                          style={{ paddingLeft: "8px" }}
                        >
                          <i
                            className="fa fa-edit"
                            style={{ paddingLeft: "10px" }}
                          />
                        </a>
                      </center>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          {/* // Delete Modal  */}
          <Modal show={DeleteShow} onHide={handlecloseDelete}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "#0076B5" }}>
                Delete Product
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Are you sure want to delete this DigiTotal Category ?</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => handlecloseDelete()}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => handleDeleteTeleMenu(deleteRecord)}
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
                    Edit DigiTotal Data
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
                        value={name}
                        // name="name"
                        onChange={handleChange}
                      ></Form.Control>
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
                          style={{ maxwidth: "100%", borderRadius: "50%" }}
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
                          <br />
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

export default AdDigi;
