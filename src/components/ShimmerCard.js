import React from "react";

const ShimmerCard = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 ">
        {Array(10)
          .fill("")
          .map((item, index) => {
            return (
              <div className="border-2 border-gray-200 rounded-lg overflow-hidden w-56" key={index}>
                <div className=" h-32 bg-gray-300 w-full object-cover object-center"></div>
                <div className="p-3 mb-1">
                  <p className="leading-relaxed mb-3 w-full h-2 animate-pulse bg-gray-400"></p>
                  <p className="leading-relaxed mb-3 w-full h-2 animate-pulse bg-gray-400"></p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ShimmerCard;
