import { useContext } from "react";
import MyContext from "../context/MyContext";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import priceMaking from "../helpers/priceMaking";
import addToCart from "../helpers/addToCart";
const SearchResults = () => {
  const context = useContext(MyContext);
  const { search, cartItems, setCartItems } = context;
  const { results, loading, error } = useFetch(
    `https://themealdb.com/api/json/v1/1/search.php?s=${search}`
  );
  const navigate = useNavigate();
 

  console.log(results);
  if (loading) return <p>loading ..</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>search results</h3>
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
            </button>{" "}
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

export default SearchResults;
