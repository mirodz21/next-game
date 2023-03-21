import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategy = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
);

export const selectCategories = createSelector([selectCategy], (categories) =>
  categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
