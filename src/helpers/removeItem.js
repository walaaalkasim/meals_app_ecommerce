const removeItem = (item, cartItems, setCartItems) => {
  const found = cartItems.find((el) => el.id === item.id);

  const index = cartItems.indexOf(found);

  let copyCartItems = [...cartItems];

  copyCartItems.splice(index, 1);

  setCartItems(copyCartItems);
};

export default removeItem;
