"use client";
import { capitilizeFirstLetter } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const NationGuesspage = (props) => {
  const apiUrl = "https://api.genderize.io/?name=";
  const nameFromUrl = useSearchParams().get("name");
  const [responseData, setResponseData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const guessGender = async () => {
      setLoading(true);
      const response = await fetch(apiUrl + nameFromUrl);
      const apiResponseData = await response.json();
      setResponseData(apiResponseData);
      setLoading(false);
    };
    if (nameFromUrl) guessGender();
  }, []);

  return (
    <div className="flex flex-col items-center m-2">
      <p className="text-3xl">GenderGuess (Client)</p>
      <div className="m-4 h-70 bg-gray-300 p-4 rounded-2xl w-[25em]">
        <div className="w-full h-full p bg-white rounded-2xl flex flex-col text-center items-center justify-center text-black px-8 py-2">
          {loading && nameFromUrl ? (
            <p className="text-2xl mb-4">Loading...</p>
          ) : nameFromUrl && !loading ? (
            <>
              <div>
                <p className="text-2xl mb-4 flex flex-col">
                  <span className="text-4xl font-bold mb-2">
                    {capitilizeFirstLetter(nameFromUrl)}
                  </span>
                  <span>{capitilizeFirstLetter(responseData.gender)}</span>
                </p>
              </div>
              <div className="my-2">
                Male
                <input
                  type="range"
                  className={`mx-2 ${
                    responseData?.gender === "male"
                      ? "accent-blue-500"
                      : "accent-pink-400"
                  }`}
                  defaultValue={responseData?.gender === "male" ? 0 : 100}
                />
                Female
              </div>
              <div>{(responseData.probability * 100).toFixed(2)}%</div>
            </>
          ) : (
            <p className="flex items-center text-center h-full text-2xl text-black">
              Please enter ?name=yourname in the url
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NationGuesspage;
