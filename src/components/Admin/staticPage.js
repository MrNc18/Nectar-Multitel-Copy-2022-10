import React,{useState} from 'react'
import { Button, Modal, Form, Table } from "react-bootstrap";
import data from "../../Data"

function Staticpage() {
  const[show,setShow]=useState(false)
  const[DeleteShow,setDeleteShow]=useState(false)
  const [ShowEditModal, setShowEditModal] = useState(false);
  const[errorMsg,setErrorMsg]=useState('')
  const[file,setFile]=useState('')
  const[data2,setData2]=useState({
    id:'',
    Title:'',
    subheading:'',
    link:'',
    description:''
  })
  
  const{id,Title,subheading,link,description}=data2

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file);
  };

  const handleDeleteshow = () =>{
    setDeleteShow(true)
  }
  const handlecloseDelete = () =>{
    setDeleteShow(false)
  }
  const handleClose = () => setShow(false);

  const handleDeleteProduct = () =>{
    console.log("record Deleted")
    alert("Category Deleted Sucessfully")
    setDeleteShow(false)
  }

  const handleSubmit = () =>{
    if(
   id === "" ||
   Title === "" ||
   subheading === "" ||
   description === "" ||
   link=== "" ||
   file=== ""
   )
   {
     setErrorMsg("Fill the Mandatory Filelds")
   }
   else{
     console.log("dataaa",data2,file)
     setShow(false)
   }
  }

  //  edit API
  const handleEditShow = (item) => {
    setData2({
      id: item?.id,
      Title: item?.title,
      subheading: item?.subheading,
      link: item?.link,
      description: item?.description
    });
    setShowEditModal(true);
  };

  const handleEditContent = async () => {
    console.log("content edited")
    // const data = new FormData();
    // for (var x = 0; x < file.length; x++) {
    //   data.append("image", file[x]);
    //   data.append("banfile", banfile[x]);
    // }
    //   data.append("description", description);
    //   data.append("name", name);
    //   data.append("id", id);
    
   
    // try {
    //   await getEditCategory(data);
    //   alert("Category Edited Sucessfully");
    //   setShowEditModal(false);
    //   handleAllCategories();
    // } catch (error) {
    //   alert("Something Went Wrong");
    // }
  };
  const handleEditClose = () => {
    setShowEditModal(false);
  };

  return (
    <div id="layoutSidenavContent">
    <div className="container-fluid">
        <div className='row' style={{justifyContent:"space-between"}}>
      <h3 className="mt-4 mb-4">Content Management</h3>
      <div className="col-xl-9 col-lg-3 col-md-9 col-sm-9">
            <div className="header justify-content-end">
              <button
                type="button"
                className="btn btn-primary btn-sm my-3"
                style={{ width: "150px", marginRight:"15px",backgroundColor:"#0076B5" }}
                onClick={()=>{setShow(true)}}
              >
                <i className="fas fa-plus-circle"></i> Add New Content
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title
                    style={{ color: "#0076B5", marginLeft: "25px" }}
                  >
                    Add New Content
                  </Modal.Title>
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
                      <Form.Label>SubHeading</Form.Label>
                      <Form.Control
                        type="text"
                         value={subheading}
                        name="subheading"
                       onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Link</Form.Label>
                      <Form.Control
                        type="text"
                        value={link}
                        name="link"
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
                      
                      onChange={handleFileChange}
                    ></Form.Control>
                  </Form.Group>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    size="lg"
                     onClick={handleSubmit}
                    style={{ width: "200%" }}
                  >
                    submit
                  </Button>
                 
                  <label style={{ color: "red", justifyContent: "center" }}>
                    {errorMsg}
                  </label>
                </Modal.Footer>
              </Modal> 
              </div>
            </div>
          </div>
      <Table striped bordered hover size="md" responsive>
          <thead style={{ backgroundColor: "#0076B5",color:"white" }}>
            <tr>
              <th>Sr.No.</th>
              <th>Title</th>
              <th>Image</th>
              <th>Subheading</th>
              <th>Description</th>
              <th>link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
               data.static
            // .slice(
            //     pagesVisited,
            //     pagesVisited + usersPerPage
            //   )
            .map((item, i) => (
                <tr>
                
                  <td>{i+1}</td>
                  <td>{item.title}</td>
                  <td><img src={item.image} style={{width:"60px"}}/></td>
                  <td>{item.subheading}</td>
                  <td>{item.description}</td>
                  <td>{item.link}</td>
                  <td>
                      <a className="nav-link"
                      onClick={()=>{handleDeleteshow(item)}}>
                        {" "}
                        <i className="fa fa-trash-o" />
                      </a>
                      <a className="nav-link"
                       onClick={() =>{handleEditShow(item)}}
                       >
                        <i className="fa fa-edit" />
                      </a>
                    </td>
              
                  
                 
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
        {/* Delete Modal */}

        <Modal show={DeleteShow} onHide={handlecloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#0076B5"}}>Delete Content</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure want to delete this Content?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handlecloseDelete()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDeleteProduct()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={ShowEditModal} onHide={handleEditClose}>
          <Modal.Header closeButton>
            <Modal.Title
              style={{ color: "#0076B5", marginLeft: "25px" }}
            >
              Edit Content
            </Modal.Title>
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
                <Form.Label>SubHeading</Form.Label>
                <Form.Control
                  type="text"
                    value={subheading}
                  name="subheading"
                  onChange={handleChange}
                ></Form.Control>
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  value={link}
                  name="link"
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
                
                onChange={handleFileChange}
              ></Form.Control>
            </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              size="lg"
                onClick={handleEditContent}
              style={{ width: "200%" }}
            >
              submit
            </Button>
            
            <label style={{ color: "red", justifyContent: "center" }}>
              {errorMsg}
            </label>
          </Modal.Footer>
        </Modal> 
      </div>
  )
}

export default Staticpage