import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../context/MyContext";
import priceMaking from "../helpers/priceMaking";

import removeItem from "../helpers/removeItem";
import calculateItemSum from "../helpers/calculateItemSum";
import calculateTotal from "../helpers/calculateTotal";

const Checkout = () => {
  const context = useContext(MyContext);
  const {  cartItems, setCartItems } = context;
  const navigate = useNavigate();
 
  const itemSum = calculateItemSum(cartItems);
  const Total = calculateTotal(cartItems);

  if (cartItems.length === 0)
    return (
      <main>
        <section className="cart-no-items">
          <p className="alert-message">There are no items to checkout</p>
          <button className="return-btn" onClick={() => navigate("/meals")}>
            Return
          </button>
        </section>
      </main>
    );

  const mealsList = cartItems.map((item, index) => {
    return (
      <aside key={item.idMeal} className="cart-line">
        <img
          className="img-checkout"
          src={item.strMealThumb}
          alt={item.strMeal}
        />
        <aside className="cart-text">
          <h5>{item.strMeal}</h5>
          <p>
            Qty <span>{item.quantity}</span>
          </p>
          <p>{priceMaking(item.idMeal / 10000).toFixed(2)} $</p>
          <h4> Total: {itemSum[index].toFixed(2)}</h4>
        </aside>
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
      <section className="cart-page">
        {mealsList}
        <aside className="checkout-aside">
          <p className="total-check">
            Total to be paid <span>€{Total.toFixed(2)}</span>
          </p>
          <Link to="/orderPlaced">
            <button className="return-btn">Place your order</button>
          </Link>
          <button className="return-btn" onClick={() => navigate("/meals")}>
            Return
          </button>
        </aside>
      </section>
    </main>
  );
};

export default Checkout;
