import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import {
  getAllWho_Teli_digi,
  imageUrl,
  getEditMenu,
  getDeleteMenu,
} from "../../services/Phase_2/MenuApi";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export const MenuPhase_2 = () => {
  const data = [
    {
      id: "1",
      Title: "Who we Are",
      image: "/assets/images/manworkingoncomputer.png",
      cover_img: "/assets/images/home-banner.jpg",
      description: "hbhubhbib gbygbyy gbbbb ggbgbgb gugu vygubu gyvggy",
      tags: "",
      heading1: "",
      heading2: "",
      description1: "",
      description2: "",
    },
    {
      id: "2",
      Title: "TeleCommunications",
      image: "/assets/images/phone2.jpg",
      cover_img: "/assets/images/home-banner.jpg",
      description: "hbhubhbib gbygbyy gbbbb ggbgbgb gugu vygubu gyvggy",
      tags: ["gyyvygufvv", "bububib", "ggggbgbh", "gbggggvgv"],
      heading1: "hvhkvvhvh",
      heading2: "hjhhg h hwgvw gvcgdvcjdg ggvgsvv gvgvdgvdg gdgvgv vvgg",
      description1: "hghvgcvvcd gvgvghdvcvsc",
      description2: "gdcvgvhd hc s vd ",
    },
    {
      id: "3",
      Title: "Digitotal",
      image: "/assets/images/phone_recive.png",
      cover_img: "/assets/images/home-banner.jpg",
      description: "hbhubhbib gbygbyy gbbbb ggbgbgb gugu vygubu gyvggy",
      tags: ["gyyvygufvv", "bububib", "ggggbgbh", "gbggggvgv"],
      heading1: "",
      heading2: "",
      description1: "",
      description2: "",
    },
  ];
  const [menu, setMenu] = useState("");
  const [file, setFile] = useState("");
  const [deleteRecord, setDeleteRecord] = useState("");
  const [show, setShow] = useState(false);
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [description, setDescription] = useState("");
  const [DeleteShow, setDeleteShow] = useState(false);
  const [banfile, setBanFile] = useState("");
  const [Image, setImage] = useState("");
  const [data2, setData2] = useState({
    id: "",
    Title: "",
  });
  const { id, Title } = data2;

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
    setFile(event.target.files);
    console.log(file);
  };

  const handleBanFileChange = (event) => {
    setBanFile(event.target.files);
  };

  const handleDeleteshow = (item) => {
    setDeleteShow(true);
    setDeleteRecord(item);
  };
  const handlecloseDelete = () => {
    setDeleteShow(false);
  };

  const getAllMenusData = async () => {
    try {
      const resp = await getAllWho_Teli_digi();
      setMenu(resp.data);
      console.log(resp.data);
    } catch (error) {
      showAlert("something Went Wrong", "error");
    }
  };

  useEffect(() => {
    getAllMenusData();
  }, []);

  //Edit Api
  const handleEditShow = (item) => {
    console.log("items",item)
    setImage(item.image)
    


    setDescription(item.description);
    setData2({
      id: item.id,
      Title: item.title,
    });
    setShowEditModal(true);
  };

  const handleEditData = async () => {
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
      data.append("cover_img", banfile[x]);
    }
    data.append("description", description);
    data.append("name", Title);
    data.append("id", id);

    try {
      await getEditMenu(data);
      showAlert("Category Data Edited Sucessfully", "success");
      setData2(" ");
      setDescription("");
      setFile("");
      setBanFile("");
      setShowEditModal(false);
      getAllMenusData();
    } catch (error) {
      showAlert("Something Went Wrong", "error");
    }
  };

  const handleEditClose = () => {
    setShowEditModal(false);
    setData2(" ");
    setDescription("");
    setFile("");
  };

  //Delete Api

  const handleDeleteMenu = async () => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeleteMenu(data);
      showAlert("Menu Deleted Successfully", "success");
      setDeleteShow(false);
      getAllMenusData();
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
            <h4 className="mt-4 mb-4">Navigation Menu Management</h4>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 text-left">
          <h6>
            <b>Note : </b>Here we can Edit the data on main Pages of Navigation menu.
          </h6>
          <br/>
        </div>
        <div>
          {" "}
          <Table striped bordered hover size="md" responsive>
            <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
              <tr>
                <th>Sr.No.</th>
                <th>Id</th>
                <th>Title</th>
                <th>coverImage</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu &&
                menu.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                      <img
                        src={imageUrl(item.image)}
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td>
                      {/* <a
                        className="nav-link"
                        onClick={() => {
                          handleDeleteshow(item);
                        }}
                      >
                        <i className="fa fa-trash-o" />
                      </a> */}
                      <a
                        style={{ paddingRight: "10px" }}
                        className="nav-link"
                        onClick={() => {
                          handleEditShow(item);
                        }}
                      >
                        <i
                          className="fa fa-edit"
                          style={{ marginLeft: "10px" }}
                        />
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          {/* Delete Modal  */}
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
                onClick={() => handleDeleteMenu(deleteRecord)}
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
                    Edit Menu List
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
                      <Form.Label>Description</Form.Label>
                      {/* <Form.Control
                        type="textarea"
                        value={description}
                        name="description"
                        onChange={handleChange}
                      ></Form.Control> */}
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
