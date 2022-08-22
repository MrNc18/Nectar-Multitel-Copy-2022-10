import React, { useState } from "react";
import { Button, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { formatAmount } from "../../utils/AmountFormatter";
import { baseurl } from "../../utils/request";
import { useStateValue } from "../../StateProvider";
// import showAlert from "../../utils/showAlert";
import { addToWishlist, addCartData } from "../../services/category";
import { AUTH_TOKEN, getCookie } from "../../utils/cookie";

const styles = {
  padding: "7px",
  borderRadius: "5px",
  fontSize: "12px",
  border: "none",
  color: "#fff",
  background: "var(--secondary)",
  width: "42%",
  margin: "0 auto",
};

function BroadbandCardDetail({ product }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, dispatch] = useStateValue();
  const [userId, setUserId] = useState('')
  const isAuthenticated = getCookie(AUTH_TOKEN)
  const [qty, setQty] = useState(1)

  let navigate = useNavigate();

  const addToBasket = async () => {
    if (userId) {
      const resp = await addCartData({
          userId,
          quantity:qty,
          id:product.id,
      })
      console.log("addCart", resp)
    } else {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
            id: product.id,
            image: product?.cover_img,
            name:product.name,
            price: product.price,
            quantity:qty,
        },
    });
    }
  };

  return (
    <Col md={6} lg={4}>
      <div className="broadband_card">
        <p className="blue_big">{formatAmount(product?.price)} / mo</p>
        <p className="black-color brd_heading">{product?.name}</p>
        <div className="broad3">
          <img
            src={
              product?.cover_img
                ? `${baseurl}/images/${product?.cover_img}`
                : "/assets/images/broad3.png"
            }
          />
        </div>
        <div className="black-color my-4" style={{ fontSize: "14px" }}>
          {product?.description}
        </div>
        <Button
          className="portfolio-item__link"
          style={styles}
          // onClick={() => navigate("#")}
          onClick={handleShow}
        >
          Start Now
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{product?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="broad3 mb-3" style={{ textAlign: "center" }}>
              <img
                src={
                  product?.cover_img
                    ? `${baseurl}/images/${product?.cover_img}`
                    : "/assets/images/broad3.png"
                }
              />
            </div>
            <p className="blue_big text-center">
              Price : {formatAmount(product?.price)} / month
            </p>
            <p className="text-center">{product?.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                addToBasket();
                // showAlert("Item Added to cart.", "success");
                navigate("/cart");
              }}
            >
              Buy Now
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Col>
  );
}

export default BroadbandCardDetail;
