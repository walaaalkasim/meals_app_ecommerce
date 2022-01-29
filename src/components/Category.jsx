import { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import SearchMeal from "./SearchMeal";

const Category = () => {
  const context = useContext(MyContext);
  const { setCategory, auth } = context;
  const url = `https://themealdb.com/api/json/v1/1/categories.php`;

  const navigate = useNavigate();

  useEffect(() => {
    !auth && navigate("/");
  }, [auth, navigate]);

  const { results, loading, error } = useFetch(url);

  if (loading) return <p>loading ..</p>;
  if (error) return <p>{error}</p>;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    navigate("/meals");
  };

  return (
    <div className="cate-background">
      <SearchMeal />
      <span className="categories_container">
        {results.categories.map((item, index) => (
          <div className="category_home" key={index}>
            <img className="img_category" src={item.strCategoryThumb} alt="" />
            <button
              className="cat_btn"
              value={item.strCategory}
              onClick={handleCategory}
            >
              {" "}
              {item.strCategory}{" "}
            </button>
          </div>
        ))}
      </span>
    </div>
  );
};

export default Category;
