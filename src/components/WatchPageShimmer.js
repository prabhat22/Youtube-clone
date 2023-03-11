import React from "react";

const WatchPageShimmer = () => {
  return (
    <div className="">
      <div className="w-full relative overflow-hidden h-96 mb-5 animate-pulse bg-gray-400"></div>
      <div className="grid grid-flow-col gap-2">
        <div className="col-span-6">
          <p className="leading-relaxed mb-3 w-1/3 h-4 animate-pulse bg-gray-400"></p>
          <p className="leading-relaxed mb-3 w-1/2 h-10 animate-pulse bg-gray-400"></p>
        </div>
        <div className="col-span-6">
          <div className="flex flex-col items-center max-h-[400px] overflow-y-scroll [@media(max-width:1400px)]:scrollbar-hide">
            {Array(10)
              .fill("")
              .map((item, index) => {
                return (
                  <div
                    className="flex border-2 border-gray-200 rounded-lg  w-1/2 items-center"
                    key={index}
                  >
                    <div className="h-32 bg-gray-300 w-full object-cover object-center"></div>
                    <p className="leading-relaxed mb-3 w-1/3 h-4 animate-pulse bg-gray-400"></p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPageShimmer;
