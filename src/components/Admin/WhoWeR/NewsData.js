import React, { useState, useEffect } from "react";
import {
  getAllNews,
  getAddNews,
  getDeleteNews,
  getEditNews,
  getAllNewsCategories,
  imageUrl,
} from "../../../services/Phase_2/WhoWeR";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { showAlert } from "../../../utils/showAlert";
import moment from "moment"


const NewsData = () => {
  const handleShow = () => setShow(true);
  const [buttondisabled, setButtonDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const [Multi, setMulti] = useState("");
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState("");
  const [categories, setCategories] = useState("");
  const [DeleteShow, setDeleteShow] = useState(false);
  const [Image, setImage] = useState("");
  const handleClose = () => {
    setShow(false);
    setData2("");
  };
  const [errorMsg, setErrorMsg] = useState("");
  const [file, setfile] = useState([]);
  const [data2, setData2] = useState({
    id: "",
    Title: "",
    description: "",
    news_Date: "",
    news_num: "",
    category: "",
  });
  const { id, Title, description, news_Date, news_num, category } = data2;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };

  // const handleFileChange = (e) => {
  //   setfile(e.target.files);
  // };


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

  const handleDeleteData = async () => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      console.log("data", data);
      await getDeleteNews(data);

      showAlert(`${deleteRecord.news_category?.name}  delete successfully`, "success")

      setDeleteShow(false);
      handleAllNews();
    } catch (error) {
      console.log("error", error);
      showAlert("Something Went Wrong", "error");
    }
  };

  const handleEditClose = () => {
    setData2(" ");
    setfile("");
    setShowEditModal(false);
  };

  //Edit API

  const handleEditShow = (item) => {
    console.log("items",item)
    setImage(item.image)

    setData2({
      id: item.id,
      Title: item.title,
      description: item.description,
      sort_description: item.sort_description,
      news_Date: moment(item.news_date).format("YYYY-MM-DD"),
      news_num: item.news_number,
      category: item.news_category.name
    });
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
            console.log("tem.id", categoryId);
          }
        });
    }
    const Date = moment(news_Date).format("YYYY-MM-DD");
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("id", id)
    data.append("description", description);
    data.append("title", Title);
    data.append("news_date", Date);
    data.append("news_number", news_num);
    data.append("categoryId", categoryId);

    try {
      await getEditNews(data);
      showAlert("News Edited Sucessfully", "success");
      setData2(" ");
      setfile("");
      setShowEditModal(false);
      handleAllNews();
    } catch (error) {
      showAlert("Something Went Wrong", "error");
    }
  };

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

    const Date = moment(news_Date).format("YYYY-MM-DD");

    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("description", description);
    data.append("title", Title);
    data.append("news_date", Date);
    data.append("news_number", news_num);
    data.append("categoryId", categoryId);

    if (Title === "" || description === "") {
      setErrorMsg("Fill the Mandatory Fields");
    } else
      try {
        setButtonDisabled(true);
        await getAddNews(data);
        showAlert("Added News Data successfully", "success");
        setData2("");
        setShow(false);
        setButtonDisabled(false);
        handleAllNews();
      } catch (error) {
        showAlert(error.data.message, "error");
      } finally {
        setShow(false);
      }
  };

  // Add Api

  //get Api
  const handleAllNews = async () => {
    try {
      const resp = await getAllNews();
      setMulti(resp && resp.data);
      console.log("multi", resp);
    } catch (error) {
      showAlert("SOmthing went wrong", "error");
    }
  };

  const handleAllNewsCat = async () => {
    try {
      const resp = await getAllNewsCategories();
      setCategories(resp && resp.data);
      console.log("multi", resp);
    } catch (error) {
      showAlert("SOmthing went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllNews();
    handleAllNewsCat();
  }, []);

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div
            class="col-lg-12 col-md-12 text-left"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h3 className="mt-4 mb-4">News</h3>
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
                <i className="fas fa-plus-circle"></i> Add News
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
                    Add News
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
                <th>News Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {console.log(Multi)}
              {Multi &&
                Multi.map((item, i) => (

                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.id ? item.id : ""}</td>
                    <td>{item.title ? item.title : ''}</td>
                    <td>{item.news_category ? item.news_category.name : ''}</td>

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
          <Modal show={DeleteShow} onHide={handlecloseDelete} >
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "#0076B5" }}>
                Delete News
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>

              <p>Are you sure want to delete this {deleteRecord.news_category?.name} ?</p>
              {/* { `are bhfg h hghfhghj${Multi?.news_catyegory?.title }`} */}


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
                    Edit News data
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
                      <Form.Label>Description</Form.Label>
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

export default NewsData;
 