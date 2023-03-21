import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocs } from "../../utils/firebase/firebase-utilities";
import { setCategories } from "../../store/categories/category.reducer";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoriesArray = await getCategoriesAndDocs("categories");
      dispatch(setCategories(categoriesArray));
    };
    getCategoryMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
