import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import { Routes } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Auth from "./components/auth";
import PaymentForm from "./components/PaymentForm";
import Button from "./Button/Button";
import Register from "./components/registration";
import Lhome from "./components/lhome";
import Go from "./components/go";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/button" element={<Button />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Go />} />
        <Route path="/lhome" element={<Lhome />} />
      </Routes>
    </Router>
  );
}

export default App;
