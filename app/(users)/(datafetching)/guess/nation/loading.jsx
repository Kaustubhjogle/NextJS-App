import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center text-center items-center h-full mt-50">
      <LoadingSpinner />
    </div>
  );
};

export default loading;
