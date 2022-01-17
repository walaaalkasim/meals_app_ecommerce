import { useContext } from "react";
import "./App.css";
import Category from "./components/Category";
import Meals from "./components/Meals";
import MyContext from "./context/MyContext";
import Ingredients from "./components/Ingredients";
import SearchMeal from "./components/SearchMeal";

import SearchResults from "./components/SearchResults";
const App = () => {
  const context = useContext(MyContext);
  const { category, mealId, search } = context;
  return (
    <main>
      <h1>Welcome to Recipes App</h1>
      <SearchMeal />
      <Category />
      <br />

      {category && <Meals />}
      <br />
      {search && <SearchResults />}
      {mealId && <Ingredients />}
    </main>
  );
};

export default App;
