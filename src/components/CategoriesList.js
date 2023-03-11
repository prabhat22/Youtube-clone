import React from "react";

const CategoriesList = ({
  categoriesList,
  selectedCategory,
  categoryHandler,
}) => {
  return (
    <>
      {
        categoriesList.map((category) => {
          return (
            <div
              className={`flex text-sm bg-gray-200 py-2  px-3 text-center rounded-md hover:bg-gray-300 cursor-pointer w-max flex-shrink-0 h-max ${
                category.id == selectedCategory 
                  ? "bg-neutral-900 text-white hover:bg-neutral-900 dark:bg-red-300"
                  : ""
              }`}
              key={category.id}
              onClick={() => {
                categoryHandler(category.id)}}
            >
              {category.snippet.title}
            </div>
          );
        })}
    </>
  );
};

export default CategoriesList;
