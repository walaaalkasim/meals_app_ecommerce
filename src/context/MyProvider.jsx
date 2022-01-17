import { useState } from "react";

import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [mealId, setMealID] = useState("");
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleMealId = (e) => {
    setMealID(e.target.value);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  console.log(mealId);

  return (
    <MyContext.Provider
      value={{
        handleCategory,
        category,
        mealId,
        handleMealId,
        handleChange,
        handleSubmit,
        input,
        search,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
