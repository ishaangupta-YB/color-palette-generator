import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse bg-blue-500"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-blue-500" style={{ animationDelay: "0.2s" }}></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-blue-500" style={{ animationDelay: "0.4s" }}></div>
    </div>
  );
};

export default Loader;