import priceMaking from "./priceMaking";
const calculateTotal = (cartItems) => {
  return cartItems.reduce(
    (acc, item) => acc + priceMaking(item.idMeal / 10000) * item.quantity,
    0
  );
};

export default calculateTotal;
