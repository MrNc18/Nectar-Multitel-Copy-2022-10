import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import { useStateValue } from "../StateProvider";
import { imageUrl } from "../services/category";
import { formatAmount } from "../utils/AmountFormatter";

export default function WishList() {
  
 

  const [{ wish }, dispatch] = useStateValue();

  React.useEffect(() => {
    // console.log("prodId",prodId)
   
      console.log(wish, "basket");
    
  }, [wish]);

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
                  {wish.length ? wish.map((item) => (
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
                      {/* {setProdId(item.id)} */}
                      {/* <td><a onClick={()=>removeFromBasket(item)} className="remove_from_cart">Remove</a></td> */}
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
                      <td colspan="5">No items added to cart.</td>
                    </tr>
                  )}
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
