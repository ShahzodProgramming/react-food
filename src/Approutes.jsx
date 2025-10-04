import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Categories } from "./components/categories";
import { MealCategory } from "./pages/MealCategory";
import { Recipe } from "./pages/Recipe";
import Navbar from "./components/Navbar";
import MyLoader from "./components/ReactSkeleton";
import { HomePage } from "./pages/HomePage";
import Drawing from "./components/Drawing";

export const Approutes = ({ data, error, loading }) => {
  const categories = data?.categories || [];
  const localCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(localCart ? localCart : []);

  const [order, setOrder] = useState(false);
  const handleAdd = (item) => {
    setCart([...cart, item]);
  };
  const handleRemove = (itemID) => {
    setCart(cart.filter((e) => e.idMeal !== itemID));
  };

  const handleOrder = () => {
    if (cart && cart.length >= 1) {
      setCart([]);
      console.log("Order successful");
      setOrder(true);
    } else {
      alert("Please order something");
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [drawer, setDrawer] = useState(false);
  return (
    <div>
      <Drawing
        cart={cart}
        drawer={drawer}
        setDrawer={setDrawer}
        handleRemove={handleRemove}
        handleOrder={handleOrder}
        order={order}
      />
      <Navbar setDrawer={setDrawer} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="categories"
          element={
            <Categories data={categories} loading={loading} error={error} />
          }
        />
        <Route
          path="meal/:category"
          element={
            <MealCategory
              handleAdd={handleAdd}
              cart={cart}
              handleRemove={handleRemove}
            />
          }
        />
        <Route
          path="recipe/:recipeID"
          element={
            <Recipe
              handleAdd={handleAdd}
              cart={cart}
              handleRemove={handleRemove}
            />
          }
        />
      </Routes>
    </div>
  );
};
