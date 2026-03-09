import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Cart = ({ product }) => {
  const [count, setCount] = useState(1);

  return (
    <>
      <div></div>

      <div className="  ">
        <div className="w-75 my-5">
          <div className="">
            <img
              src={product.image}
              className="w-100 h-60 rounded-2xl rounded-b-none"
              alt="Car-Toy-img"
            />
          </div>
          <div className="text-sm text-gray-600 bg-gray-200 px-5 py-5 rounded-2xl rounded-t-none">
            <h1 className="text-xl text-black font-bold">{product.name}</h1>
            <div className="text-[10px] space-y-1">
              <p className="text-sm">Rechargeable</p>

              <p className="flex text-sm text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
              <p className="text-lg text-blue-500 mb-2">₹ {product.price}</p>
            </div>
            <hr />
            <div className="space-x-2 flex justify-center items-center mt-2">
              <button
                className="bg-red-500 text-lg font-extrabold px-3 items-center text-white rounded-full"
                onClick={() => setCount(() => Math.max(1, count - 1))}>
                -
              </button>
              <span className="px-4 items-center font-bold text-black ">
                {count}
              </span>
              <button
                className="bg-green-500 text-lg font-extrabold px-3 items-center text-white rounded-full"
                onClick={() => setCount(() => count + 1)}>
                +
              </button>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-black font-medium mt-2 items-center ">
                Total:
                <span className="font-bold text-lg items-center px-2">
                  ₹{product.price * count}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
