import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Corporate from "./containers/Corporate";
import Home from "./containers/Home";
import Example from "./staticCard";
import AdLanding from "./components/Admin/AdLanding";
import Mobile from "./components/Admin/Mobile";
import Internet from "./components/Admin/Internet";
import Dashboard from "./components/Admin/Dashboard";
import NetworkEqui from "./components/Admin/NetworkEqui";
import Router from "./components/Admin/Router";
import InternetServices from "./containers/InternetServices";
import Marketplace from "./containers/Marketplace"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Corporate />} />
        <Route path="/home" element={<Home />} />
         {/* <Route path="/ex" element={<Example />} /> */}

         <Route path="/marketplace" element={<Marketplace/>}/>
         <Route path="/internet-services" element={<InternetServices />} />
          <Route path="/admin" element={<AdLanding/>}>
         <Route path="" element={<Dashboard />} />
            <Route path="mobiles" element={<Mobile />} />
            <Route path="internet" element={<Internet />} />
            <Route path="router" element={<Router />} />
            <Route path="network" element={<NetworkEqui />} />
           </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
