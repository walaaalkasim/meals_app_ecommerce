import { useContext } from "react";
import MyContext from "../context/MyContext";
import { useFetch } from "../hooks/useFetch";

const Meals = () => {
  const context = useContext(MyContext);
  const { category, handleMealId } = context;

  const urlCat = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const { results, loading, error } = useFetch(urlCat);
  console.log(useFetch(urlCat));

  if (loading) return <p>loading ..</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="meals_container">
      {results.meals.map((item, index) => (
        <div className="meal_style" key={index}>
          <img className="img_meals" src={item.strMealThumb} alt="" />
          <button
            className="meals_btn"
            value={item.idMeal}
            onClick={(e) => handleMealId(e)}
          >
            {item.strMeal}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Meals;
