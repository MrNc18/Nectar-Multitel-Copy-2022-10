import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Corporate from "./containers/Corporate";
import Home from "./containers/Home";
import Example from "./staticCard";
import AdLanding from "./components/Admin/AdLanding";
import Categories from "./components/Admin/categories";
import Products from "./components/Admin/products";
import AddProduct from "./components/Admin/AddProduct";
import Dashboard from "./components/Admin/Dashboard";
import Settings from "./components/Admin/settings";
import StaticPage from "./components/Admin/staticPage";
import InternetServices from "./containers/InternetServices";
import Marketplace from "./containers/Marketplace";
import NetworkEquipments from "./containers/NetworkEquipments";
import Promotions from "./containers/Promotions";
import OtherProducts from "./containers/OtherProducts";
import ClientRegistration from "./containers/ClientRegistration";
import Account from "./containers/Account";
import CPE from "./containers/CPE";
// import Store from "./components/redux/Store";
import EditProfile from "./containers/EditProfile";
import MyProducts from "./containers/MyProducts";
import HelpDesk from "./containers/HelpDesk";
import Invoice from "./containers/Invoice";
import InvoiceDetails from "./containers/InvoiceDetails";
import InternetQualityGraph from "./containers/InternetQualityGraph";
import ForgotPassword from "./containers/ForgotPassword";
import ResetPassword from "./containers/ResetPassword";
import ProductDetail from "./containers/ProductDetail";
import VerifyEmail from "./containers/VerifyEmail";
import RegnConfirmation from "./containers/RegnConfirmation";
import Login from "./components/Admin/Login";
// import store from "./components/redux/store"
import { RedirectComponent } from "./containers/RedirectPage";
import AdPromotions from "./components/Admin/Promotions";
import AdinternetServices from "./components/Admin/internetServices"
import Category from "./containers/Category";




function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Corporate />} />
        <Route path="/home" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/products/:name" element={<ProductDetail />} />
        <Route path="/categories/:slug" element={<Category />} />
        <Route path="/network-equipments" element={<NetworkEquipments />} />
        <Route path="/internet-services" element={<InternetServices />} />        
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/otherproducts" element={<OtherProducts />} />
        <Route path="/register" element={<ClientRegistration />} />
        <Route path="/register-confirmation/:token" element={<RegnConfirmation />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/redirect" element={<RedirectComponent />} />


        <Route path="/cpe" element={<CPE />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdLanding />}>
          <Route path="" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products" element={<Products />} />
          <Route path="products/newproduct" element={<AddProduct />} />
          <Route path="staticpages" element={<StaticPage />} />
          <Route path="settings" element={<Settings />} />
          <Route path="internetServices" element={<AdinternetServices />} />
          <Route path="promotions" element={<AdPromotions />} />

        </Route>

         <Route path="/promotions" element={<Promotions />} />
         <Route path="/otherproducts" element={<OtherProducts />} />
          {/* <Route path="/admin" element={<AdLanding/>}> */}
         <Route path="/register" element={<ClientRegistration />} />
         <Route path="/profile" element={<Account />}/>
         <Route path="/editprofile" element={<EditProfile />}/>
         <Route path="/myproducts" element={<MyProducts />}/>
         <Route path="/helpdesk" element={<HelpDesk />} />
         <Route path="/invoice" element={<Invoice />} />
         <Route path="/invoicedetails" element={<InvoiceDetails />} />
         <Route path="/internetqualitygraph" element={<InternetQualityGraph />} />

         
         {/* {/* <Route path="/admin" element={<AdLanding/>}> */}
         <Route path="" element={<Dashboard />} />
         <Route path="/cpe" element={<CPE />} />
          <Route path="/admin" element={<AdLanding/>}>
            <Route path="" element={<Dashboard />} />
            <Route path="categories" element={<Categories />} />
            <Route path="products" element={<Products />}/>
            <Route path="products/newproduct" element={<AddProduct />} />
            <Route path="staticpages" element={<StaticPage />} />
            <Route path="settings" element={<Settings />} />
           </Route> 
      </Routes>
     
    </BrowserRouter>
    
  );
  
}

export default App;
