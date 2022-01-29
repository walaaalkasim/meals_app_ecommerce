import priceMaking from "./priceMaking";
const itemSum = (cartItems) => {
  const cartItemSum = [...cartItems];
  return cartItemSum.map(
    (item) => item.quantity * priceMaking(item.idMeal / 10000)
  );
};
export default itemSum;
