import React from "react";

const NationGuesspage = async (props) => {
  const paramData = await props.searchParams;
  const nameFromUrl = paramData.name;

  let responsefromApi;
  let firstGuessedNation;

  if (nameFromUrl) {
    const url = `https://api.nationalize.io/?name=${nameFromUrl}`;
    const response = await fetch(url);
    responsefromApi = await response.json();
    firstGuessedNation = responsefromApi?.country[0];
  }

  return (
    <div className="flex flex-col items-center m-2">
      <p className="text-3xl">NationGuess (Server)</p>
      <div className="m-4 h-70 bg-gray-300 p-4 rounded-2xl">
        {nameFromUrl ? (
          <div className="w-full h-full p bg-white rounded-2xl flex flex-col text-center items-center justify-center text-black px-8 py-2">
            <div>
              <p className="text-2xl mb-4">
                {nameFromUrl} : {firstGuessedNation.country_id} (
                {(firstGuessedNation.probability * 100).toFixed(2)}%)
              </p>
            </div>
            <div className="text-xl mb-4">
              {responsefromApi.country.map((i) => i.country_id).join(" > ")}
            </div>
            <div className="my-2">
              0%
              <input
                type="range"
                className="mx-2"
                defaultValue={firstGuessedNation.probability * 100}
              />
              100%
            </div>
            <div>{(firstGuessedNation.probability * 100).toFixed(2)}%</div>
          </div>
        ) : (
          <p className="flex items-center text-center h-full text-2xl text-black">
            Please enter ?name=yourname in the url
          </p>
        )}
      </div>
    </div>
  );
};

export default NationGuesspage;
