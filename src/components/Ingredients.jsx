import { useContext } from "react";
import MyContext from "../context/MyContext";
import { useFetch } from "../hooks/useFetch";

const Ingredients = () => {
  const context = useContext(MyContext);
  const { mealId } = context;
  const urlIng = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  const { results, loading, error } = useFetch(urlIng);
  console.log(useFetch(urlIng));

  if (loading) return <p>loading ..</p>;
  if (error) return <p>{error}</p>;
  const item = results.meals[0];
  let i;
  let ingredient = [];
  let measures = [];
  for (i = 1; i < 20; ) {
    if (item[`strIngredient${i}`].length >= 1)
      ingredient.push(item[`strIngredient${i}`]);
    i++;
  }
  for (i = 1; i < 20; ) {
    if (item[`strMeasure${i}`].trim().length >= 1)
      measures.push(item[`strMeasure${i}`]);
    i++;
  }
  console.log(ingredient);
  return (
    <div className="ingredients_section_container">
      <h3 className="meal_header"> {item.strMeal}</h3>

      <h3>ingredients:</h3>
      <div className="ingredients_measures_container" key={item.idMeal}>
        <div>
          {ingredient.map((el) => (
            <li>{el}</li>
          ))}
        </div>
        <div>
          {measures.map((el) => (
            <li>{el}</li>
          ))}
        </div>
      </div>
      <div>
        <p className="meal_instructions">{item.strInstructions}</p>
      </div>
    </div>
  );
};

export default Ingredients;
