import React, { useState,useEffect } from "react";
import { showAlert } from "../../../utils/showAlert";
import { Button, Modal, Form, Table } from "react-bootstrap";
import Creatable from "react-select/creatable";
import {
  getAllMsgMissionSus,getAddMsgMissionSus,getEditMsgMissionSus,getDeleteMsgMissionSus,imageUrl
} from "../../../services/Phase_2/WhoWeR";

const WhoWeR = () => {
 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data,setData] = useState('');
  const [buttondisabled, setButtonDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [file, setfile] = useState("");
  const [tagInputValue, setTagInputValu] = useState("");
  const [tagValue, setTagValue] = useState("");
  const [Image, setImage] = useState("");

  const [data2, setData2] = useState({
    id: "",
    Title: "",
    description: "",
    tags: "",
    sub_heading: "",
    sub_heading_2: "",
    sub_heading_3: "",
    description1: "",
    description2: "",
  });
  const {
    id,
    Title,
    description,
    description1,
    description2,
    sub_heading_2,
    sub_heading_3,
    sub_heading,
  } = data2;

  //   const Tabletag = (item) =>(item.Promotion_tags.map((data) => `${(data.name)}`))

  const Tabletag = (item) => {
    return item.message_tags.map((data) => {
      return (
        <div>
          <p>{data.name}</p>
        </div>
      );
    });
  };

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
    setfile(event.target.files);
    console.log(file);
  };

   //Get All 

   const handleAllData = async () => {
    try {
      const resp = await getAllMsgMissionSus();
      setData(resp && resp.data);
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error);
      showAlert("something went Wrong","error");
    }
  };

  useEffect(() => {
    handleAllData();
  }, []);


  //Edit API
  const handleEditShow = (item) => {
    console.log("items",item)
    setImage(item.image)
    setData2({
      id: item.id,
      Title: item.name,
      description: item.description,
      tags: item.tags, 
      sub_heading: item.sub_heading,
      sub_heading_2: item.sub_heading_2,
      sub_heading_3: item.sub_heading_3,
      description1: item.description_2,
      description2: item.description_3,
    });
    const editdata = item.message_tags.map((tags) => createOption(tags.name));
    console.log("editdata", editdata);
    setTagValue(editdata);
    setShowEditModal(true);
    console.log("item", item);
  };
  const handleEditData = async () => {
    const finalMultiValue =
      tagValue &&
      tagValue.map((data) => {
        return data.value;
      });
    // console.log('finalMultiValue',finalMultiValue)
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
      console.log("file152",file)
    }
    
    data.append("description", description);
    data.append("name", Title);
    data.append("id", id);
    data.append("tag", finalMultiValue);
    data.append("description_2", description1);
    data.append("description_3", description2);
    data.append("sub_heading", sub_heading);
    data.append("sub_heading_2", sub_heading_2);
    data.append("sub_heading_3", sub_heading_3);
    try {
      await getEditMsgMissionSus(data);
      showAlert("Data Edited Sucessfully","success");
      setData2(' ')
      setfile("");
      setTagValue('')
      setShowEditModal(false);
      handleAllData();
    } catch (error) {
      showAlert("Something Went Wrong","error");
    }
  };

  const handleEditClose = () => {
    setData2(" ");
    setfile("");
     setTagValue('')
    setShowEditModal(false);
  };



   //MuiltiSelect Create

   const handleTagChange = (tags, value) => {
    setTagValue(value);
    console.log("tagvalue onchange", value);
  };

  const handleKeyDown = (event) => {
    console.log(tagValue)
    if (!tagInputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setTagValue([...tagValue, createOption(tagInputValue)]);
        setTagInputValu("");
        console.log(tagValue)
        event.preventDefault();
        break;
      default:
        break;
    }
  };
  const createOption = (label) => ({
    label,
    value: label,
  });

  const handleInputChange = (value) => {
    setTagInputValu(value);
    console.log("on inpiutchnage tagvalueI", value);
  };

  //Multi select Create

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div class="col-lg-6 col-md-6 text-left">
            <h3 className="mt-4 mb-4">Who we Are</h3>
            <h6>
            <b>Note : </b>Here we can Edit the data on Pages of Who we are menu.
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
                <th>image</th>
                <th>Tags</th>
                {/* <th>Description</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
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
                ))}
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
                    Edit List
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
                        name="Title"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Heading</Form.Label>
                      <Form.Control
                        type="text"
                        value={sub_heading}
                        name="sub_heading"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Heading1</Form.Label>
                      <Form.Control
                        type="text"
                        value={sub_heading_2}
                        name="sub_heading_2"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Heading2</Form.Label>
                      <Form.Control
                        type="text"
                        value={sub_heading_3}
                        name="sub_heading_3"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={description}
                        name="description"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Description1</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={description1}
                        name="description1"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Description2</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={description2}
                        name="description2"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Upload</Form.Label>{" "}
                      <Form.Label>Upload</Form.Label>{" "}
                      <div className="form-group text-center img_uploads">
                        <img
                          id="proimage"
                          style={{
                            maxwidth: "100%",
                            borderRadius: "50%",
                            height: "120px",
                          }}
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

export default WhoWeR;
