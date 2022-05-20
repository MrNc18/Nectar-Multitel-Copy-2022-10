import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import { useStateValue } from "../StateProvider";
import { delFromWishlist, getWishlistData, imageUrl } from "../services/category";
import { formatAmount } from "../utils/AmountFormatter";
import { AUTH_TOKEN, getCookie } from "../utils/cookie";
import { getUserDetailsByToken } from "../services/authentication";
import { showAlert } from "../utils/showAlert";

export default function WishList() {
  const [{ wish }, dispatch] = useStateValue();
  const [wishlistDet, setWishlistDet] = useState([]);
  const [iniText, setIniText] = useState("Loading...");
  const isAuthenticated = getCookie(AUTH_TOKEN);

  React.useEffect(() => {
    console.log(wish, "basket");  
  }, [wish]);

  const getWishlistDetails = async () => {
    if (isAuthenticated) {
      const result = await getUserDetailsByToken();
      const resp = await getWishlistData({
        userId: result?.data.data.userId,
      });
      console.log("getWLdata", resp?.data?.data);
      resp?.data?.data
        ? setWishlistDet(resp?.data?.data)
        : setIniText("Error loading wishlist data.");
      !resp?.data?.data?.length && setIniText("No products in wishlist.");
    }
  };

  const removeFromWL = async (productId, userId) => {
    try {
      await delFromWishlist({ userId, id: productId });
      showAlert("Product removed from wishlist.", "success");
      getWishlistDetails();
    } catch (error) {
      showAlert("Something went wrong.", "error");
    } finally {
    }
  };

  React.useEffect(() => {
    getWishlistDetails();
  }, []);

  const navigate = useNavigate();
  return (
    <LandingPage>
      <section className="container cart_details">
        <div className="row">
          <div className="col-md-12">
            <div className="row cart_top_row">
              <div className="col-8">
                <h2 className="body_heading">Wishlist</h2>
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
                    <td className="text-center qty_col">Option</td>
                    {/* <td className="text-center">Subtotal</td> */}
                  </tr>
                  {
                    isAuthenticated ? (
                      wishlistDet?.length ? (
                        wishlistDet.map((item) => (
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  className="cart_book_img"
                                  src={imageUrl(item.product.cover_img)}
                                  onClick={() =>navigate(`/products/${item.product.slug}`)}
                                  style={{cursor:'pointer'}}
                                />
                                <span className="cart_book_name">{item.product.name}</span>
                              </div>
                            </td>
                            <td className="cart_price text-center">
                              {formatAmount(item.product.price)}
                            </td>
                            <td>
                              <a
                                onClick={() => removeFromWL(item.productId, item.userId)}
                                className="remove_from_cart"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colspan="3">{iniText}</td>
                        </tr>
                      )
                    ) : (
                      wish.length ? wish.map((item) => (
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                className="cart_book_img"
                                src={imageUrl(item.image)}
                                onClick={() =>navigate(`/products/${item.slug}`)}
                                style={{cursor:'pointer'}}
                              />
                              <span className="cart_book_name">{item.name}</span>
                            </div>
                          </td>
                          <td className="cart_price text-center">
                            {formatAmount(item.price)}
                          </td>
                          <td>
                            <a
                              onClick={() => {
                                dispatch({
                                  type: "REMOVE_FROM_WISH",
                                  id: item.id,
                                });
                              }}
                              className="remove_from_cart"
                            >
                              Remove
                            </a>
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colspan="5">No items added to wishlist.</td>
                        </tr>
                      )
                    )
                  }
                </table>
              </div>
            </div>

            {/* <div className="row coupon_row mt-4">
              <div className="col-md-12">
                <div className="bg-light d-flex justify-content-between coupon_inner_row">
                   <div>
                    <form className="form-inline">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control mr-2"
                          id="coupon_code"
                          name="coupon_code"
                          placeholder="Coupon code"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary apply_coupon"
                      >
                        Apply coupon
                      </button>
                    </form>
                  </div> 

                  <button type="submit" className="btn btn-primary update_cart">
                    Update cart
                  </button>
                </div>
              </div>
            </div> */}
          </div>

        </div>
      </section>
    </LandingPage>
  );
}
