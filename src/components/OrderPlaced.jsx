import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MyContext from "../context/MyContext";

const OrderPlaced = () => {
  const context = useContext(MyContext);
  const { setCartItems } = context;
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]);

  return (
    <main>
      <section className="orders-placed">
        <p className="alert-message">Order Placed</p>
        <button className="return-btn" onClick={() => navigate("/category")}>
          Carry on shopping
        </button>
      </section>
    </main>
  );
};

export default OrderPlaced;
