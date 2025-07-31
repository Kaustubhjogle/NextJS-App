"use client";
import { capitilizeFirstLetter } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";

const GenderGuessContent = () => {
  const apiUrl = "https://api.genderize.io/?name=";
  const paramData = useSearchParams();

  const [responseData, setResponseData] = useState({});
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();

  useEffect(() => {
    const nameFromUrl = paramData.get("name");
    setName(nameFromUrl);
  }, [paramData]);

  useEffect(() => {
    if (!name) return;
    const guessGender = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl + name);
        const apiResponseData = await response.json();
        setResponseData(apiResponseData);
      } catch (error) {
        setResponseData({});
      }
      setLoading(false);
    };
    guessGender();
  }, [name]);

  if (!name) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              No Name Provided
            </h1>
            <p className="text-gray-600">
              Please add ?name=yourname to the URL
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center m-2">
      <p className="text-3xl">GenderGuess (Client)</p>
      <div className="m-4 h-70 bg-gray-300 p-4 rounded-2xl w-[25em]">
        <div className="w-full h-full p bg-white rounded-2xl flex flex-col text-center items-center justify-center text-black px-8 py-2">
          {loading && name ? (
            <p className="text-2xl mb-4">Loading...</p>
          ) : name && !loading && responseData.gender ? (
            <>
              <div>
                <p className="text-2xl mb-4 flex flex-col">
                  <span className="text-4xl font-bold mb-2">
                    {capitilizeFirstLetter(name)}
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

const NationGuesspage = () => (
  <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
    <GenderGuessContent />
  </Suspense>
);

export default NationGuesspage;
