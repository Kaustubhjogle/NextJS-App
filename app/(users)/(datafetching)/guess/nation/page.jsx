import React, { Suspense } from "react";
import NationGuesspage from "./NationGuessPage";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";

const page = async (props) => {
  const paramData = await props.searchParams;
  const nameFromUrl = paramData.name;

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="flex w-1/2 justify-center items-center">
        This is a Page for Guessing Nation of the Name
      </div>
      <div className="flex w-1/2 justify-center items-center">
        <Suspense fallback={<LoadingSpinner />}>
          <NationGuesspage name={nameFromUrl} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
