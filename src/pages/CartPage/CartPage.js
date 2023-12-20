import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeitem } from "../../redux/Slice";
export default function CartPage() {
  const arraydata=useSelector((state)=>state.cart.items)
  const dispatch=useDispatch();
  const removefromcart=(id)=>{
    dispatch(removeitem(id))
    
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full max-w-lg p-4 bg-white shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
          <button type="button" className="text-gray-400 hover:text-gray-500">
            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <ul className="mt-8 divide-y divide-gray-200">
          {arraydata.map((product) => (
            <li key={product.id} className="flex py-6">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md"
              />
              <div className="flex flex-col ml-4">
                <span className="text-base font-medium text-gray-900">
                  {product.name}
                </span>
                <span className="text-sm text-gray-500">{product.color}</span>
                <span className="text-sm font-medium text-gray-900">
                  {product.price}
                </span>
                <div className="flex items-center justify-between text-sm ">
                  <select className="mt-3 border" >
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                  </select>
                  <div className="flex">
                    <button
                      type="button"
                      onClick={()=>removefromcart(product.id)}
                      className="font-medium text-indigo-600 hover:text-indigo-500 px-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button
            type="button"
            className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
