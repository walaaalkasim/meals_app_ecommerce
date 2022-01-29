const reduceQuantity = (item, cartItems, setCartItems) => {
  const found = cartItems.find((el) => el.idMeal === item.idMeal);
  const index = cartItems.indexOf(found);
  found.quantity -= 1;
  let copyCartItems = [...cartItems];
  found.quantity >= 1
    ? copyCartItems.splice(index, 1, found)
    : copyCartItems.splice(index, 1);
  setCartItems(copyCartItems);
};
export default reduceQuantity;
