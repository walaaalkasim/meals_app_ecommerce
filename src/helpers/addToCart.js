import React from "react";

const addToCart = (item, cartItems, setCartItems) => {
  const found = cartItems.find((el) => el.idMeal === item.idMeal);
  if (found === undefined) {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  } else {
    const index = cartItems.indexOf(found);
    found.quantity += 1;
    let copyCartItems = [...cartItems];
    copyCartItems.splice(index, 1, found);
    setCartItems(copyCartItems);
  }
};

export default addToCart;
