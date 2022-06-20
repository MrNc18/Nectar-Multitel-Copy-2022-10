import React, { useState,useEffect } from "react";
// import data from "./DummyData";
import { Button, Modal, Form, Table } from "react-bootstrap";
import {
 getAllCor,
 getAllCorCategories,getAddCor,getEditCor,getDeleteCor
} from "../../../services/Phase_2/WhoWeR";
import { showAlert } from "../../../utils/showAlert";

export const CorporateData = () => {
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
  const [data2, setData2] = useState({
    id: "",
    Name: "",
    Designation: "",
    category: "",
  });
  const { id, Name, Designation, category} = data2;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
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
          console.log("tem.id")
        }
      })
      }
   
   const data = { 
   
    "name":Name,
    "corporateId":categoryId,
    "description":Designation,

   }
   
    if (
        Name === "" ||
        Designation === "" 
    ) {
      setErrorMsg("Fill the Mandatory Fields");
    } else
      try {
        setButtonDisabled(true)
        await getAddCor(data);
        showAlert("Added Corporate Bodies successfully", "success");
        setData2('')
        setShow(false);
        setButtonDisabled(false)
        handleAllCorData();
      } catch (error) {
        showAlert(error.data.message, "error");
      } finally {
        setShow(false);
      }
  
  };

  //Edit API

  const handleEditShow = (item) => {
    setData2({
      id: item.id,
      Name: item.Name,
      Designation: item.description,
      category:item.corporate_category.name,
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
      const data = { 
         "id":id,
        "name":Name,
        "corporateId":categoryId,
        "description":Designation,
       }
    try {
      await getEditCor(data);
      showAlert("Coporate Bodies Edited Sucessfully","success");
      setData2(' ')
      setfile("");
      setShowEditModal(false);
      handleAllCorData();
    } catch (error) {
      showAlert("Something Went Wrong","error");
    }
  };


  //Get Api

  const handleAllCorData = async () => {
    try {
      const resp = await getAllCor();
      setData(resp && resp.data);
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error);
      showAlert("something went Wrong", "error");
    }
  };

  const handleAllCorCategory = async () =>{
    try{
      const resp = await getAllCorCategories();
      setCategories(resp && resp.data);
      console.log("cat",resp)
    }
    catch(error){
      showAlert("Something went wrong","error")
    }
  }

  useEffect(() => {
    handleAllCorData();
    handleAllCorCategory();
  }, []);

  //Delete Api

  const handleDeleteData = async() => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeleteCor(data);
      showAlert("Corporate Bodies Data Deleted Successfully","success");
      setDeleteShow(false);
      handleAllCorData();
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
            <h3 className="mt-4 mb-4">Corporate Bodies Data</h3>
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
                      <Form.Label>Name</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="text"
                        value={Name}
                        name="Name"
                        onChange={handleChange}
                      ></Form.Control>
                        <Form.Label>Designation/Composition</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="text"
                        value={Designation}
                        name="Designation"
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
                      </select>
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
                <th>Category</th>
                <th>Name</th>    
                <th>Designation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.id ? item.id :""}</td>
                    <td>{item.corporate_category?item.corporate_category.name:''}</td>
                    <td>{item.Name ? item.Name:""}</td> 
                    <td>{item.description?item.description:''}</td>
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
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={Name}
                        name="Name"
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
                      <Form.Label>Designation</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={Designation}
                        name="Designation"
                        onChange={handleChange}
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
