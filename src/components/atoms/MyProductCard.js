import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getmyorders } from "../../services/category";
import { formatAmount } from "../../utils/AmountFormatter";
import { showAlert } from "../../utils/showAlert";
import { imageUrl } from "../../services/category";

function MyProductCard() {
  const [orderList, setOrderList] = useState("");
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();

  const handleAllOrders = async () => {
    const data = {
      userId: userId,
    };
    try {
      const resp = await getmyorders(data);
      let Filtered = [];
      for (let i = 0; i < resp.data.data.length; i++) {
        if (resp.data.data[i].transaction_id != null) {
          Filtered.push(resp.data.data[i]);
        }
      }
      console.log("FFF", Filtered);
      setOrderList(Filtered);
      console.log("resp", resp.data.data);
    } catch (error) {
      console.log("error", error);
      showAlert("something went Wrong", "error");
    }
  };
  useEffect(() => {
    handleAllOrders();
  }, []);

  const orderDetails = (order_detail) => {
    const data = JSON.parse(order_detail);
    console.log("murthyfgfgh", data);
    return (
      data &&
      data.length >= 0 &&
      data[0].products &&
      data[0].products.map((item) => {
        console.log("murthy", item);
        return (
          <div>
            <p>{item.product_name}</p>
          </div>
        );
      })
    );
  };

  const image = (order_detail) => {
    const data = JSON.parse(order_detail);
    console.log("murthyfgfgh", data);
    return (
      data &&
      data.length >= 0 &&
      data[0].products &&
      data[0].products.map((item) => {
        console.log("murthy", item.product_image);
        return (
          <div>
            <p>{imageUrl(item.product_image)}</p>
          </div>
        );
      })
    );
  };
  const price = (order_detail) => {
    const data = JSON.parse(order_detail);
    return (
      data &&
      data.length >= 0 &&
      data[0].products &&
      data[0].products.map((item) => {
        console.log("ppppp", item.product_price);
        return (
          <div>
            <p>{formatAmount(item.product_price)}</p>
          </div>
        );
      })
    );
  };

  return (
    <Container className="mb-4">
      <div className="row">
        <div className="col-md-12 table-responsive">
          <table className="book_info_tbl w-100">
            <tr className="header_row">
              <td>Product</td>
              <td className="text-center price_col">Price</td>
              {/* <td className="text-center qty_col">Status</td> */}
              <td className="text-center">Subtotal</td>
            </tr>
            {orderList ? (
              orderList.map((item) => (
                <tr>
                  {console.log("oder", orderList)}
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        className="cart_book_img"
                        // src={imageUrl(`${image(item.order_detail)}`)}
                        src={item ? image(item.order_detail) : ""}
                        style={{ cursor: "pointer" }}
                      />
                      <span className="cart_book_name">
                        {item ? orderDetails(item.order_detail) : ""}
                      </span>
                    </div>
                  </td>
                  <td className="cart_price text-center">
                    {item ? price(item.order_detail) : ""}
                  </td>
                  <td className="cart_price text-center">
                    {formatAmount(item.amount)}
                  </td>
                  {/* {setProdId(item.id)} */}
                  {/* <td><a onClick={()=>removeFromBasket(item)} className="remove_from_cart">Remove</a></td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colspan="5">No items added to cart.</td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </Container>
  );
}

export default MyProductCard;
