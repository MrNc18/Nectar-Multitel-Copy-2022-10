import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Corporate from "./containers/Corporate";
import Home from "./containers/Home";
import Example from "./staticCard";
// import Example from "./containers/example";
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
import AdinternetServices from "./components/Admin/internetServices";
import Category from "./containers/Category";
import PromotionDetail from "./containers/PromotionDetail";
import InternetServicesDetail from "./containers/InternetServicesDetail";
import Contact from "./components/Admin/Contact";
import IpTelephony from "./containers/IpTelephony";
import NetworkEquipmentVendors from "./containers/NetworkEquipmentVendors";
import ContactPromotion from "./containers/ContactPromotion";
import ContactOtherProductSerPart from "./containers/ContactOtherProductSerPart";
import ContactTelecom from "./containers/ContactTelecom";
import ContactEquip from "./containers/ContactEquip";
import ContactCPE from "./containers/ContactCPE";
import InformaticAndAccessories from './containers/InformaticAndAccessories';
import ServicesCategory from './components/Admin/ServicesCategory';

import VendorDetails from "./containers/VendorDetails";
import Cart from "./containers/Cart";
import Checkout from "./containers/Checkout";
import PaymentMethod from "./containers/PaymentMethod";


function App() {
  return (
    <>
    <ToastContainer
    transition={Slide}
    position="bottom-center"
    hideProgressBar
    newestOnTop={false}
  />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Corporate />} />
        <Route path="/home" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/products/:name" element={<ProductDetail />} />
        <Route path="/categories/:slug" element={<Category />} />
        {/* <Route path="/network-equipments" element={<NetworkEquipments />} /> */}
        {/* <Route path="/internet-services" element={<InternetServices />} />    */}
        <Route
          path="/categories/internet-services/:tag"
          element={<InternetServicesDetail />}
        />
        <Route
          path="/categories/promotions/:slug"
          element={<PromotionDetail />}
        />
        {/* <Route path="/otherproducts" element={<OtherProducts />} /> */}
        <Route path="/register" element={<ClientRegistration />} />
        <Route
          path="/register-confirmation/:token"
          element={<RegnConfirmation />}
        />
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
          <Route path="contact" element={<Contact />} />
          <Route path="Service-categories" element={<ServicesCategory />} />
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
         <Route path="/iptelephony" element={<IpTelephony />} />
         <Route path="/informaticandaccesories" element={<InformaticAndAccessories />} />
         <Route path="/networkequipmentvendors" element={<NetworkEquipmentVendors />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/otherproducts" element={<OtherProducts />} /> 
        {/* <Route path="/admin" element={<AdLanding/>}> */}
        <Route path="/register" element={<ClientRegistration />} />
         <Route path="/contactpromotion" element={<ContactPromotion />} />
         <Route  path="/contactotherproductserpart" element={<ContactOtherProductSerPart />}/>
         <Route  path="/contacttelecom" element={<ContactTelecom/>} />
         <Route  path="/contactequip" element={<ContactEquip/>}/>
         <Route  path="/contactcpe" element={<ContactCPE/>}/>
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/otherproducts" element={<OtherProducts />} />
        <Route path="/register" element={<ClientRegistration />} />
        <Route path="client" element={<Example />} />
        <Route path="profile" element={<Account />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="payment-methods" element={<PaymentMethod />} />

{/* Contact Routes */}
        <Route path="contacts/:cat" element={<VendorDetails />} />


{/* admin Routes */}
        {/* <Route path="/admin" element={<AdLanding />}>
          <Route path="" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products" element={<Products />} />
          <Route path="products/newproduct" element={<AddProduct />} />
          <Route path="staticpages" element={<StaticPage />} />
          <Route path="settings" element={<Settings />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
