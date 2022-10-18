import React, { useState, lazy, Suspense } from "react";
// import LandingPage from "../components/LandingPage";
// import LoginModal from "../components/LoginModal";
import { CITY_LIST, COUNTRY_LIST } from "../constants/authconstant";
import { getUserDetailsByToken } from "../services/authentication";
import { AUTH_TOKEN, getCookie } from "../utils/cookie";
import { useStateValue } from "../StateProvider";
import { getCartData, imageUrl } from "../services/category";
import { formatAmount } from "../utils/AmountFormatter";
import { getBasketTotal } from "../Reducer";
import { useNavigate } from "react-router-dom";
import validator from "validator";
const LandingPage = lazy(() => import("../components/LandingPage"));
const LoginModal = lazy(() => import("../components/LoginModal"));

export default function Checkout() {
  const [shipAddress, setShipAddress] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [iniText, setIniText] = useState("Loading...");
  const [userEmail, setUserEmail] = useState("");
  const isAuthenticated = getCookie(AUTH_TOKEN);
  const [{ basket }, dispatch] = useStateValue();

  const [userData, setUserData] = useState("");
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [ship_city, setSCity] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const getDataByToken = async () => {
    if (isAuthenticated) {
      const result = await getUserDetailsByToken();
      // console.log(result);
      setUserEmail(result?.data?.data?.email);
      setUserData(result?.data.data);
      setLname(result?.data.data.last_name);
      setFname(result?.data.data.first_name);
      setCity(result?.data.data.city);
      setData2({
        // first_name:result?.data.data.first_name,
        // last_name:result?.data.data.last_name,
        country: result?.data.data.country ? result?.data.data.country : "",
        // city:result?.data.data.city,
        address1: result?.data.data.adress,
        address2: result?.data.data.adress,
        zipcode: result?.data.data.zipcode,
        phone: result?.data.data.phone,
        email: result?.data.data.email,
        userId: result?.data.data.userId,
      });
      console.log("userData", result.data.data);
    }
  };

  React.useLayoutEffect(() => {
    getDataByToken();
  }, []);

  console.log("firstName", userData.first_name);
  const [cartDet, setCartDet] = useState([]);
  const [data2, setData2] = useState({
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    address1: "",
    address2: "",
    zipcode: "",
    phone: "",
    email: "",
    ship_first_name: "",
    ship_last_name: "",
    ship_country: "",
    ship_city: "",
    ship_address1: "",
    ship_address2: "",
    ship_zipcode: "",
    ship_phone: "",
    ship_email: "",
    order_notes: "",
    userId: "",
  });

  const {
    country,
    address1,
    address2,
    zipcode,
    phone,
    userId,

    ship_country,
    ship_address1,
    ship_address2,
    ship_zipcode,
    ship_phone,
    order_notes,
  } = data2;

  React.useEffect(() => {
    (async () => {
      if (userId) {
        const resp = await getCartData({ userId });
        console.log("getcartdata", resp?.data?.data);
        resp?.data?.data
          ? setCartDet(resp?.data?.data)
          : setIniText("Error loading cart data.");
        !resp?.data?.data?.length && setIniText("No products added to cart.");
      }
    })();
  }, [userId]);

  // email validator
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const validateEmail = (e) => {
    var uemail = e.target.value;

    if (validator.isEmail(uemail)) {
      setEmailError("");
      setEmail(uemail);
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const [emailSError, setSEmailError] = useState("");
  const [ship_email, setSEmail] = useState("");
  const validateSEmail = (e) => {
    var uemail = e.target.value;

    if (validator.isEmail(uemail)) {
      setSEmailError("");
      setSEmail(uemail);
    } else {
      setSEmailError("Enter valid Email!");
    }
  };
  // end

  // only accept alphabet

  const onFnameChange = (e) => {
    const { value } = e.target;

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setFname(value);
    }
  };

  const onLnameChange = (e) => {
    const { value } = e.target;

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setLname(value);
    }
  };

  const onSCityChange = (e) => {
    const { value } = e.target;

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setSCity(value);
    }
  };

  const [ship_first_name, setSFname] = useState("");
  const onSFnameChange = (e) => {
    const { value } = e.target;

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setSFname(value);
    }
  };

  const [ship_last_name, setSLname] = useState("");
  const onSLnameChange = (e) => {
    const { value } = e.target;

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setSLname(value);
    }
  };

  const onCityChange = (e) => {
    const { value } = e.target;

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setCity(value);
    }
  };
  // end

  const btnDisabled = shipAddress
    ? !first_name ||
      !isAuthenticated ||
      !last_name ||
      !country ||
      !city ||
      !address1 ||
      !zipcode ||
      !phone ||
      !email ||
      !ship_first_name ||
      !ship_last_name ||
      !ship_country ||
      !ship_city ||
      !ship_address1 ||
      !ship_zipcode ||
      !ship_phone ||
      !ship_email
    : !first_name ||
      !last_name ||
      !country ||
      !city ||
      !address1 ||
      !zipcode ||
      !phone ||
      !email;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };

  const getTotal = () => {
    return cartDet?.reduce(
      (amount, item) => amount + item.quantity * Number(item.product.price),
      0
    );
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandingPage>
        <section className="container">
          <div className="row">
            <div className="col-12 col-md-7 col-sm-7">
              <div className="cart_top_row">
                <h2 className="body_heading mt-5">Checkout</h2>
              </div>
              <div className="form-one">
                <div className="w-100">
                  <span className="s1 float-left mb-2">
                    Contact Information
                  </span>
                  {!isAuthenticated && (
                    <span className="s2 float-right mb-2">
                      Already have an account?{" "}
                      <a onClick={() => setShowLoginModal(true)}>Log in</a>
                    </span>
                  )}
                </div>
                <form className="checkout_form">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      pattern=".+@beststartupever\.com"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                      value={userEmail}
                      disabled
                    />
                  </div>
                </form>
              </div>
              <div className="cart_top_row">
                <h2 className="body_heading mt-4">Billing Address</h2>
              </div>
              <div className="form-one">
                <form id="myForm" action="#">
                  <div className="row">
                    <div className="col-12 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="first_name">
                          First Name<em className="red">*</em>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="first_name"
                          name="first_name"
                          value={first_name}
                          onChange={onFnameChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="last_name">
                          Last Name<em className="red">*</em>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="last_name"
                          name="last_name"
                          value={last_name}
                          onChange={onLnameChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput">
                          Country<em className="red">*</em>
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          value={country}
                          name="country"
                          onChange={handleChange}
                          onFnameChange
                          required
                        >
                          <option value="" disabled="disabled">
                            Select Country
                          </option>
                          {/* {console.log("A;;",allcategories)} */}
                          {COUNTRY_LIST.map((item, i) => (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput">
                          Address Line 1<em className="red">*</em>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Street name and house number"
                          value={address1}
                          name="address1"
                          onChange={handleChange}
                          required
                          onFnameChange
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput">
                          Address Line 2 (Optional)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          value={address2}
                          name="address2"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput">
                          City<em className="red">*</em>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={city}
                          name="city"
                          onChange={onCityChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput">
                          Zip code<em className="red">*</em>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={zipcode}
                          name="zipcode"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput">
                          Phone<em className="red">*</em>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={phone}
                          name="phone"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput">
                          Email address<em className="red">*</em>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          name="email"
                          onChange={(e) => validateEmail(e)}
                        />
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "red",
                          }}
                        >
                          {emailError}
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check mt-1 mb-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <small
                          className="form-check-label text-muted"
                          htmlFor="exampleCheck1"
                        >
                          Create an account?
                        </small>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check mt-1 mb-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="changeShip"
                          checked={shipAddress}
                          onChange={(e) => setShipAddress(e.target.checked)}
                        />
                        <small
                          className="form-check-label text-muted text-uppercase"
                          htmlFor="exampleCheck1"
                        >
                          Ship to a Different Address?
                        </small>
                      </div>
                    </div>
                    {shipAddress && (
                      <div id="changeShipInputs">
                        <div className="row ml-1 mr-1">
                          <div className="col-12 col-md-6 col-sm-6">
                            <div className="form-group">
                              <label htmlFor="first_name">
                                First Name<em className="red">*</em>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="ship_first_name"
                                value={ship_first_name}
                                onChange={onSFnameChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-sm-6">
                            <div className="form-group">
                              <label htmlFor="last_name">
                                Last Name<em className="red">*</em>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="ship_last_name"
                                value={ship_last_name}
                                onChange={onSLnameChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput">
                                Country<em className="red">*</em>
                              </label>
                              <select
                                className="form-control"
                                value={ship_country}
                                name="ship_country"
                                onChange={handleChange}
                                required
                              >
                                <option value="" disabled="disabled">
                                  Select Country
                                </option>
                                {/* {console.log("A;;",allcategories)} */}
                                {COUNTRY_LIST.map((item, i) => (
                                  <option key={i} value={item}>
                                    {item}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput">
                                Address Line 1<em className="red">*</em>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Street name and house number"
                                value={ship_address1}
                                name="ship_address1"
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput">
                                Address Line 2 (Optional)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                value={ship_address2}
                                name="ship_address2"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-sm-6">
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput">
                                City<em className="red">*</em>
                              </label>
                              <input
                                type="text"
                                pattern="[A-Za-z]{3}"
                                className="form-control"
                                value={ship_city}
                                name="ship_city"
                                onChange={onSCityChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-sm-6">
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput">
                                Zip code<em className="red">*</em>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                value={ship_zipcode}
                                name="ship_zipcode"
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6 col-sm-6">
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput">
                                Phone<em className="red">*</em>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                value={ship_phone}
                                name="ship_phone"
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-sm-6">
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput">
                                Email address<em className="red">*</em>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="ship_email"
                                onChange={(e) => validateSEmail(e)}
                                required
                              />
                              <p
                                style={{
                                  fontWeight: "bold",
                                  color: "red",
                                }}
                              >
                                {emailSError}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="col-12">
                      <hr />
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput">
                          Order notes (optional)
                        </label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Notes about your order (eg special delivery information)."
                          value={order_notes}
                          name="order_notes"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
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
                      {console.log("checking cart", isAuthenticated, cartDet)}
                      {isAuthenticated ? (
                        cartDet.length ? (
                          cartDet.map((item) => (
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
                                {formatAmount(
                                  item.product.price * item.quantity
                                )}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colspan="2">{iniText}</td>
                          </tr>
                        )
                      ) : basket?.length ? (
                        basket.map((item) => (
                          <tr>
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
                  </div>
                </div>
                <div className="subtotal row">
                  <div className="col-md-6">
                    <h4>Total</h4>
                  </div>
                  <div className="col-md-6 text-right">
                    <h6>
                      <strong>
                        {/* { formatAmount(getTotal())} */}
                        {isAuthenticated
                          ? formatAmount(
                              cartDet?.reduce(
                                (amount, item) =>
                                  amount +
                                  item.quantity * Number(item.product.price),
                                0
                              )
                            )
                          : formatAmount(getBasketTotal(basket))}
                      </strong>
                    </h6>
                  </div>
                </div>
                <button
                  type="submit"
                  className="order-box-btn"
                  disabled={btnDisabled}
                  onClick={() =>
                    navigate("/payment-methods", {
                      state: {
                        data: data2,
                        shipAddress,
                        city,
                        cartDet,
                        email,
                        ship_email,
                        ship_city,
                      },
                    })
                  }
                >
                  Place Order
                </button>
                {!isAuthenticated ? (
                  <center>
                    <p style={{ color: "red" }}>
                      Please Log in to Place the Order
                    </p>
                  </center>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </section>
        {showLoginModal && (
          <LoginModal
            show={showLoginModal}
            handleClose={() => setShowLoginModal(false)}
          />
        )}
      </LandingPage>
    </Suspense>
  );
}
