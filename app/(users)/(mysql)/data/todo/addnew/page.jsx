import React from "react";
import { FormAction } from "./form.action";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center text-center flex-col">
      <div className="flex justify-center items-center flex-col">
        <div className="text-3xl">Add New Item</div>
        <div>
          <div className="flex w-full justify-center">
            <Link href={"/data/todo"}>Back</Link>
          </div>
          <div className="bg-white mt-10 p-4 text-black w-100 min-h-50 rounded-3xl flex items-center justify-center border-2 border-solid flex-col">
            <div>
              <form className="space-y-4" action={FormAction}>
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
