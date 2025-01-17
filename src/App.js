import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navebar/Navbar";
import Card from "./components/pages/Card/Card";
import Home from "./components/pages/Home/Home";
import Order from "./components/pages/Order/Order";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/Loginpopup/LoginPopup";
function App() {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
