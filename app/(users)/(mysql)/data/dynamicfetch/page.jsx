import React from "react";
import { cache } from "react";
import { db } from "@/config/mysql";

export const dynamic = "force-dynamic";

const getData = cache(async () => {
  console.log("Getting data");
  const [todoData] = await db.execute("SELECT * FROM todo_db.tasks");
  return todoData;
});

const page = async () => {
  const todoData = await getData();
  return (
    <div className="flex justify-center text-center flex-col">
      <div>
        <p className="text-3xl m-5">Dynamic Data from MySql</p>
        <p className="text-xl m-2">{todoData?.length} Items</p>
        <ListComponent />
      </div>
    </div>
  );
};

const ListComponent = async () => {
  const todoData = await getData();
  return (
    <div>
      <ul>
        {todoData.map((item) => {
          return (
            <li key={item?.id}>
              {item?.id} : {item?.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
