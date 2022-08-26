import React, { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
// import LandingPage from "../components/LandingPage";
import { useStateValue } from "../StateProvider";
import {
  delCartData,
  getCartData,
  imageUrl,
  updateCartData,
} from "../services/category";
import {
  getServiceCart,
  deleteServiceCart,
  deleteAllServiceCart,
  updateServiceCart,
} from "../services/category";
import { formatAmount } from "../utils/AmountFormatter";
import { getBasketTotal } from "../Reducer";
import { AUTH_TOKEN, getCookie } from "../utils/cookie";
import { getUserDetailsByToken } from "../services/authentication";
import { showAlert } from "../utils/showAlert";
const LandingPage = lazy(() => import("../components/LandingPage"));

export default function Cart() {
  const [prodId, setProdId] = useState("");
  const [total, setTotal] = useState("");
  const [cartDet, setCartDet] = useState([]);
  const [iniText, setIniText] = useState("Loading...");
  const isAuthenticated = getCookie(AUTH_TOKEN);

  const deleteRecord = (item) => {
    setProdId(item.id);
    removeFromBasket();
  };

  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: prodId,
    });
  };

  const getCartDetails = async () => {
    if (isAuthenticated) {
      const result = await getUserDetailsByToken();
      const resp = await getCartData({
        userId: result?.data.data.userId,
      });
      const resp2 = await getServiceCart({
        userId: result?.data.data.userId,
      });
      console.log("getcartdata", resp?.data?.data, resp2?.data.data);
      resp?.data?.data
        ? setCartDet((resp?.data?.data).concat(resp2?.data?.data))
        : setIniText("Error loading cart data.");
      !resp?.data?.data?.length && setIniText("No products added to cart.");
    }
  };

  React.useEffect(() => {
    console.log(basket, "basket");
  }, [basket]);

  React.useEffect(() => {
    getCartDetails();
  }, []);

  const removeFromCart = async (productId, userId, service_product) => {
    try {
      console.log("serv", service_product);
      productId
        ? await delCartData({ userId, id: productId })
        : await deleteServiceCart({ userId, serviceId: service_product.id });
      showAlert("Product removed from cart.", "success");
      getCartDetails()
      cartDet.length === 1 && setIniText("No products added to cart.");
    } catch (error) {
      showAlert("Something went wrong.", "error");
    } finally {
    }
  };

  const decCount = (item) => {
    let cartDet2 = cartDet.map((a) => {
      return { ...a };
    });

    const prdt = cartDet2.find((e) => e.id == item.id);
    if (prdt.quantity > 1) {
      prdt.quantity -= 1;
      setCartDet(cartDet2);
    }
  };

  const incCount = (item) => {
    let cartDet2 = cartDet.map((a) => {
      return { ...a };
    });

    const prdt = cartDet2.find((e) => e.id == item.id);
    if (prdt.quantity < 25) {
      prdt.quantity += 1;
      setCartDet(cartDet2);
    } else {
      showAlert("Quantity Limit Exceeded", "error");
    }
  };

  const getTotal = () => {
    return cartDet?.reduce(
      (amount, item) =>
        amount +
        item?.quantity *
          Number(item?.product?.price || item?.service_product?.price),
      0
    );
  };

  const disable = isAuthenticated
    ? getTotal() == "0"
    : getBasketTotal(basket) == "0";

  const navigate = useNavigate();

  const saveCartDetails = async () => {
    const data = cartDet.map((item) => {
      return {
        id: item?.id,
        quantity: item?.quantity,
      };
    });
    console.log(data);
    try {
      await updateCartData(data);
      navigate("/checkout", { state: { cartDet } });
    } catch (error) {
      showAlert("Something went wrong.", "error");
    } finally {
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandingPage>
        <section className="container cart_details">
          <div className="row">
            <div className="col-md-8">
              <div className="row cart_top_row">
                <div className="col-8">
                  <h2 className="body_heading">Cart</h2>
                </div>
                <div className="col-4 text-right">
                  <a onClick={() => navigate("/marketplace")}>
                    <i className="fas fa-arrow-left"></i>&nbsp;Continue Shopping
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 table-responsive">
                  <table className="book_info_tbl w-100">
                    <tr className="header_row">
                      <td>Product</td>
                      <td className="text-center price_col">Price</td>
                      <td className="text-center qty_col">Quantity</td>
                      <td className="text-center">Subtotal</td>
                      <td>Action</td>
                    </tr>
                    {console.log("cartdetails", cartDet)}
                    {isAuthenticated ? (
                      cartDet?.length ? (
                        cartDet.map((item) => (
                          <tr key={item?.id}>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  className="cart_book_img"
                                  src={imageUrl(
                                    item?.product?.cover_img ||
                                      item?.service_product?.cover_img
                                  )}
                                />
                                <span className="cart_book_name">
                                  {item?.product?.name ||
                                    item?.service_product?.name}
                                </span>
                              </div>
                            </td>
                            <td className="cart_price text-center">
                              {formatAmount(item?.product?.price) ||
                                formatAmount(item?.service_product?.price)}
                            </td>
                            <td className="cart_price text-center">
                              <div className="qty_counter d-flex">
                                <input
                                  type="button"
                                  value="-"
                                  min="0"
                                  className="minus"
                                  onClick={() => decCount(item)}
                                />
                                <input
                                  type="text"
                                  name="qty"
                                  value={item?.quantity}
                                  className="text-center input-qty w-100"
                                />
                                <input
                                  type="button"
                                  value="+"
                                  max="20"
                                  className="plus"
                                  onClick={() => incCount(item)}
                                />
                              </div>
                            </td>
                            <td className="cart_price text-center">
                              {formatAmount(
                                (item?.product?.price ||
                                  item?.service_product.price) * item?.quantity
                              )}
                            </td>
                            <td>
                              <a
                                onClick={() => {
                                  console.log("remove");
                                  removeFromCart(
                                    item?.productId,
                                    item?.userId,
                                    item?.service_product,
                                    item?.serviceId
                                  );
                                }}
                                className="remove_from_cart"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colspan="5">{iniText}</td>
                        </tr>
                      )
                    ) : basket.length ? (
                      basket.map((item) => (
                        <tr key={item?.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                className="cart_book_img"
                                src={imageUrl(item?.image)}
                              />
                              <span className="cart_book_name">
                                {item?.name}
                              </span>
                            </div>
                          </td>
                          <td className="cart_price text-center">
                            {formatAmount(item?.price)}
                          </td>
                          <td className="cart_price text-center">
                            <div className="qty_counter d-flex">
                              <input
                                type="button"
                                value="-"
                                min="0"
                                className="minus"
                                onClick={() => {
                                  dispatch({
                                    type: "CHANGE_QTY",
                                    id: item?.id,
                                    payload: "decrement",
                                  });
                                }}
                              />
                              <input
                                type="text"
                                name="qty"
                                value={item?.quantity}
                                className="text-center input-qty w-100"
                              />
                              <input
                                type="button"
                                value="+"
                                max="20"
                                className="plus"
                                onClick={() => {
                                  dispatch({
                                    type: "CHANGE_QTY",
                                    id: item?.id,
                                    payload: "increment",
                                  });
                                }}
                              />
                            </div>
                          </td>
                          <td className="cart_price text-center">
                            {formatAmount(item?.price * item?.quantity)}
                          </td>
                          <td>
                            <a
                              onClick={() => {
                                dispatch({
                                  type: "REMOVE_FROM_BASKET",
                                  id: item?.id,
                                });
                              }}
                              className="remove_from_cart"
                            >
                              Remove
                            </a>
                          </td>
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
            </div>

            <div className="col-md-4">
              <div className="cart_total">
                <h3 className="mb-4">Cart Total</h3>
                <div className="d-flex justify-content-between subtotal_row">
                  <span>Subtotal</span>
                  <span>
                    {isAuthenticated
                      ? formatAmount(getTotal())
                      : formatAmount(getBasketTotal(basket))}
                  </span>
                </div>
                <p className="mt-4 mb-4">Shipping calculated at checkout</p>
                <button
                  disabled={disable}
                  type="submit"
                  className="btn btn-primary to_checkout w-100"
                  onClick={saveCartDetails}
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </section>
      </LandingPage>
    </Suspense>
  );
}
