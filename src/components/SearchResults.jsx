import { useContext } from "react";
import MyContext from "../context/MyContext";
import { useFetch } from "../hooks/useFetch";

const SearchResults = () => {
  const context = useContext(MyContext);
  const { handleMealId, search } = context;
  const { results, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  );
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
              onClick={(e) => handleMealId(e)}
            >
              {item.strMeal}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
