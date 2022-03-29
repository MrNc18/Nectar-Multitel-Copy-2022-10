import React from 'react'
import { useParams } from 'react-router-dom'
import ServiceBanner from '../components/atoms/ServiceBanner';
import LandingPage from '../components/LandingPage'

function ProductDetail() {
    const params = useParams();
  return (
    <LandingPage>
        <ServiceBanner title="Product Detail" />
      <section className="container mt-5 pt-4 mb-5 pb-4">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="book-full-img">
              <img src="assets/images/book.png" className="img-fluid" />
              {/* <img src="assets/images/magnify-icon.png" className="img-fluid magnify-icon" /> */}
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="book-details">
              <h1>{params?.name}</h1>
              <div className="price">3,600.00 Kz&nbsp;<span className="old_price">7,200.00 Kz</span></div>
              <div className="rating">
                <span> <i className="fa fa-star-o"></i> </span>
                <span> <i className="fa fa-star-o"></i> </span>
                <span> <i className="fa fa-star-o"></i> </span>
                <span> <i className="fa fa-star-o"></i> </span>
                <span> <i className="fa fa-star-o"></i> </span>
                <span className="review">Be the first to review this product</span>
              </div>
            </div>
            <div className="book-specs">
              <p className="book_auth mb-2">By <span className="auth_name">Tania de Carvalho</span></p>
              <p className="book_info mb-2">Sales Format: <span className="black_clr">Book</span></p>
              <p className="book_info mb-2">Size: <span className="black_clr">14.8 x 21 cm</span></p>
              <p className="book_info mb-2">Number of pages: <span className="black_clr">118</span></p>
              <p className="book_info mb-2">Release: <span className="black_clr">April 17 , 2019</span></p>  
            </div>
            <div className="book-qty row">
              <div className="col-2 qty">Quantity</div>
              <div className="col-2">
                <div className="qty_counter d-flex">
                  <input type="button" value="-" className="minus" /><input type="text" name="qty" value="1" className="text-center input-qty w-100" /><input type="button" value="+" className="plus" />
                </div>
              </div>
              <div className="col-3 addcart">
                <a className="btn btn-primary contact_btn addcart_btn w-100" href="#">add to cart</a>
              </div>
              <div className="col-4 add_wishlist">
                <button className="btn btn-primary"><img src="assets/images/green-heart-icon.png" /><span>Add to wishlist</span></button>
              </div>
            </div>
            <div className="book-specs">
              <p className="book_auth mb-2">Author <span className="auth_name">Tania de Carvalho</span></p>
              <p className="book_info mb-2">Categories: <span className="black_clr">Scientific , Featured , Sociology</span></p>
              <p className="book_info mb-2">Tags: <span className="black_clr">education , rehabilitation , prison re-education , prison system</span></p>
              <p className="book_info mb-2">Product code: <span className="black_clr">4474</span></p>
            </div>

            <div className="author-social pt-2 pb-2">
              <h2 className="book_social">Share <span>on social media</span></h2>
              <div className="author_links">
                <a href="#"><i className="fa fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LandingPage>
  )
}

export default ProductDetail
