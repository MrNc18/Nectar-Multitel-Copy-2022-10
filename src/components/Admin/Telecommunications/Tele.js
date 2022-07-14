import React, { useState, useEffect } from "react";
import { showAlert } from "../../../utils/showAlert";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Tele = () => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState("");
  const [buttondisabled, setButtonDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [file, setfile] = useState("");
  const [data2, setData2] = useState({
    id: "",
    name: "",
    description: "",
  });
  const { id, name, description } = data2;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setfile(e.target.files);
  };

  //Get All

  //  const handleAllData = async () => {
  //   try {
  //     const resp = await getAllMsgMissionSus();
  //     setData(resp && resp.data);
  //     console.log("resp", resp);
  //   } catch (error) {
  //     console.log("error", error);
  //     showAlert("something went Wrong","error");
  //   }
  // };

  // useEffect(() => {
  //   handleAllData();
  // }, []);

  //Edit API
  const handleEditShow = (item) => {
    setData2({
      id: item.id,
      Title: item.name,
      description: item.description,
    });
  };

  const handleEditData = async () => {
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
      console.log("file152", file);
    }

    data.append("description", description);
    data.append("name", name);
    data.append("userId", id);
    try {
      // await getEditMsgMissionSus(data);
      showAlert("Data Edited Sucessfully", "success");
      setData2(" ");
      setfile("");
      setShowEditModal(false);
      // handleAllData();
    } catch (error) {
      showAlert("Something Went Wrong", "error");
    }
  };

  const handleEditClose = () => {
    setData2(" ");
    setfile("");
    setShowEditModal(false);
  };

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div class="col-lg-6 col-md-6 text-left">
            <h3 className="mt-4 mb-4">TeleCommunication</h3>
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
                <th>image</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {/* {data &&
                data.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <img src={imageUrl(item.image)} alt="No Image"  style={{ width: "60px" }} />
                    </td>
                    <td>
                    {item.message_tags && Tabletag(item)}
                    </td>

                    <td>
                      <a
                        className="nav-link"
                        onClick={() => {
                          handleEditShow(item);
                        }}
                      >
                        <i
                          className="fa fa-edit"
                          style={{ paddingLeft: "10px" }}
                        />
                      </a>
                    </td>
                  </tr>
                ))} */}
            </tbody>
          </Table>
          {/* Delete Modal */}
          {/* <Modal show={DeleteShow} onHide={handlecloseDelete}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "#0076B5" }}>
              Delete Product
            </Modal.Title>
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
        </Modal> */}
          {/* Edit Modal */}
          <div className="col-xl-5  col-lg-4 col-md-3 col-sm-2">
            <div className="header">
              <Modal show={ShowEditModal} onHide={handleEditClose} size="md">
                <Modal.Header closeButton>
                  <Modal.Title style={{ color: "#0076B5", marginLeft: "25px" }}>
                    Edit Data
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
                        name="name"
                        onChange={handleChange}
                      ></Form.Control>
                      <CKEditor
                        editor={ClassicEditor}
                        id="description"
                        value={description}
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor);
                        }}
                        // onChange={(event, editor) => {
                        //   const data = editor.getData();
                        //   onChange(data);
                        // }}
                      />
                      <Form.Label>Upload</Form.Label>{" "}
                      <Form.Control
                        className="form-control"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/png, image/jpeg"
                        onChange={handleFileChange}
                      ></Form.Control>
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

export default Tele;
