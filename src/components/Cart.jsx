import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import calculateItemSum from "../helpers/calculateItemSum";
import priceMaking from "../helpers/priceMaking";
import addToCart from "../helpers/addToCart";

import reduceQuantity from "../helpers/reduceQuantity";
import removeItem from "../helpers/removeItem";

const Cart = () => {
  const context = useContext(MyContext);
  const { auth, cartItems, setCartItems } = context;
  const navigate = useNavigate();
  useEffect(() => {
    !auth && navigate("/");
  }, [auth, navigate]);
  const itemSum = calculateItemSum(cartItems);

  if (cartItems.length === 0)
    return (
      <main>
        <section>
          <p className="alert-message">there are no items in your cart</p>
          <button className="return-btn" onClick={() => navigate(-1)}>
            return
          </button>
        </section>
      </main>
    );
  const mealsList = cartItems.map((item, index) => {
    return (
      <aside className="cart-container" key={item.idMeal}>
        <img className="img-cart" src={item.strMealThumb} alt={item.strMeal} />
        <aside>
          <h5>{item.strMeal}</h5>
          <p>
            qty <span>{item.quantity}</span>
          </p>
          <p>{priceMaking(item.idMeal / 10000).toFixed(2)} $</p>
          <h4>item sum {itemSum[index].toFixed(2)}</h4>
        </aside>
        <button
          className="return-btn"
          onClick={() => addToCart(item, cartItems, setCartItems)}
        >
          +
        </button>{" "}
        <button
          className="return-btn"
          onClick={() => reduceQuantity(item, cartItems, setCartItems)}
        >
          -
        </button>{" "}
        <button
          className="return-btn"
          onClick={() => removeItem(item, cartItems, setCartItems)}
        >
          Remove item
        </button>
      </aside>
    );
  });
  return (
    <main>
      <section>{mealsList}</section>
    </main>
  );
};

export default Cart;
