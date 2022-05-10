import React,{useState,useEffect} from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { getmyorders } from "../../services/category"
import {showAlert} from "../../utils/showAlert"
import moment from "moment";
import InvoiceBill from "./InvoiceBill";
import { useLocation, useNavigate } from "react-router-dom";

function Invoicetable({detail}) {


  const [orderList, setOrderList] = useState("");
  const [userData, setUserData] = useState("");
  const [InvoiceBillStatus,setInvoiceBillStatus] = useState(false);
  const [SelectedInvoice,setSelectedInvoice] = useState('')
  const [InvoicetableStatus,setInvoicetableStatus] =useState(true)

   const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId")
  console.log("state",userId)


  const handleAllOrders = async () => {
    console.log("user",userData)
    const data = {
      userId: userId
    };
    try {
      const resp = await getmyorders(data);
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

  const Invoice = (order_detail) =>{
    const data = JSON.parse(order_detail);
    console.log('murthyfgfgh',data)
    return data && data.length >= 0 && 
        data.map((item) => {
            console.log('murthy',item)
            return <div><p>{item.invoice}</p></div>
        })
  }

  const handleInvoice = (item) =>{
    setSelectedInvoice(item)
    setInvoicetableStatus(false)
    setInvoiceBillStatus(true)
  }

  const handleBackButton = () => {
    setInvoicetableStatus(true)
    setInvoiceBillStatus(false)
  }

  return (
    <>{ InvoicetableStatus && (
    <Container>
      <h4 className="mb-3">Invoice</h4>
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
                <th>Invoive Number</th>
                <th>Date</th>
                <th>Total Amount</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {console.log("oedrs", orderList)}
              {orderList &&
                orderList.map((item, i) => (
                  <tr>
                    {console.log("hxwjh", orderList)}
                    <td>{i + 1}</td>
                    <td>{item ? item.reference_id : ""}</td>
                    <td>{item ? Invoice(item.order_detail) : ""}</td>
                    <td>{item ? moment(item.createdAt).format("YYYY-MM-DD"):''}</td>
                    <td>{item ? item.amount : ""}</td>
                    <td><a style={{cursor: "pointer"}} onClick={() =>handleInvoice(item)}>{item.transaction_id === null ? <p style={{color:"red"}}>pending</p> :<p style={{color:"green"}}>Paid</p>}</a></td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div> 
    </Container>
    )}

     {InvoiceBillStatus && (
       console.log("svv",SelectedInvoice),
      <InvoiceBill
      data={SelectedInvoice}
      handleBackButton={handleBackButton}
      />
    )}
    </>
  );
}

export default Invoicetable;
