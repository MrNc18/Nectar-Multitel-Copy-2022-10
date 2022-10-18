import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";
import AppHeader from "../AppHeader";
import "./admin.css";



const Tabs = Object.freeze([
  { label: "Dashboard", link: "admin/" },
  // { label: "Multitel Home", link: "admin/multitel-home" },
  { label: "MarketPlace", link: "admin/market_place" },
  // { label: "Categories", link: "admin/categories" },
  // { label: "Products", link: "admin/products" },
  // { label: "Service Categories", link: "admin/Service-categories" },
  // { label: "Internet Services", link: "admin/internetServices" }, // need to change
  // { label: "Promotions", link: "admin/promotions" },
  { label: "Content Management", link: "admin/staticpages" },
  { label: "Vendor Contacts", link: "admin/Contact" },
  { label: "AllOrders", link: "admin/orders" },
  { label: "Settings", link: "admin/settings" },
  // { label: "Navigation Menu", link: "admin/menu" },
  // { label: "Who We Are", link: "admin/who_we_are" },
  // { label: "TeleCommunication", link: "admin/telecommunications" },
  // { label: "DigiTotal", link: "admin/digitotal" },
  // {label:"HelpDesk" , link:"admin/helpdesk"}
]);


export default function AdLanding() {
  let navigate = useNavigate();
  const [toggle, setToggle] = useState("");
  const [Active, setIsActive] = useState("");
  const [teleActive, setTeleActive] = useState("");
  const [marketActive, setMarketActive] = useState("");
 
  const location = useLocation();
  const handleClick = (value) => {
    setToggle(value);
  };
  const handleLink = (link) => {
    setIsActive(!Active);
    navigate(`/${link}`);
  };
  const handleTeleLink = (link) => {
    setTeleActive(!teleActive);
    navigate(`/${link}`);
  };
  const handleMarket = (link) => {
    setMarketActive(!marketActive);
    navigate(`/${link}`);
  };

  
  return (
    <div
      className={
        toggle
          ? "sb-nav-fixed bg-light sb-sidenav-toggled"
          : "sb-nav-fixed bg-light"
      }
    >
      <AppHeader handleClick={handleClick} />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu notranslate" id="sb-sidenav-menu">
              <div className="nav mt-4">
                {Tabs.map(({ label, link }) => {
                  // console.log("naga sai fasdkjfaskjfkjasbfkasd");
                  const isActive = location.pathname.split("/")[1] === link;

                  if (label === "Who We Are") {
                    return (
                      <div style={{ flexDirection: "row" }}>
                        <a
                          className={`nav-link ${isActive ? "active" : ""}`}
                          key={link}
                          onClick={() => handleLink(link)}
                        >
                          {label}
                          <label style={{ marginLeft: "10px" }}>
                            {Active ? <ArrowUp /> : <ArrowDown />}
                          </label>
                        </a>
                        {Active ? (
                          <div style={{ backgroundColor: "#898989" }}>
                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() =>
                                navigate(`/admin/who_we_are/sustainability`)
                              }
                            >
                              {console.log("dk", link)}
                              <p style={{ color: "white" }}>Sustainabilty</p>
                            </a>
                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() =>
                                navigate(`/admin/who_we_are/recruitment`)
                              }
                            >
                              {console.log("lk", link)}
                              <p style={{ color: "white" }}>Recruitment</p>
                            </a>

                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() => navigate(`/admin/who_we_are/news`)}
                            >
                              {console.log("dk", link)}
                              <p style={{ color: "white" }}>News</p>
                            </a>
                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() =>
                                navigate(`/admin/who_we_are/multipride`)
                              }
                            >
                              {console.log("dk", link)}
                              <p style={{ color: "white" }}>MultiPride</p>
                            </a>
                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() =>
                                navigate(`/admin/who_we_are/corporate`)
                              }
                            >
                              {console.log("dk", link)}
                              <p style={{ color: "white" }}>Corporate Bodies</p>
                            </a>
                          </div>
                        ) : null}
                      </div>
                    );
                  } else if (label === "TeleCommunication") {
                    return (
                      <div style={{ flexDirection: "row" }}>
                        <a
                          className={`nav-link ${isActive ? "active" : ""}`}
                          key={link}
                          onClick={() => handleTeleLink(link)}
                        >
                          {label}
                          <label style={{ marginLeft: "10px" }}>
                            {teleActive ? <ArrowUp /> : <ArrowDown />}
                          </label>
                        </a>
                        {teleActive ? (
                          <div style={{ backgroundColor: "#898989" }}>
                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() =>
                                navigate(
                                  `/admin/telecommunications/privatenetwork`
                                )
                              }
                            >
                              {console.log("dk", link)}
                              <p style={{ color: "white" }}>
                                TeleCommunication Management
                              </p>
                            </a>
                            {/* <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() =>
                                navigate(`/admin/telecommunications/internet`)
                              }
                            >
                              {console.log("lk", link)}
                              <p style={{ color: "white" }}>Internet</p>
                            </a>
                  
                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() =>
                                navigate(`/admin/telecommunications/vsat`)
                              }
                            >
                              {console.log("dk", link)}
                              <p style={{ color: "white" }}>Vsat</p>
                            </a>
                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() =>
                                navigate(`/admin/telecommunications/video`)
                              }
                            >
                              {console.log("dk", link)}
                              <p style={{ color: "white" }}>VideoConference</p>
                            </a>
                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() =>
                                navigate(`/admin/telecommunications/Cpe`)
                              }
                            >
                              {console.log("dk", link)}
                              <p style={{ color: "white" }}>Cpes</p>
                            </a>  */}
                          </div>
                        ) : null}
                      </div>
                    );
                  } else if (label === "MarketPlace") {
                    return (
                      <div style={{ flexDirection: "row" }}>
                        <a
                          className={`nav-link ${isActive ? "active" : ""}`}
                          key={link}
                          onClick={() => handleMarket(link)}
                        >
                          {label}
                          <label style={{ marginLeft: "10px" }}>
                            {marketActive ? <ArrowUp /> : <ArrowDown />}
                          </label>
                        </a>
                        {marketActive ? (
                          <div style={{ backgroundColor: "#898989" }}>
                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() => navigate(`/admin/categories`)}
                            >
                              {console.log("dk", link)}
                              <p style={{ color: "white" }}>Categories</p>
                            </a>
                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() => navigate(`/admin/products`)}
                            >
                              {console.log("lk", link)}
                              <p style={{ color: "white" }}>Products</p>
                            </a>

                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() =>
                                navigate(`/admin/Service-categories`)
                              }
                            >
                              {console.log("dk", link)}
                              <p style={{ color: "white" }}>
                                Service Categories
                              </p>
                            </a>
                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() =>
                                navigate(`/admin/internetServices`)
                              }
                            >
                              {console.log("dk", link)}
                              <p style={{ color: "white" }}>
                                Service Packages
                              </p>
                            </a>
                            <a
                              className={`nav-link ${isActive ? "active" : ""}`}
                              key={link}
                              onClick={() => navigate(`/admin/promotions`)}
                            >
                              {console.log("dk", link)}
                              <p style={{ color: "white" }}>Promotions</p>
                            </a>
                          </div>
                        ) : null}
                      </div>
                    );
                  }
                  return (
                    <a
                      className={`nav-link ${isActive ? "active" : ""}`}
                      key={link}
                      onClick={() => navigate(`/${link}`)}
                    >
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>

        <div id="layoutSidenav_content">
          <div className="container-fluid">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
