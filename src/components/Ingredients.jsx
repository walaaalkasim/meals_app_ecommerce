import { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import priceMaking from "../helpers/priceMaking";
import addToCart from "../helpers/addToCart";

const Ingredients = () => {
  const context = useContext(MyContext);
  const { auth, cartItems, setCartItems } = context;
  const { id } = useParams();
  const urlIng = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { results, loading, error } = useFetch(urlIng);

  console.log(results);
  const navigate = useNavigate();
  useEffect(() => {
    !auth && navigate("/");
  }, [auth, navigate]);
  if (loading) return <p>loading ..</p>;
  if (error) return <p>{error}</p>;
  if (results.meals[0].length === 0) return;
  const item = results.meals[0];

  let i;
  let ingredient = [];

  for (i = 1; i < 20; ) {
    if (item[`strIngredient${i}`] !== null) {
      if (item[`strIngredient${i}`].length >= 1) {
        ingredient.push(item[`strIngredient${i}`]);
      }
    }
    i++;
  }

  return (
    <div className="ingredients_section_container">
      <h3 className="meal_header"> {item.strMeal}</h3>

      <h3>ingredients:</h3>
      <div className="ingredients_measures_container" key={item.idMeal}>
        <div>
          {ingredient.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </div>
        <img className="img_meals_ingredients" src={item.strMealThumb} alt="" />{" "}
        <div>price : {priceMaking(item.idMeal / 10000)} $ </div>
        <button
          className="cart-btn-ing"
          onClick={() => addToCart(item, cartItems, setCartItems)}
        >
          {" "}
          add to cart
        </button>{" "}
        <button className="return-btn" onClick={() => navigate(-1)}>
          Return
        </button>
      </div>
    </div>
  );
};

export default Ingredients;
