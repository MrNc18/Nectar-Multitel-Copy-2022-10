import React from 'react'
import { useNavigate } from 'react-router-dom'
import LandingPage from '../components/LandingPage'

export default function Cart() {
    const navigate = useNavigate()
  return (
      <LandingPage>
    <section className="container cart_details">
        <div className="row">
          <div className="col-md-8">
            <div className="row cart_top_row">
              <div className="col-8">
                <h2 className="body_heading">Cart</h2>
              </div>
              <div className="col-4 text-right">
                <a onClick={() => navigate("/marketplace")}><i className="fas fa-arrow-left"></i>&nbsp;Continue Shopping</a>
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
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img className="cart_book_img" src="/assets/images/Image13.png" />
                        <span className="cart_book_name">Prison Reeducation Methods</span>
                      </div>  
                    </td>
                    <td className="cart_price text-center">1800.00 Kz</td>
                    <td>
                      <div className="qty_counter d-flex">
                        <input type="button" value="-" className="minus" /><input type="text" name="qty" value="1" className="text-center input-qty w-100" /><input type="button" value="+" className="plus" />
                      </div>
                    </td>
                    <td className="cart_price text-center">1800.00 Kz</td>
                    <td><a href="" className="remove_from_cart">&times;</a></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img className="cart_book_img" src="/assets/images/Image15.png" />
                        <span className="cart_book_name">3rd National Conference on Angolan Literature</span>
                      </div>  
                    </td>
                    <td className="cart_price text-center">3,000.00 Kz</td>
                    <td>
                      <div className="qty_counter d-flex">
                        <input type="button" value="-" className="minus" /><input type="text" name="qty" value="1" className="text-center input-qty w-100" /><input type="button" value="+" className="plus" />
                      </div>
                    </td>
                    <td className="cart_price text-center">3,000.00 Kz</td>
                    <td><a href="" className="remove_from_cart">&times;</a></td>
                  </tr>
                </table>

              </div>  
            </div>

            
            <div className="row coupon_row mt-4">
              <div className="col-md-12">
                <div className="bg-light d-flex justify-content-between coupon_inner_row">
                  <div>
                    <form className="form-inline">
                      <div className="form-group">
                        <input type="text" className="form-control mr-2" id="coupon_code" name="coupon_code" placeholder="Coupon code" />
                      </div>
                      <button type="submit" className="btn btn-primary apply_coupon">Apply coupon</button>
                    </form>
                  </div>
          
                  <button type="submit" className="btn btn-primary update_cart">Update cart</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="cart_total">
              <h3 className="mb-4">Cart Total</h3>
              <div className="d-flex justify-content-between subtotal_row">
                <span>Subtotal</span>
                <span>4800.00 Kz</span>
              </div>
              <div className="d-flex justify-content-between total_row">
                <span>Total</span>
                <span>4800.00 Kz</span>
              </div>
              <p className="mt-4 mb-4">Shipping calculated at checkout</p>
              <button type="submit" className="btn btn-primary to_checkout w-100"
                onClick={() => navigate("/checkout")}
              >Proceed to checkout</button>
            </div>
          </div>
        </div>
      </section>
      </LandingPage>
  )
}
