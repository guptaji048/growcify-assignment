import React, { useState, createContext, useEffect } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    return fetch('https://api.growcify.com/dev/category/list')
      .then(response => response.json())
      .then(data => {
        const temp = data.filter((cate) => cate.parent ? null : cate)
        setCategoryList(temp);
      });
  }, [])

  return (
    <CategoryContext.Provider
      value={{ categoryList, setCategoryList }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};