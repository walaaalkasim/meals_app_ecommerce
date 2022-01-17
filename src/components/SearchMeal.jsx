import { useContext } from "react";
import MyContext from "../context/MyContext";

const SearchMeal = () => {
  const context = useContext(MyContext);
  const { handleChange, handleSubmit, input } = context;

  return (
    <form>
      <input
        placeholder="Recipe Name"
        type="text"
        maxLength="20"
        value={input}
        onChange={(e) => handleChange(e)}
      />
      <button className="search_btn" onClick={(e) => handleSubmit(e)}>
        search
      </button>
    </form>
  );
};

export default SearchMeal;
