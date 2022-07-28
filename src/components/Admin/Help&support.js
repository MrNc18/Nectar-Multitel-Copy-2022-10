import React, { useState, useEffect } from "react";
import { showAlert } from "../../utils/showAlert";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { getAllContactus,getDeleteContact } from "../../services/Phase_2/Contactus";
const Help = () => {
  const [data, setData] = useState("");
  const [DeleteShow, setDeleteShow] = useState("");
  const [deleteRecord, setDeleteRecord] = useState("");

  //Get All

  const handleAllcontacts = async () => {
    try {
      const resp = await getAllContactus();
      setData(resp.data);
      console.log("menu", resp.data);
    } catch (error) {
      showAlert("something Went Wrong", "error");
    }
  };

  useEffect(() => {
    handleAllcontacts();
  }, []);



 // Delete Api

  const handleDeleteshow = (item) => {
    setDeleteShow(true);
    setDeleteRecord(item);
  };
  const handlecloseDelete = () => {
    setDeleteShow(false);
  };

  const handleDeleteTeleMenu = async () => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeleteContact(data);
      showAlert("TeleCommunication Deleted Successfully", "success");
      setDeleteShow(false);
      handleAllcontacts();
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
            <h3 className="mt-4 mb-4">Help Desk</h3>
          </div>
        </div>
        <div style={{ paddingLeft: "15px", paddingBottom: "10px" }}>
          <h6>
            <b>Note: </b>In this section the admin can get the Details of the
            User who requested for Customer Support.
          </h6>
        </div>
        <div>
          {" "}
          <Table striped bordered hover size="md" responsive>
            <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email Id</th>
                <th>Subject</th>
                <th>message</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.email}</td>
                    <td>{item?.subject}</td>

                    <td>{item?.message?.split(" ").splice(0, 7).join(" ") + (item?.message?.split(" ").length > 7 ? "..." : "")}</td>

                    <td>
                      <center>
                        <a
                          className="nav-link"
                          onClick={() => {
                            handleDeleteshow(item);
                          }}
                        >
                          {" "}
                          <i className="fa fa-trash-o" />
                        </a>
                        {/* <a
                          className="nav-link"
                          onClick={() => {
                            handleEditShow(item);
                          }}
                          style={{ paddingLeft: "8px" }}
                        >
                          <i
                            className="fa fa-edit"
                            style={{ paddingLeft: "10px" }}
                          />
                        </a> */}
                      </center>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          {/* // Delete Modal  */}
          <Modal show={DeleteShow} onHide={handlecloseDelete}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "#0076B5" }}>
                Delete Product
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Are you sure want to delete this record.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => handlecloseDelete()}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => handleDeleteTeleMenu(deleteRecord)}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Help;
