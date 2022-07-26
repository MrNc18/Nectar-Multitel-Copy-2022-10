import React, { useState,useEffect } from "react";
// import data from "./DummyData";
import { Button, Modal, Form, Table } from "react-bootstrap";
import {
  getAllSus,
  getAddSus,
  getEditSus,
  getDeleteSus,
  getAllSusCategories
} from "../../../services/Phase_2/WhoWeR";
import { showAlert } from "../../../utils/showAlert";
import { imageUrl } from "../../../services/category";

export const SusMenuMan = () => {
  const [buttondisabled, setButtonDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState("");
  const [DeleteShow, setDeleteShow] = useState(false);
  const [categories,setCategories] = useState('')
  const [errorMsg, setErrorMsg] = useState("");
  const [file, setfile] = useState("");
  const handleClose = () => {setShow(false);setButtonDisabled(false)}
  const handleShow = () => setShow(true);
  const [Image, setImage] = useState("");
  const [data2, setData2] = useState({
    id: "",
    Title: "",
    description: "",
    category: "",
    sub_heading:'',
  });
  const { id, Title, description, category,sub_heading } = data2;

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

  const handleDeleteshow = (item) => {
    setDeleteShow(true);
    setDeleteRecord(item);
  };
  const handlecloseDelete = () => {
    setDeleteShow(false);
  };

 

  const handleEditClose = () => {
    setData2(" ");
    setfile("");
    setShowEditModal(false);
  };

  // Add API

   //   Add API

   const handleSubmit = async(e) => {
    e.preventDefault();

    let categoryId = ''
    {categories &&
      categories.map((item) => {
        if(item.name === category){
          categoryId = item.id
        }
      })
      }
   
    const data = new FormData();
    // for (var x = 0; x < file.length; x++) {
    //   data.append("image", file[x]);
    // }
    data.append("description", description);
    data.append("title", Title);
    data.append("sustainabilityId", categoryId);
    data.append("sort_description", sub_heading);
    
   
    if (
      Title === "" ||
      description === "" 
    ) {
      setErrorMsg("Fill the Mandatory Fields");
    } else
      try {
        setButtonDisabled(true)
        await getAddSus(data);
        showAlert("Added Sustainabilty Category successfully", "success");
        setData2('')
        setShow(false);
        setButtonDisabled(false)
        handleAllSusData();
      } catch (error) {
        showAlert(error.data.message, "error");
      } finally {
        setShow(false);
      }
  
  };

  //Edit API

  const handleEditShow = (item) => {
    setImage(item.image);
    setData2({
      id: item.id,
      Title: item.title,
      description: item.description,
      category:item.sustainability_category.name,
    });
    setShowEditModal(true);
    console.log("item", item);
  };

  const handleEditData = async () => {
    let categoryId = ''
    {categories &&
      categories.map((item) => {
        if(item.name === category){
          categoryId = item.id
          console.log("tem.id")
        }
      })
      }
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("description", description);
    data.append("title", Title);
    data.append("id",id)
    data.append("sustainabilityId",categoryId)
  

    try {
      await getEditSus(data);
      showAlert("Category Edited Sucessfully","success");
      setData2(' ')
      setfile("");
      setShowEditModal(false);
      handleAllSusData();
    } catch (error) {
      showAlert("Something Went Wrong","error");
    }
  };


  //Get Api

  const handleAllSusData = async () => {
    try {
      const resp = await getAllSus();
      setData(resp && resp.data);
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error);
      showAlert("something went Wrong", "error");
    }
  };

  const handleAllSusCategory = async () =>{
    try{
      const resp = await getAllSusCategories();
      setCategories(resp && resp.data);
      console.log("cat",resp)
    }
    catch(error){
      showAlert("Something went wrong","error")
    }
  }

  useEffect(() => {
    handleAllSusData();
    handleAllSusCategory();
  }, []);

  //Delete Api

  const handleDeleteData = async() => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeleteSus(data);
      showAlert("Sustaiability Data Deleted Successfully","success");
      setDeleteShow(false);
      handleAllSusData();
    } catch (error) {
      console.log("error", error);
      showAlert("Something Went Wrong","error");
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
            <h3 className="mt-4 mb-4">Menu Management</h3>
            <div
              className="header justify-content-end"
              style={{ marginTop: "10px" }}
            >
              <button
                type="button"
                className="btn btn-primary btn-sm my-3"
                style={{
                  marginBottom: "10px",
                  backgroundColor: "#0076B5",
                }}
                onClick={handleShow}
              >
                <i className="fas fa-plus-circle"></i> Add New content
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
                    Add New content
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
                        <Form.Label>SubHeading</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="text"
                        value={sub_heading}
                        name="sub_heading"
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
                        {categories && categories.map((item) =>(
                        <option value={item.name}>{item.name}</option>
                        ))}
                      
                        {/* <option>Key Indicators</option> */}
                      </select>
                      <Form.Label>Description</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="textarea"
                        value={description}
                        name="description"
                        onChange={handleChange}
                      ></Form.Control>
                      {/* <Form.Label>Upload Image</Form.Label>{" "}
                      <Form.Control
                        type="file"
                        id="file"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleFileChange}
                      ></Form.Control> */}
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
        <div>
          {" "}
          <Table striped bordered hover size="md" responsive>
            <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
              <tr>
                <th>Sr.No.</th>
                <th>Id</th>
                <th>Title</th>
                <th>Category</th>
                <th>Sub Heading</th>
                {/* <th>Description</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.id ? item.id :""}</td>
                    <td>{item.title ? item.title:""}</td>
                    <td>{item.sustainability_category?item.sustainability_category.name:''}</td>
                    <td>{item.sort_description?item.sort_description:''}</td>
                    {/* <td>{item.message_tags && Tabletag(item)}</td> */}

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
                    Edit Menu data
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
                        {categories && categories.map((item) => (    
                       <option value={item.name}>{item.name}</option>
                      ))}

                      </select>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={description}
                        name="description"
                        onChange={handleChange}
                      ></Form.Control>
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
