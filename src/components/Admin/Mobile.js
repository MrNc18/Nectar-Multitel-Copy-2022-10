import React,{useState} from 'react'
import { Button, Modal, Form, Table } from "react-bootstrap";

function Mobile() {
    const [show, setShow] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Data = [
        {
        Brand:"Nokia",
        Name:"lumia 550",
        Type:"smart phone",
        spec:"13px front and rear camera ,800 snapdragaon,12+12 Gb meomory",
        price:"20$"
    },
    {
        Brand:"one plus",
        Name:"9 pro",
        Type:"smart phone",
        spec:"13px front and rear camera ,800 snapdragaon,12+12 Gb meomory",
        price:"20$"
    },
    {
        Brand:"apple",
        Name:"i phone 13 max pro",
        Type:"smart phone",
        spec:"13px front and rear camera ,800 snapdragaon,12+12 Gb meomory",
        price:"20$"
    },
]
  return (
    <div id="layoutSidenavContent">
    <div className="container-fluid">
        <div className='row' style={{justifyContent:"space-between"}}>
      <h3 className="mt-4 mb-4">Mobiles</h3>
      <div className="col-xl-9 col-lg-3 col-md-9 col-sm-9">
            <div className="header justify-content-end">
              <button
                type="button"
                className="btn btn-primary btn-sm my-3"
                style={{ width: "150px", marginRight:"15px" }}
                onClick={handleShow}
              >
                <i className="fas fa-plus-circle"></i> Add New mobile
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title
                    style={{ color: "##0076B5", marginLeft: "25px" }}
                  >
                    Add New Mobile
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="container">
                    <Form.Group>
                      {/* <Form.Label>Id</Form.Label>
                      <Form.Control type="id" value={id} name="id" onChange={handleChange}></Form.Control>  */}
                      <Form.Label>Mobile Name</Form.Label>
                      <Form.Control
                        type="text"
                        //  value={Name}
                        name="serviceName"
                        // onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Type</Form.Label>
                      <Form.Control
                        type="text"
                        //  value={Name}
                        name="serviceName"
                        // onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Mobile Name</Form.Label>
                      <Form.Control
                        type="text"
                        //  value={Name}
                        name="serviceName"
                        // onChange={handleChange}
                      ></Form.Control>

                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="textarea"
                        // value={description}
                        name="description"
                        // onChange={handleChange}
                      ></Form.Control>
                    <Form.Label>Upload</Form.Label>{" "}
                     <Form.Control
                      type="file"
                      id="file"
                      
                    //   onChange={handleFileChange}
                    ></Form.Control>
                  </Form.Group>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    size="lg"
                    // onClick={handleSubmit}
                    style={{ width: "200%" }}
                  >
                    submit
                  </Button>
                 
                  {/* <label style={{ color: "red", justifyContent: "center" }}>
                    {errorMsg}
                  </label> */}
                </Modal.Footer>
              </Modal> 
              </div>
            </div>
          </div>
      <Table striped bordered hover size="md" responsive>
          <thead style={{ backgroundColor: "#0076B5",color:"white" }}>
            <tr>
              <th>Sr.No.</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Name</th>
              <th>Specifications</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Data &&
               Data
            // .slice(
            //     pagesVisited,
            //     pagesVisited + usersPerPage
            //   )
            .map((item, i) => (
                <tr>
                
                  <td>{i+1}</td>
                  <td>{item.Brand}</td>
                  <td>{item.Name}</td>
                  <td>{item.Type}</td>
                  <td>{item.spec}</td>
                  <td>{item.price}</td>
                  
                 
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      </div>


  )
}

export default Mobile