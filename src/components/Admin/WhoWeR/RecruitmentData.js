import React, { useState, useEffect } from "react";
// import data from "./DummyData";
import { Button, Modal, Form, Table } from "react-bootstrap";
import {
  getDeleteCor,
  getAddRec,
  getEditRec,
  getAllRec,
  getAllRecCategories,
} from "../../../services/Phase_2/WhoWeR";
import { showAlert } from "../../../utils/showAlert";
import Creatable from "react-select/creatable";

export const RecruitmentData = () => {
  const [buttondisabled, setButtonDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState("");
  const [DeleteShow, setDeleteShow] = useState(false);
  const [categories, setCategories] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [file, setfile] = useState("");
  const [ReqInptValue, setReqInptValue] = useState("");
  const [ReqValue, setReqValue] = useState("");
  const [jobValue, setJobValue] = useState("");
  const [jobinputValue, setJobInputValue] = useState("");
  const handleClose = () => {
    setShow(false);
    setButtonDisabled(false);
     setReqValue("");
    setJobValue("");
  };
  const handleShow = () => setShow(true);
  const [data2, setData2] = useState({
    id: "",
    Name: "",
    descrption: "",
    category: "",
    Req_heading: "",
    Job_desc_heading: "",
    email:"",
   finalDate:"",
  });
  const { id, Name, descrption, category, Req_heading, Job_desc_heading,finalDate,email } =
    data2;

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
    setReqValue("");
    setJobValue("");
    setShowEditModal(false);
  };

  // Add API

  //   Add API

  const handleSubmit = async (e) => {
    e.preventDefault();

    let categoryId = "";
    {
      categories &&
        categories.map((item) => {
          if (item.name === category) {
            categoryId = item.id;
            console.log("tem.id", categoryId);
          }
        });
    }
    const finalReqValue =
      ReqValue &&
      ReqValue.map((data) => {
        return data.value;
      });

    const finalJobValue =
      jobValue &&
      jobValue.map((data) => {
        return data.value;
      });

    console.log("AddMultiValue", finalReqValue);
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("recruitment_heading", Req_heading);
    data.append("categoryId", categoryId);
    data.append("name", Name);
    data.append("requirement_tag", finalReqValue);
    data.append("description_heading", Job_desc_heading);
    data.append("description_tag", finalJobValue);
    data.append("description", descrption);

    if (
      categoryId === ""
      // Designation === ""
    ) {
      setErrorMsg("Fill the Mandatory Fields");
    } else
      try {
        setButtonDisabled(true);
        await getAddRec(data);
        showAlert("Added Recruitmet Data successfully", "success");
        setData2("");
        setReqValue("");
        setJobValue("");
        setShow(false);
        setButtonDisabled(false);
        handleAllRecData();
      } catch (error) {
        showAlert(error.data.message, "error");
      } finally {
        setShow(false);
      }
  };

  //Edit API

  const handleEditShow = (item) => {
    console.log("item", item);
    setData2({
      id: item.id,
      name: item.name,
      description: item.description,
      Req_heading: item.recruitment_heading,
      Job_desc_heading: item.description_heading,
    });
    const editReqValue = item.recruitment_requirement_tags.map((tags) =>
      createOption(tags.name)
    );
    console.log("editdata", editReqValue);
    setReqValue(editReqValue);
    const editJobValue = item.recruitment_description_tags.map((tags) =>
      createOption(tags.name)
    );
    console.log("editdata", editJobValue);
    setReqValue(editJobValue);
    setShowEditModal(true);
    console.log("item", item);
  };

  const handleEditData = async () => {
    let categoryId = "";
    {
      categories &&
        categories.map((item) => {
          if (item.name === category) {
            categoryId = item.id;
            console.log("tem.id");
          }
        });
    }
    const finalReqValue =
      ReqValue &&
      ReqValue.map((data) => {
        return data.value;
      });

    const finalJobValue =
      jobValue &&
      jobValue.map((data) => {
        return data.value;
      });

    console.log("AddMultiValue", finalReqValue);
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("id", id);
    data.append("categoryId", categoryId);
    data.append("recruitment_heading", Req_heading);
    data.append("name", Name);
    data.append("requirement_tag", finalReqValue);
    data.append("description_heading", Job_desc_heading);
    data.append("description_tag", finalJobValue);
    data.append("description", descrption);

    try {
      await getEditRec(data);
      showAlert("Recruitment Data Edited Sucessfully", "success");
      setData2(" ");
      setfile("");
      setReqValue("");
      setJobValue("");
      setShowEditModal(false);
      handleAllRecData();
    } catch (error) {
      showAlert("Something Went Wrong", "error");
    }
  };

  //Get Api

  const handleAllRecData = async () => {
    try {
      const resp = await getAllRec();
      setData(resp && resp.data);
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error);
      showAlert("something went Wrong", "error");
    }
  };

  const handleAllRecCategory = async () => {
    try {
      const resp = await getAllRecCategories();
      setCategories(resp && resp.data);
      console.log("cat", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllRecData();
    handleAllRecCategory();
  }, []);

  //Delete Api

  const handleDeleteData = async () => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeleteCor(data);
      showAlert("Corporate Bodies Data Deleted Successfully", "success");
      setDeleteShow(false);
      handleAllRecData();
    } catch (error) {
      console.log("error", error);
      showAlert("Something Went Wrong", "error");
    }
  };

  // requiremnts Tags

  //MuiltiSelect Create

  const handleReqChange = (tags, value) => {
    setReqValue(value);
    console.log("tagvalue onchange", value);
  };

  const handleKeyDown = (event) => {
    console.log(ReqValue);
    if (!ReqInptValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setReqValue([...ReqValue, createOption(ReqInptValue)]);
        setReqInptValue("");
        console.log(ReqValue);
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
    setReqInptValue(value);
    console.log("on inpiutchnage tagvalueI", value);
  };

  //Multi select Create

  const handleJobChange = (tags, value) => {
    setJobValue(value);
    console.log("tagvalue onchange", value);
  };

  const handleJobKeyDown = (event) => {
    // console.log(ReqValue)
    if (!jobinputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setJobValue([...jobValue, createOption2(jobinputValue)]);
        setJobInputValue("");
        console.log(jobValue);
        event.preventDefault();
        break;
      default:
        break;
    }
  };
  const createOption2 = (label) => ({
    label,
    value: label,
  });

  const handlejobInputChange = (value) => {
    setJobInputValue(value);
    console.log("on inpiutchnage tagvalueI", value);
  };

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div
            class="col-lg-12 col-md-12 text-left"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h3 className="mt-4 mb-4">Recruitment Jobs Data</h3>
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
                      <Form.Label>Job code</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="text"
                        value={descrption}
                        name="descrption"
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
                        {categories &&
                          categories.map((item) => (
                            <option value={item.name}>{item.name}</option>
                          ))}
                      </select>
                      <Form.Label>Requirment Heading</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="text"
                        value={Req_heading}
                        name="Req_heading"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Requirment (tag)</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Creatable
                        isClearable
                        isMulti
                        components={{ DropdownIndicator: null }}
                        inputValue={ReqInptValue}
                        onChange={(value) => handleReqChange("tags", value)}
                        onInputChange={handleInputChange}
                        placeholder="Please enter the tags and Click Enter"
                        onKeyDown={handleKeyDown}
                        menuIsOpen={false}
                        value={ReqValue}
                      />
                      <Form.Label>Job Description Heading</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="text"
                        value={Job_desc_heading}
                        name="Job_desc_heading"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Requirment (tag)</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Creatable
                        isClearable
                        isMulti
                        components={{ DropdownIndicator: null }}
                        inputValue={jobinputValue}
                        onChange={(value) => handleJobChange("tags", value)}
                        onInputChange={handlejobInputChange}
                        placeholder="Please enter the tags and Click Enter"
                        onKeyDown={handleJobKeyDown}
                        menuIsOpen={false}
                        value={jobValue}
                      />
                      <Form.Label>Company's Email</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="email"
                        value={email}
                        name="email"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Last Date</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="date"
                        value={finalDate}
                        name="finalDate"
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
        <div>
          {" "}
          <Table striped bordered hover size="md" responsive>
            <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
              <tr>
                <th>Sr.No.</th>
                <th>Id</th>
                <th>Category</th>
                <th>descrption</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.id ? item.id : ""}</td>
                    <td>
                      {item.recruitment_category
                        ? item.recruitment_category.name
                        : ""}
                    </td>
                    <td>{item.description ? item.description : ""}</td>
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
                      <Form.Label>Job code</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={descrption}
                        name="descrption"
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
                        {categories &&
                          categories.map((item) => (
                            <option value={item.name}>{item.name}</option>
                          ))}
                      </select>

                      <Form.Label>Requirment Heading</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="text"
                        value={Req_heading}
                        name="Req_heading"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Requirment (tag)</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Creatable
                        isClearable
                        isMulti
                        components={{ DropdownIndicator: null }}
                        inputValue={ReqInptValue}
                        onChange={(value) => handleReqChange("tags", value)}
                        onInputChange={handleInputChange}
                        placeholder="Please enter the tags and Click Enter"
                        onKeyDown={handleKeyDown}
                        menuIsOpen={false}
                        value={ReqValue}
                      />
                      <Form.Label>Job Description Heading</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="text"
                        value={Job_desc_heading}
                        name="Job_desc_heading"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Requirment (tag)</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Creatable
                        isClearable
                        isMulti
                        components={{ DropdownIndicator: null }}
                        inputValue={jobinputValue}
                        onChange={(value) => handleJobChange("tags", value)}
                        onInputChange={handlejobInputChange}
                        placeholder="Please enter the tags and Click Enter"
                        onKeyDown={handleJobKeyDown}
                        menuIsOpen={false}
                        value={jobValue}
                      />
                       <Form.Label>Company's Email</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="email"
                        value={email}
                        name="email"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Last Date</Form.Label>
                      <span style={{ color: "red" }}>*</span>
                      <Form.Control
                        type="date"
                        value={finalDate}
                        name="finalDate"
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
