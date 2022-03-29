import React, { useState } from "react";
import data from "../../Data";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import moment from "moment";

function Products() {
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [DeleteShow, setDeleteShow] = useState(false);
  const handleEditClose = () => setShowEditModal(false);
  const handleDeleteshow = () => setDeleteShow(true);
  const handlecloseDelete = () => setDeleteShow(false);

  const navigate = useNavigate();
  const handleDeleteProduct = () => {
    console.log("delete");
    setDeleteShow(false);
  };
  const[errorMsg,setErrorMsg]=useState('')
  const[file,setFile]=useState([])
const [data2, setData2] = useState({
  id: "",
  productName: "",
  category: "",
  quantity: "",
  date: "",
  availability: "",
  price: "",
  discount: "",
  warranty: "",
  description: "",
  offers: "",
  details: "",
});

const {
  id,
  productName,
  category,
  quantity,
  date,
  availability,
  price,
  discount,
  warranty,
  description,
  offers,
  details,
  
} = data2;
const handleChange = (e) => {
  setData2({ ...data2, [e.target.name]: e.target.value });
};
const handleFileChange = (event) => {
  setFile(event.target.files);
  console.log(file);
};

// Edit Api
const handleEditShow = (item) =>{ 
  console.log(item,"record")
  setData2({
    productName:item.title,
    category:item.Category,
    quantity:item.quantity,
    date: moment(item.date).format("YYYY-MM-DD"),
    availability:item.availability,
    price:item.price,
    discount:item.discountPrice,
    warranty:item.warranty,
    description:item.description,
    offers:item.offer,
    details:item.specification

  })
  setShowEditModal(true);
}
const handleEditProduct = () => {
  console.log(data2);
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
                      <a className="nav-link" onClick={()=>{handleDeleteshow(item)}}>
                        {" "}
                        <i className="fa fa-trash-o" />
                      </a>
                      <a className="nav-link" onClick={() =>{handleEditShow(item)}}>
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

     

      <div className="col-xl-5  col-lg-4 col-md-3 col-sm-2">
        <div className="header">
          <Modal show={ShowEditModal} onHide={handleEditClose} size="lg"> 
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "#8ec131", marginLeft: "25px" }}>
                Edit product List
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
               
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      name="productName"
                      value={productName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      category
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      name="category"
                      value={category}
                      onChange={handleChange}
                    >
                      <option>select the category</option>
                      {data &&
                        data.categories.map((item) => (
                          <option value={item.title}>{item.title}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      name="quantity"
                      value={quantity}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext">
                      Date of Manufacturing
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      value={date}
                      name="date"
                      id="example-input"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      Availabilty
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      value={availability}
                      name="availability"
                      onChange={handleChange}
                    >
                      <option>Select Option</option>
                      <option>Available</option>
                      <option>Out Of Stock</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      price
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      min={0}
                      id=""
                      name="price"
                      value={price}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      Discount Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      id=""
                      name="discount"
                      value={discount}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      Warranty
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      id=""
                      name="warranty"
                      value={warranty}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id=""
                      name="description"
                      value={description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      offers
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id=""
                      name="offers"
                      value={offers}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext">product Details</label>
                    <textarea
                      className="form-control"
                      type="text"
                      value={details}
                      name="details"
                      id="example-input"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext">product Image</label>
                    <input
                      className="form-control"
                      type="file"
                      name="proimage"
                      id="proimage"
                      accept="image/png, image/jpeg"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                {/* <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <button
                className="btn btn-primary w-100 mt-4 ml-0"
                name="submit"
                type="submit"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                 onClick={handleSubmit}
              >
                submit
              </button>
            </div> */}
                <label style={{ color: "red", justifyContent: "center" }}>
                  {errorMsg}
                </label>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                size="lg"
                onClick={handleEditProduct}
                style={{ width: "200%" }}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Products;
