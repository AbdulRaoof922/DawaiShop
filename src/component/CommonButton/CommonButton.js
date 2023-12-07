import React from "react";
import { Link } from "react-router-dom";

function CommonButton({color}) {
  return (
    <div className="flex gap-4">
      <Link to="/commonbutton">
        <button className={`bg-[#003B82] hover:bg-blue-700 text-white font-bold h-8  w-full px-4 rounded lg:w-full  border-blue-700 ${color}`}>
          Order Now
        </button>
      </Link>
    </div>
  );
}

export default CommonButton;
