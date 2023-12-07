import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Homepage from "../../pages/HomePage/Homepage";
import CommonCard from "./../../component/CommonCard/CommonCard";
import PopularProductCard from "../../component/CommonCard/PopularProductCard";
import AddToCartButton from "../../component/CommonButton/AddToCartButton";
import BrandCard from "../../component/CommonCard/BrandCard";
import LoginPage from "../../pages/LoginPage/LoginPage";
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
       <Route path="/LoginPage" element= {<LoginPage />} />

      </Routes>
    </Router>
  );
}

export default AppRouter;
