import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { mobile } from "../svg/mobile";
import { multilingual } from "../svg/multilingual";
import { user } from "../svg/user";
import { DateTime } from "./DateTime";
import GoogleTranslate from "./google";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import { AUTH_TOKEN, deleteCookie, getCookie } from "../utils/cookie";
import { getUserDetailsByToken } from "../services/authentication";
import { Dropdown } from "react-bootstrap";
import { useStateValue } from "../StateProvider";
import { showAlert } from "../utils/showAlert";
import { getCartData, getWishlistData } from "../services/category";

function Header() {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const [cartLength, setCartLength] = useState("");
  const [wishlistLength, setWishlistLength] = useState("");
  const isAuthenticated = getCookie(AUTH_TOKEN);

  const [{ wish, basket }, dispatch] = useStateValue();

  const getDataByToken = async () => {
    if (isAuthenticated) {
      const result = await getUserDetailsByToken();
      setUsername(result?.data?.data?.first_name);

      const resp = await getCartData({
        userId: result?.data.data.userId,
      });
      resp?.data?.data && setCartLength(resp?.data?.data.length);

      const resp2 = await getWishlistData({
        userId: result?.data.data.userId,
      });
      resp2?.data?.data && setWishlistLength(resp2?.data?.data.length);
    }
  };

  React.useEffect(() => {
    getDataByToken();
  }, []);

  return (
    <div id="Header">
      <div id="top_header">
        <Container style={{ height: "50px" }}>
          <Row>
            <Col lg={5}>
              <ul className="d-flex justify-content-between header-ul pt-1 ml-2">
                <li>
                  <DateTime />
                </li>
                <div
                  style={{
                    borderRight: "1px solid",
                    height: "25px",
                    opacity: "0.5",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                ></div>
                <li>
                  {mobile} <span className="fw-400">Contact Us :</span>{" "}
                  985-236-854-558
                </li>
              </ul>
            </Col>
            <Col lg={7}>
              <ul className="d-flex justify-content-between header-right-ul">
                <li>
                  <div className="searchtop">
                    <div className="input-group">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search Here..."
                        name="search"
                        id="search"
                      />
                      <button type="submit" className="input-group-text">
                        <i className="fa-solid fa-magnifying-glass white-color"></i>
                      </button>
                    </div>
                  </div>
                </li>
                <div
                  style={{
                    borderRight: "1px solid",
                    height: "25px",
                    opacity: "0.5",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                ></div>
                <li>
                  <div className="multilingual d-flex">
                    {multilingual}
                    <div style={{ paddingLeft: "5px" }}>
                      <GoogleTranslate />
                    </div>
                  </div>
                </li>
                {/* <div
                  style={{
                    borderRight: "1px solid",
                    height: "25px",
                    opacity: "0.5",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                ></div>
                <li>
                  <div className="multilingual d-flex pt-1 ml-3">
                    <span className="fw-400">City:</span>
                    <select name="city" id="city" className="ml-1">
                      <option value="france">France</option>
                      <option value="spain">Spain</option>
                    </select>
                  </div>
                </li> */}
                <div
                  style={{
                    borderRight: "1px solid",
                    height: "25px",
                    opacity: "0.5",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                ></div>
                <li>
                  {!isAuthenticated ? (
                    <div
                      className="d-flex pt-1 ml-3"
                      onClick={() => setShowLoginModal(true)}
                    >
                      {user} <span className="ml-1">Login/Signup</span>
                    </div>
                  ) : (
                    <Dropdown style={{ position: "relative", top: "-5px" }}>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        style={{ background: "transparent", border: "none" }}
                      >
                        <img
                          className="usericon"
                          src="/assets/images/user.png"
                        />
                        <span className="username">{`Hey ${username}`}</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => navigate("/profile")}>
                          Client Portal
                        </Dropdown.Item>
                        <Dropdown.Item
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                          onClick={() => {
                            navigate("/wishlist");
                          }}
                        >
                          Wishlist{" "}
                          <span className="counter">
                            {isAuthenticated ? wishlistLength : wish.length}
                          </span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                          onClick={() => {
                            navigate("/cart");
                          }}
                        >
                          Cart {"    "}
                          <span className="counter">
                            {isAuthenticated ? cartLength : basket.length}
                          </span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            deleteCookie(AUTH_TOKEN);
                            showAlert("Logged out.", "success");
                            navigate("/home");
                            // window.location.reload();
                          }}
                        >
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                </li>
                {/* <li>
                  <Link to={"/cart"}>
                    <img
                      src="/assets/images/cart.png"
                      style={{ width: "23%", paddingLeft: "5px" }}
                    />
                  </Link>
                </li> */}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar expand="lg" variant="light" bg="white">
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            // href="/"
            style={{ cursor: "pointer" }}
          >
            <img
              src="/assets/images/logo.png"
              className="d-inline-block align-top"
              alt="Multitel logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                className="notranslate"
                onClick={() => navigate("/home")}
              >
                Multitel Home
              </Nav.Link>
              <NavDropdown
                title="Who We Are"
                id="basic-nav-dropdown"
                // onClick={() => navigate("/home")}
              >
                <NavDropdown.Item
                  onClick={() => navigate("/messagefrommanager")}
                >
                  Management Message
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/missionandvalue")}>
                  Mission and Values
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/news")}>
                  News
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/recruitment")}>
                  Recruitment
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/corporatebodies")}>
                  Corporate Bodies
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/sustainability")}>
                  Sustainability
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/multitelpride")}>
                  Multitel Pride
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="notranslate"
                onClick={() => navigate("/marketplace")}
              >
                Marketplace
              </Nav.Link>
              <NavDropdown
                title="Telecommunication"
                id="basic-nav-dropdown"
                // onClick={() => navigate("/home")}
              >
                <NavDropdown.Item onClick={() => navigate("/privatenetwork")}>
                  Private Networks
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/internet")}>
                  Internet
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/VSAT")}>
                  VSAT
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/videoconference")}>
                  Video Conferencing
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/cpes")}>
                  CPEs
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Digitotal"
                id="basic-nav-dropdown"
                // onClick={() => navigate("/home")}
              >
                <NavDropdown.Item
                  onClick={() => navigate("/networkinfrastructure")}
                >
                  Network Infrastructure
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate("/datacenterandcloud")}
                >
                  Data Center and Cloud
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate("/consultingtraining")}
                >
                  Consulting and Training on Job
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/ipvoice")}>
                  IP Voices
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/cybersecurity")}>
                  Cyber Security
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/webservice")}>
                  WEB Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate("/automationelectronic")}
                >
                  Automation and Electronic Security
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/software")}>
                  Software
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/otherservice")}>
                  Other Services
                </NavDropdown.Item>
              </NavDropdown>

              {/* <Nav.Link href="#link">Multitel Mobile</Nav.Link> */}
           
              {/* <Nav.Link onClick={() => navigate("/profile")}>
                Client Portal
              </Nav.Link> */}
              {/* <button onClick={console.log(()=>getCookie(AUTH_TOKEN))}>GEt</button> */}

              {/* Commenting this nav item for now for better view we'll uncomment it later */}

              {/* <Nav.Link href="#link">Client Portal</Nav.Link> */}

              {/* <Nav.Link onClick={() => navigate("/contactus")}>
                ContactUs
              </Nav.Link> */}
              <NavDropdown
                title="Contacts"
                id="basic-nav-dropdown"
                // onClick={() => navigate("/home")}
              >
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/informatics-and-accessories", {
                      state: {
                        title: "Informatics and Accessories",
                        slug: "Informatics & Accessories",
                      },
                    })
                  }
                >
                  Informatics and Accessories
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/ip-telephony", {
                      state: { title: "IP Telephony", slug: "Ip Telephony" },
                    })
                  }
                >
                  IP Telephony
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/networking-equipment", {
                      state: {
                        title: "Networking Equipment",
                        slug: "Network Equipment",
                      },
                    })
                  }
                >
                  Networking Equipment
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/cpe", {
                      state: { title: "CPE´s", slug: "Cpe" },
                    })
                  }
                >
                  CPE´s
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/telecom", {
                      state: { title: "Telecom", slug: "Telecom" },
                    })
                  }
                >
                  Telecom
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/promotions", {
                      state: { title: "Promotions", slug: "Promotions" },
                    })
                  }
                >
                  Promotions
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/other-products-services-partners", {
                      state: {
                        title: " Other Products/Services (Partners)",
                        slug: "otherproducts",
                      },
                    })
                  }
                >
                  Other Products/Services (Partners)
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="notranslate"
                onClick={() => navigate("/contactus")}
              >
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showLoginModal && (
        <LoginModal
          show={showLoginModal}
          handleClose={() => setShowLoginModal(false)}
        />
      )}
    </div>
  );
}

export default Header;
