import React, { useState } from "react";

const Drawing = ({
  cart,
  drawer,
  setDrawer,
  handleRemove,
  handleOrder,
  order,
}) => {
  console.log(cart);
  console.log(order);
  if (order) {
    return (
      <>
        {drawer && (
          <p className="text-3xl absolute w-[90%] xl:w-[50%] right-0 bg-orange-200 min-h-screen z-10000 p-5">
            <button
              className="bg-orange-500 py-2 px-4 text-white w-10 text-sm"
              onClick={() => setDrawer(false)}
            >
              x
            </button>
            <br />
            Your order was successful!
          </p>
        )}
      </>
    );
  }

  return (
    <>
      {drawer && (
        <div className="absolute right-0 bg-orange-200 min-h-screen z-10000 p-5 flex flex-col overflow-y-scroll  w-[90%] xl:w-[50%]">
          <button
            className="bg-orange-500 py-2 px-4 text-white w-10"
            onClick={() => setDrawer(false)}
          >
            x
          </button>

          <div className="flex flex-col mt-10 gap-5">
            {cart?.map((e) => (
              <div
                key={e.idMeal}
                className="flex items-center bg-orange-300 rounded p-5 justify-between max-h-40"
              >
                <img src={e.strMealThumb} className="max-w-30 rounded" />
                <div className="wrapper flex flex-col sm:flex-row ml-5 sm:ml-0">
                  <p className="w-full sm:w-[50%]">{e.strMeal}</p>
                  <button
                    className="bg-red-600 text-white p-2"
                    onClick={() => {
                      handleRemove(e.idMeal);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="bg-green-500 text-white p-2 mt-5 inset-ring-2 inset-ring-transparent hover:bg-white hover:text-green-500 hover:inset-ring-green-500 transition"
            onClick={handleOrder}
          >
            Order
          </button>
        </div>
      )}
    </>
  );
};

export default Drawing;
