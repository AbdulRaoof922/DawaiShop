import React from "react";
import {  RiShoppingBag3Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import dawai from "../../assets/dawai.png";
import { Link } from "react-router-dom";

function Header() {
  const totalQuantity = useSelector((e) => e.cart.totalQuantity); 

  return (
    <div className="bg-[#003B82] text-white flex sm:justify-between items-center p-4 sm:h-24 ">
      <div className="flex items-center space-x-3 sm:w-2/5 lg:h-2">
        <img src={dawai} alt="dawai image" className="h-8" />
        <input
          type="text"
          placeholder="Search Medicine..."
          className="p-2 text-black rounded-md sm:w-full"
        />
      </div>

      <div className="flex items-center space-x-1">
        <Link to="/LoginPage" className="text-sm">
          Sign in
        </Link>
        <span>|</span>
        <Link to="/SignupPage" className="text-sm">
          Sign Up
        </Link>
        <Link to="/cartpage" className="relative flex items-center ml-4">
          <RiShoppingBag3Fill size={25} className="text-[#E9EDF4]" />
          <div className="absolute top-[-6px] right-[-6px] lg:top-[-10px] lg:right-[-10px] h-4 w-4 lg:h-5 lg:w-5 rounded-full bg-[#FB5F50] flex items-center justify-center">
            <p className="text-xs">{totalQuantity}</p> 
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
