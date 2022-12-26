import { useEffect, useContext } from "react";
import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";
import "./Home.scss";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import BannerImg from "../Banner/Banner";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  return (
    <div className="home">
      <Banner />
      <Category categories={categories} />
      <BannerImg />
      <Products headingText="Popular Products" products={products} />
    </div>
  );
};

export default Home;
