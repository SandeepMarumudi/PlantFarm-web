import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Toast from "../loaders/Toast";

const Card = ({ data }) => {
  const dispatch=useDispatch()
  const { name, price, available, image } = data;

  const handleBuy=()=>{
    setTimeout(()=>{
      <Toast message={"Added to cart"}/>
    },3000)
  }
  return (
    <div className="card bg-base-100 w-60 shadow-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
      <figure className="relative">
        <img
          src={image}
          alt="Product"
          className="rounded-t-xl object-cover h-60 w-full"
        />
        {/* Availability Badge */}
        {available ? (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            In Stock
          </span>
        ) : (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Out of stock
          </span>
        )}
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title text-xl font-semibold">{name}</h2>
        {/* Price & Status */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">{price}</span>
          {available ? (
            <span className="text-sm font-medium text-gray-500">Available</span>
          ) : (
            <span className="text-sm font-medium text-gray-500">
              {" "}
              Not available
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full hover:scale-105 transition-transform duration-200" onClick={handleBuy}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
