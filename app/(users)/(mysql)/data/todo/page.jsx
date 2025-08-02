import React from "react";
import { db } from "@/config/mysql";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Todo List",
};

const page = async () => {
  const [todoData] = await db.execute("SELECT * FROM todo_db.tasks");

  return (
    <div className="flex justify-center text-center flex-col">
      <div className="flex justify-center items-center flex-col">
        <div className="text-3xl">Todo List Page</div>
        <div className="bg-white mt-10 p-4 text-black w-100 min-h-50 rounded-3xl flex items-center justify-center border-2 border-solid flex-col">
          <div>
            <ul className="text-left p-4 text-xl">
              {todoData.map((item) => {
                return (
                  <div className="m-2 hover:text-red-800" key={item?.id}>
                    <Link href={`/data/todo/${item?.id}`}>
                      <li key={item?.id}>
                        {item?.id} : {item?.title}
                      </li>
                    </Link>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="text-left w-full">
            <Link href="/data/todo/addnew">
              <button className="rounded-3xl bg-sky-500 px-5 py-2 text-sm text-white hover:bg-sky-700">
                Add More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
