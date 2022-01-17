import { useContext } from "react";
import MyContext from "../context/MyContext";
import { useFetch } from "../hooks/useFetch";

const Category = () => {
  const context = useContext(MyContext);
  const { handleCategory } = context;
  const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

  const { results, loading, error } = useFetch(url);
  console.log(results);

  if (loading) return <p>loading ..</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <span className="categories_container">
        {results.categories.map((item, index) => (
          <div className="category_home" key={index}>
            <img className="img_category" src={item.strCategoryThumb} alt="" />
            <button
              className="cat_btn"
              value={item.strCategory}
              onClick={(e) => handleCategory(e)}
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
