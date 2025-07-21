"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const ProductList = () => {
  const paramData = useSearchParams();
  const brandArr = paramData.getAll("brand");

  return (
    <div className="text-xl m-2">
      ProductList
      {brandArr && (
        <div>
          Brands:
          {brandArr?.map((item) => {
            return item + " ";
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
