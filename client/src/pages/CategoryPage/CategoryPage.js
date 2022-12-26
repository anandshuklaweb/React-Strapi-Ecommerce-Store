import { useNavigate } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import "./CategoryPage.scss";
import { useContext, useEffect } from "react";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { categories, setCategories } = useContext(Context);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  return (
    <div className="shop-by-category">
      <h1 className="cat-title-main"> Shop by Category</h1>
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_BASE_URL +
                item?.attributes?.img?.data?.attributes?.url
              }
              alt=""
            />
            <h1 className="cat-title">{item?.attributes?.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
