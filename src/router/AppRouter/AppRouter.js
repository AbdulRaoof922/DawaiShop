import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "../../pages/HomePage/Homepage";

import LoginPage from "../../pages/LoginPage/LoginPage";
import SignupPage from "./../../pages/SignUpPage/SignupPage";
import BabyCareCategory from "./../../pages/CategoiesPage/BabyCareCategory";
import HealthCareCategory from "./../../pages/CategoiesPage/HealthCareCategory";
import OrganiceCategory from "./../../pages/CategoiesPage/OrganiceCategory";
import PersonalCategory from "./../../pages/CategoiesPage/PersonalCategory";
import LifeStyleCategory from "./../../pages/CategoiesPage/LifeStyleCategory";
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/BabyCareCategory" element={<BabyCareCategory />} />
        <Route path="/HealthCareCategory" element={<HealthCareCategory />} />
        <Route path="/OrganiceCategory" element={<OrganiceCategory />} />
        <Route path="/PersonalCategory" element={<PersonalCategory />} />
        <Route path="/LifeStyleCategory" element={<LifeStyleCategory />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
