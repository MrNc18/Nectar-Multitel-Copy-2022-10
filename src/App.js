import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./containers/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
