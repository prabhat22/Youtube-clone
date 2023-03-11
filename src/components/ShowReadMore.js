import React, { useState } from "react";

const ShowReadMore = ({ description, limit, isReadMore, setIsReadMore }) => {
  const showLessDesc = (
    <>
      {description?.substring(0, limit)}{" "}
      <span
        className="font-bold cursor-pointer"
        onClick={() => {
          setIsReadMore((state) => !state);
        }}
      >
        Show more
      </span>
    </>
  );
  const showMoreDesc = (
    <>
      {description}
      <span
        className="font-bold cursor-pointer block"
        onClick={() => {
          setIsReadMore((state) => !state);
        }}
      >
        Show less
      </span>
    </>
  );
  return (
    <>
      {description?.length < limit
        ? description
        : isReadMore && description?.length > limit
        ? showLessDesc
        : showMoreDesc}
    </>
  );
};

export default ShowReadMore;
