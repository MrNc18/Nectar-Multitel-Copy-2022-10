import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getAllWho_Teli_digi,imageUrl,getEditMenu,getDeleteMenu } from "../../services/Phase_2/MenuApi"

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
  const [menu,setMenu]= useState('')
  const [file, setFile] = useState("");
  const [deleteRecord, setDeleteRecord] = useState("");
  const [show, setShow] = useState(false);
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [DeleteShow,setDeleteShow] = useState(false)
  const [banfile, setBanFile] = useState("");
  const [data2, setData2] = useState({
    id: "",
    Title: "",
    description: "",
  });
  const { id, Title, description } = data2;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
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

 



  const getAllMenusData = async () =>{
    try{
    const resp = await getAllWho_Teli_digi()
    setMenu(resp.data)
    console.log(resp.data)
  }
  catch(error){
    showAlert("something Went Wrong" , "error")
  }
  }

useEffect(()=>{
  getAllMenusData()
},[])


  //Edit Api 
  const handleEditShow = (item) => {
    setData2({
      id: item.id,
      Title: item.Title,
      description: item.description,

    });
    setShowEditModal(true);
  };

  const handleEditMenu = () =>{
      showAlert("Menu Edited Succesfully","success")
  }

  const handleEditClose = () => {
    setShowEditModal(false);
    setData2(' ')
    setFile('')
  };

  //Delete Api 

  const handleDeleteMenu = async() => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeleteMenu(data);
      showAlert("Menu Deleted Successfully","success");
      setDeleteShow(false);
      getAllMenusData();
    } catch (error) {
      console.log("error", error);
      showAlert("Something Went Wrong","error");
    }
  };

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div class="col-lg-6 col-md-6 text-left">
            <h3 className="mt-4 mb-4">Menu Management</h3>
          </div>  
        </div>
        <div class="col-lg-6 col-md-6 text-left">
            <h6><b>Note : </b>Here We Can Manage the Data on main Pages of Menu.</h6>
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
                      <img src={imageUrl(item.image)} style={{ width: "60px" }} />
                    </td>
                    <td>
                    <a
                        
                        className="nav-link"
                        onClick={() => {
                          handleDeleteshow(item);
                        }}
                      >
                       
                        <i className="fa fa-trash-o" />
                      </a>
                      <a
                      style={{paddingRight:"10px"}}
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
                      <Form.Label>Upload</Form.Label>{" "}
                      <Form.Control
                        type="file"
                        id="file"
                        // value={file}
                        onChange={handleFileChange}
                      ></Form.Control>
                      <Form.Label>Upload Banner</Form.Label>{" "}
                      <Form.Control
                        type="file"
                        id="file"
                        onChange={handleBanFileChange}
                      ></Form.Control>
                    </Form.Group>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleEditMenu}
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
