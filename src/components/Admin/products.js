import React, { useState } from "react";
import data from "../../Data";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

function Products() {
  const [show, setShow] = useState(false);
  const [DeleteShow, setDeleteShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDeleteshow = () => setDeleteShow(true);
  const handlecloseDelete = () => setDeleteShow(false);

  const navigate = useNavigate();
  const handleEdit = () => {
    console.log("edit");
  };
  const handleDeleteProduct = () => {
    console.log("delete");
    setDeleteShow(false);
  };
  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <h3 className="mt-4 mb-4">Products</h3>
          <div className="col-xl-9 col-lg-3 col-md-9 col-sm-9">
            <div className="header justify-content-end">
              <button
                type="button"
                className="btn btn-primary btn-sm my-3"
                style={{ width: "150px", marginRight: "15px" }}
                onClick={() => navigate("/admin/products/newproduct")}
              >
                <i className="fas fa-plus-circle"></i> Add New Products
              </button>
            </div>
          </div>
        </div>
        <Table striped bordered hover size="md" responsive>
          <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
            <tr>
              <th>Sr.No.</th>
              <th>Product Name</th>
              <th>Image</th>
              <th>category</th>
              <th>Quantity</th>
              <th>Specifications</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.products
                // .slice(
                //     pagesVisited,
                //     pagesVisited + usersPerPage
                //   )
                .map((item, i) => (
                  <tr>
                    {console.log("hxwjh", item)}
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td>
                      <img src={item.image} style={{ width: "50px" }} />
                    </td>
                    <td>{item.Category}</td>
                    <td>{item.quantity}</td>
                    <td>{item.specification}</td>
                    <td>{item.price}</td>
                    <td>
                      <a className="nav-link" onClick={handleDeleteshow}>
                        {" "}
                        <i className="fa fa-trash-o" />
                      </a>
                      <a className="nav-link" onClick={handleShow}>
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
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure want to delete this product</p>
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
    </div>
  );
}

export default Products;
