import React from "react";
import { db } from "@/config/mysql";

export const revalidate = 60;

const page = async () => {
  const [todoData] = await db.execute("SELECT * FROM todo_db.tasks");

  return (
    <div className="flex justify-center text-center flex-col">
      <div>
        <p className="text-3xl m-5">Static Data from MySql</p>
      </div>
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
    </div>
  );
};

export default page;
