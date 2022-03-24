import React from 'react'
// import data from "../Data"
import "./proList.css"

const data = {
    products: [
        {
            _id: '1',
            image:"/assets/images/Image13.png",
            title: 'Virtual Reality Helmet Zero spin',
            new_release: true,
            specification: 'High Speed Router',
            rating: 5,
            price: '3,600.00 Kz'
        },
        {
            _id: '2',
            image: '/assets/images/Image15.png',
            title: 'Mega Speed Router',
            new_release: false,
            specification: 'High Speed Router with something',
            rating: 4,
            price: '3,600.00 Kz'
        },
        {
            _id: '3',
            image: '/assets/images/Image19.png',
            title: 'Additional Boost Router',
            new_release: false,
            specification: 'High Speed Router',
            rating: 5,
            price: '86$'
        },
        {
            _id: '4',
            image: '/assets/images/Image20.png',
            title: 'Virtual Reality Helmet Zero spin',
            new_release: true,
            specification: 'High Speed Router',
            rating: 5,
            price: '3,600.00 Kz'
        },
        {
            _id: '5',
            image: '/assets/images/Image13.png',
            title: 'Mega Speed Router',
            new_release: false,
            specification: 'High Speed Router with something',
            rating: 4,
            price: '3,600.00 Kz'
        },
        {
            _id: '6',
            image: '/assets/images/Image15.png',
            title: 'Additional Boost Router',
            new_release: false,
            specification: 'High Speed Router',
            rating: 5,
            price: '86$'
        },
        {
            _id: '7',
            image: '/assets/images/Image19.png',
            title: 'Virtual Reality Helmet Zero spin',
            new_release: true,
            specification: 'High Speed Router',
            rating: 5,
            price: '3,600.00 Kz'
        },
        {
            _id: '8',
            image: '/assets/images/Image20.png',
            title: 'Mega Speed Router',
            new_release: false,
            specification: 'High Speed Router with something',
            rating: 4,
            price: '3,600.00 Kz'
        },
        {
            _id: '9',
            image: '/assets/images/Image13.png',
            title: 'Additional Boost Router',
            new_release: false,
            specification: 'High Speed Router',
            rating: 5,
            price: '86$'
        },
    ]
}

const  ProductsList = ()  => {

    const displayProducts =  data && data.products.map((product) => {
        return (
          <div key={product._id}>
            <div className="card">
              <div className="Product_img">
                {/* <a href="#">
                  <img
                    className="heart-icon"
                    src={
                      product.new_release
                        ? "/images/new.png"
                        : "/images/heart-icon.png"
                    }
                    alt="Add to Wishlist"
                  />
                </a> */}
                <a 
                // href={`/products/${product._id}`}
                >
                  <img className="card-img-top" src={product.image} alt="Product1" />
                </a>
              </div>
              <div className="card-body">
                <a 
                // href={`/products/${product._id}`}
                >
                  <h5 className="card-title">{product.title}</h5>
                </a>
                <p className="card-text">By {product.specification}</p>
                <div className="rating">
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                </div>
                <div className="price">{product.price}</div>
               <button className="btn">
                   Add to cart
               </button>
              </div>
            </div>
          </div>
        );
      });
  return (
    <section className="container-fluid bestsell_new">
    <div className="container">
      <div className="row bestseller">
        <div className="col-md-12">
          <h2 className="body_heading">our Products</h2>
          <div className="best_slider">{displayProducts}</div>
        </div>
      </div>
      </div>
      </section>
    
  )
}

export default ProductsList