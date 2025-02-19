import React from "react";
import "./App.css";
import Home from "./pages/homePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" />
          <Route path="/signup" />
          <Route path="/dashboard" />
          <Route path="/help" />
        </Routes>
      </>
    </Router>
  );
};

export default App;
