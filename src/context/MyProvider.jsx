import { useState } from "react";

import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [mealId, setMealID] = useState("");
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);
  console.log(mealId);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
 const USER = process.env.REACT_APP_USER;
  const PASSWORD = process.env.REACT_APP_PASSWORD;
  const [form, setForm] = useState({ user: "", password: "" });
  const [auth, setAuth] = useState(false);
  const handleFormInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    form.user === USER && form.password === PASSWORD
     ? setAuth(true)
      : setAuth(false);

    setForm({ user: "", password: "" });
  };
  return (
    <MyContext.Provider
      value={{
        cartItems,
        setCartItems,
        setCategory,

      //   auth,
       //  handleFormInput,
       //  handleFormSubmit,
      //  form,
       category,
        setInput,
        setMealID,
        mealId,
        handleChange,
        setSearch,
        input,
        search,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
