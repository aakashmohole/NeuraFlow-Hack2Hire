import React from "react";

const LoadingSkeleton = () => (
  <div className="h-screen bg-gray-900 text-white flex flex-col">
    <div className="bg-gray-800 h-52 w-full flex items-center px-4 animate-pulse">
      <div className="h-8 w-[70%] mx-auto bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-md"></div>
    </div>
    <div className="bg-gray-800 w-full p-4 flex flex-col items-center gap-4 animate-pulse">
      <div className="h-10 w-full max-w-md bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-md"></div>
      <div className="flex justify-center gap-4 w-full max-w-3xl">
        <div className="h-10 w-28 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-md"></div>
        <div className="h-10 w-28 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-md"></div>
        <div className="h-10 w-28 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-md"></div>
      </div>
    </div>
    <div className="flex-1 bg-gray-900 overflow-y-auto px-4 py-6">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-md shadow-md p-4 animate-pulse"
          >
            <div className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 h-4 rounded-full w-2/3 mb-4"></div>
            <div className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 h-4 rounded-full w-1/2 mb-6"></div>
            <div className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 h-6 rounded-lg w-full mb-4"></div>
            <div className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 h-4 rounded-full w-3/4"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LoadingSkeleton;
