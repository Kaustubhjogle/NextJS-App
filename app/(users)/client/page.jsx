"use client";

import { useEffect, useState } from "react";

const ClientComponent = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  return (
    <div className="flex items-center flex-col">
      <h2>API Call in Client Component</h2>
      <div>
        <button
          className="p-2 m-2 bg-amber-900 rounded-lg w-30"
          onClick={() => {
            setShowData(!showData);
          }}
        >
          {showData ? "Hide" : "Show"} Data
        </button>
      </div>
      <div>
        {showData && (
          <>
            <ul>
              {data.map((item) => {
                return (
                  <li key={item.id}>
                    {item.id} : {item?.title}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ClientComponent;
