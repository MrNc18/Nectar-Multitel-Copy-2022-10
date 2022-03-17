import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Corporate from "./containers/Corporate";
import Home from "./containers/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/corporate" element={<Corporate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
