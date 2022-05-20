import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import { getBasketTotal } from "../Reducer";
import { imageUrl } from "../services/category";
import { useStateValue } from "../StateProvider";
import { formatAmount } from "../utils/AmountFormatter";
import { getcreateRefernceId } from "../services/Payment";
import { showAlert } from "../utils/showAlert";
import moment from "moment";
import { AUTH_TOKEN, getCookie } from "../utils/cookie";

export default function PaymentMethod() {
  const [showCards, setShowCards] = useState(false);
  const [showOnline, setShowOnline] = useState(false);
  const [buttondisabled, setButtonDisabled] = useState(false);

  const isAuthenticated = getCookie(AUTH_TOKEN);
  const { state } = useLocation();
  console.log("state", state);


  const [userDet, setUserDet] = useState(state?.data || {});
  const [userCity, setUserCity] = useState(state?.city || "");
  const [userShipCity, setUserShipCity] = useState(state?.ship_city || "");
  const [adress, setAdress] = useState(state?.shipAddress || {});
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  console.log("basket", basket);
  console.log("adress", adress);
  console.log("userdet", userDet);
  useEffect(() => {
    if (!state) {
      navigate("/marketplace");
    }
  }, []);

  const getReference = async () => {
    // var date = moment(new Date(new Date().setDate(new Date().getDate() + 30)).format("YYYY-MM-DD"))
    const getRandomId = (min = 0, max = 500000) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      return num.toString().padStart(7, "0");
    };

    const productdata = () => {
      let products = [];
      basket.map((data) => {
        let value = {
          product_id: data.id,
          product_name: data.name,
          product_quantity: data.quantity,
          product_price: data.price,
          product_image: data.image,
        };
        products.push(value);
        console.log("product", products);
      });

      return products;
    };

    const data = {
      amount: getBasketTotal(basket),
      end_datetime: moment().add(30, "days").format("YYYY-MM-DD"),
      userId: `${userDet.userId}`,
      adress: `${state.data.address1}`,
      custom_fields: {
        invoice: `${"MUL"} ${getRandomId()}`,
        email: `${userDet.email}`,
        Total_products: `${basket.length}`,
      },
      order_detail: [
        {
          invoice: `${"MUL"} ${getRandomId()}`,
          products: productdata(),
          email: `${userDet.email}`,
        },
      ],
    };
    try {
      setButtonDisabled(true);
      const resp = await getcreateRefernceId(data);
      console.log("rsp", resp.data.data);
      showAlert(
        "RefernceId created Succesfully and sent to EmailId",
        "success"
      );
      // dispatch({
      //   type: "REMOVE_ALL",
      // });
      setButtonDisabled(false);
      navigate("/home");
    } catch (error) {
      setButtonDisabled(false);
      showAlert("Something Went Wrong", "error");
      console.log("err", error);
    }
  };

  const getTotal = () => {
    return state?.cartDet?.reduce(
      (amount, item) => amount + item.quantity * Number(item.product.price),
      0
    );
  };

  return (
    <LandingPage>
      <section className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-sm-7">
            <div className="cart_top_row">
              <h2 className="body_heading mt-5">Checkout</h2>
            </div>
            <div className="row">
              <div className="col-md-12 table-responsive">
                <table className="book_info_tbl w-100" border="0">
                  <tr className="header_row">
                    <td className="td1">Contact</td>
                    <td className="td2">
                      {state?.ship_email
                        ? state?.ship_email
                        : state?.email}
                    </td>
                    <td className="td3">
                      <a href="/checkout">Change</a>
                    </td>
                  </tr>
                  <tr className="header_row">
                    <td className="td1">Ship to</td>
                    <td className="td2">
                      {state?.shipAddress
                        ? `${userDet?.ship_address1}, ${
                            userDet?.ship_address2
                              ? userDet?.ship_address2 + ", "
                              : ""
                          }${userShipCity}, ${userDet?.ship_country} - ${
                            userDet?.ship_zipcode
                          }`
                        : `${userDet?.address1}, ${
                            userDet?.address2 ? userDet?.address2 + ", " : ""
                          }${userCity}, ${userDet?.country} - ${
                            userDet?.zipcode
                          }`}
                    </td>
                    <td className="td3">
                      <a href="/checkout">Change</a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="cart_top_row">
              <h2 className="body_heading mt-4">Payment Method</h2>
            </div>
            <div>
              <p style={{ color: "#007BFF" }}>
                Click on PayNow to create a ReferenceId by ProxyPay and Pay
                through Nearest ATM or Onlinebanking
              </p>
            </div>
          </div>
          <div className="col-12 col-md-5 col-sm-5">
            <div className="cart_top_row">
              <h2 className="body_heading mt-5">Your Order</h2>
            </div>
            <div className="order-box">
              <div className="row">
                <div className="col-md-12 table-responsive">
                  <table className="book_info_tbl w-100" border="0">
                    <tr className="header_row">
                      <td>Product</td>
                      <td className="text-center">Subtotal</td>
                    </tr>
                    {isAuthenticated ? (
                      state?.cartDet?.length ? (
                        state?.cartDet?.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  className="cart_book_img"
                                  src={imageUrl(item.product.cover_img)}
                                />
                                <span className="cart_book_name">
                                  {item.product.name}
                                </span>
                              </div>
                            </td>
                            <td className="cart_price text-center">
                              {formatAmount(item.product.price * item.quantity)}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colspan="2">No products added to cart. </td>
                        </tr>
                      )
                    ) : basket?.length ? (
                      basket.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                className="cart_book_img"
                                src={imageUrl(item.image)}
                              />
                              <span className="cart_book_name">
                                {item.name}
                              </span>
                            </div>
                          </td>
                          <td className="cart_price text-center">
                            {formatAmount(item.price * item.quantity)}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colspan="2">No items added to cart.</td>
                      </tr>
                    )}
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <hr />
                  <div className="subtotal row">
                    <div className="col-md-6">
                      <h2 className="mt-0">Subtotal</h2>
                    </div>
                    <div className="col-md-6 text-right">
                      <h3 className="mt-0">
                        {isAuthenticated
                          ? formatAmount(getTotal())
                          : formatAmount(getBasketTotal(basket))}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="subtotal row">
                <div className="col-md-6">
                  <h4>Total</h4>
                </div>
                <div className="col-md-6 text-right">
                  <h6>
                    <strong>
                      {isAuthenticated
                        ? formatAmount(getTotal())
                        : formatAmount(getBasketTotal(basket))}
                    </strong>
                  </h6>
                </div>
              </div>

              <button
                disabled={buttondisabled}
                type="submit"
                className="order-box-btn"
                onClick={() => getReference()}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </LandingPage>
  );
}
