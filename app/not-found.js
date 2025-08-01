import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center m-2">
      <div className="flex flex-col justify-center items-center m-2 mt-30">
        <span className="text-5xl m-4">404</span>
        <span className="text-2xl mb-2">Page Not Found</span>
        <span>Please check the Url</span>
      </div>
    </div>
  );
};

export default NotFoundPage;
