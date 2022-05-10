import React,{useState,useEffect} from "react";
import { Col, Container, Row, Table,Button } from "react-bootstrap";
import moment from "moment";

function InvoiceBill(props) {
const [InvoiceData,setInvoiceData]=useState('');
const [InvoiceDetails,setInvoiceDetails] = useState('');
const Data = props.data 
const Details = JSON.parse(props.data.order_detail)
// setInvoiceData(props.data)
// setInvoiceDetails(Details)
// console.log("invoice",InvoiceData)
console.log("details",Details,Data)

const handleBack = () => {
  props.handleBackButton();
};

useEffect(() => {
  window.scrollTo(0, 0)
}, [])


  return (
    <Container>
   <div style={{display:"flex",flexDirection:'row',justifyContent:"space-between"}}>
      <h4 className="mb-3">Invoice</h4>
      <Button onClick={() => handleBack()}>Back</Button>
      </div>
      <Row>
        {/* <Col md={3}>
          <h6>Bill To</h6>
          <p>
            31897 Colemen Avenue <br /> California, 92262
          </p>
        </Col> */}
        {/* <Col md={3}>
          <h6>Ship To</h6>
          <p>
            4662 White Avenue <br /> Curpose Cristi, 78405
          </p>
        </Col> */}
        <Col md={12}>
          <div style={{display:"flex",flexDirection:'row',justifyContent:"space-between"}}>
          <p>
            Invoice Number :<b>{Details[0].invoice}</b> </p><br />
           <p>Invoice Date :<b>{moment(Data.createdAt).format("YYYY-MM-DD")}</b></p> <br />
           </div>
            <p>Due Date : <b>{moment(Data.period_end_datetime).format("YYYY-MM-DD")}</b></p>

        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Table responsive="sm">
            <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
              <tr>
                <th>Sr.No</th>
                <th>Quantity</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {Details &&
                Details[0].products.map((item, i) => (
                  <tr>
                    {console.log("hxwjh", item)}
                    <td>{i + 1}</td>
                    <td>{item ? item.product_quantity : ""}</td>
                    <td>{item ? item.product_name:""}</td>
                    <td>{item ? item.product_price:''}</td>
                    <td>{item ? item.product_quantity *item.product_price:''}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default InvoiceBill;
