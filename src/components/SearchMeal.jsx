import { useContext } from "react";
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";

const SearchMeal = () => {
  const context = useContext(MyContext);
  const { setInput, handleChange, setSearch, input } = context;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
    navigate("/searchResults");
    setInput("");
  };

  return (
    <form>
      <input
        placeholder="Recipe Name"
        type="text"
        maxLength="20"
        value={input}
        onChange={(e) => handleChange(e)}
      />
      <button className="search_btn" onClick={handleSubmit}>
        search
      </button>
    </form>
  );
};

export default SearchMeal;
