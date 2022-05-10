import React, { useState, useEffect } from "react";
import data from "../../Data";
import { Table } from "react-bootstrap";
import { getorders } from "../../services/category";
import { showAlert } from "../../utils/showAlert";

const Orders = () => {
  const [orderList, setOrderList] = useState("");
  const [filterData, setFilterData] = useState("");

  const handleAllOrders = async () => {
    try {
      const resp = await getorders();
      setOrderList(resp && resp.data.data);
      console.log("resp", resp.data.data);
    } catch (error) {
      console.log("error", error);
      showAlert("something went Wrong", "error");
    }
  };
  useEffect(() => {
    handleAllOrders();
  }, []);

  const orderDetails = (order_detail) =>{
    const data = JSON.parse(order_detail);
    console.log('murthyfgfgh',data)
    return data && data.length >= 0 && data[0].products &&
        data[0].products.map((item) => {
            console.log('murthy',item)
            return <div><p>{item.product_name}</p></div>
        })
  }

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div class="col-lg-6 col-md-6 text-left">
            <h3 className="mt-4 mb-4"> All Orders</h3>
          </div>
        </div>
        <Table striped bordered hover size="md" responsive>
          <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
            <tr>
              <th>Sr.No.</th>
              <th>Reference Id</th>
              <th>Terminal type</th>
              <th>Transaction Id</th>
              <th>Product Details</th>
              <th>Total Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {console.log("oedrs", orderList)};
            {orderList &&
              orderList.map((item, i) => (
                <tr>
                  {console.log("hxwjh", orderList, filterData)}
                  <td>{i + 1}</td>
                  <td>{item ? item.reference_id : ""}</td>
                  <td>{item ? item.terminal_type : ""}</td>
                  <td>{item ? item.transaction_id : ""}</td>
                  <td>{item ?  orderDetails(item.order_detail) : ""}</td>
                  <td>{item ? item.amount : ""}</td>
                  <td>{item.transaction_id === null ? "pending" :"Paid"}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Orders;
