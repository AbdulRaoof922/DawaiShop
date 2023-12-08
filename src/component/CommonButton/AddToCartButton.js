import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/Slice";

function AddToCartButton({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(product));
  };
  return (
    <div className="w-full p-4">
      <>
        <button
        onClick={handleAddToCart}
          type="button"
          className="text-white bg-[#003B82] hover:bg-blue-700   focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2 inline-flex justify-center sm:w-[100%] w-full text-center"
        >
          Add To Cart
        </button>
      </>
    </div>
  );
}

export default AddToCartButton;
