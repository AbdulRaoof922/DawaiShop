import React from "react";
import { Link } from 'react-router-dom';

function AddToCartButton() {
  return (
    <div className="w-full p-4">
      <Link to="/checkout">
      <button
        type="button"
        className="text-white bg-[#003B82] hover:bg-blue-700   focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2 inline-flex justify-center sm:w-[100%] w-full text-center"
      >
        Add To Cart
      </button>
      </Link>
      
    </div>
  );
}

export default AddToCartButton;
