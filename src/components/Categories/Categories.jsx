import React from "react";

const Categories = ({ categories, onFilter, current }) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            className={`${
              category === current ? "active text-white" : ""
            } button button-sm`}
            style={{ marginInline: "6px" }}
            onClick={() => onFilter(category)}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </>
  );
};

export default Categories;
