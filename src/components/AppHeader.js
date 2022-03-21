import React,{useState,useEffect} from "react";
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import "./Admin/admin.css"



export default function AppHeader(props) {
  const navigate = useNavigate();
  const [navState,setNavState] = useState(false)

  const handleLogout = () => {
    navigate("/");
  };


  const handleSideNav = () =>{
    setNavState(!navState)
    props.handleClick(navState)
  }

  return (
    <div className="sb-nav-fixed bg-light">
    <nav className="sb-topnav navbar navbar-expand">
      <a className="navbar-brand">
        <img className="img-fluid" src={logo} alt="" width="80%" />
      </a>
      <button 
       className="btn btn-link btn-lg order-1 order-lg-0"
       id="sidebarToggle" 
        onClick={()=>{handleSideNav()}}
        
      >
        <i className="fas fa-bars" ></i>
      </button>

      {/* <ul
        className="navbar-nav ml-auto ml-md-0"
        style={{ paddingLeft: "10px" }}
      >
        <li className="nav-item dropdown">
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <img
                src={thumb}
                className="circle"
                width="35px"
                height="35px "
                alt=""
              />
              <CaretDownOutlined />
            </a>
          </Dropdown>
        </li>
      </ul> */}
    </nav>
    </div>
  );
}
