import { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import SearchMeal from "./SearchMeal";
import priceMaking from "../helpers/priceMaking";
import addToCart from "../helpers/addToCart";
const Meals = () => {
  const context = useContext(MyContext);
  const { auth, category, cartItems, setCartItems } = context;

  const urlCat = `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const { results, loading, error } = useFetch(urlCat);
  console.log(useFetch(urlCat));

  const navigate = useNavigate();
  useEffect(() => {
    !auth && navigate("/");
  }, [auth, navigate]);
  if (loading) return <p>loading ..</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <SearchMeal />
      <div className="meals_container">
        {results.meals.map((item, index) => (
          <div className="meal_style" key={index}>
            <img className="img_meals" src={item.strMealThumb} alt="" />
            <button
              className="meals_btn"
              value={item.idMeal}
              onClick={(e) => navigate(`/ingredients/${e.target.value}`)}
            >
              {item.strMeal}
            </button>
            <button
              className="meals_btn"
              onClick={() => addToCart(item, cartItems, setCartItems)}
            >
              add to cart
            </button>
            <button>price : {priceMaking(item.idMeal / 10000)}$</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
