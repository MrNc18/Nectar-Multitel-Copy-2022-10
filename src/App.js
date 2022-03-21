import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Corporate from "./containers/Corporate";
import Home from "./containers/Home";
import Example from "./staticCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Corporate />} />
        <Route path="/home" element={<Home />} />
         <Route path="/ex" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
