import { db } from "@/config/mysql";
import { notFound } from "next/navigation";
import React from "react";

const getToDoParticularData = async (id) => {
  const [response] = await db.execute(
    `SELECT * FROM todo_db.tasks where id='${id}'`
  );
  return response[0];
};

const page = async (props) => {
  const paramData = await props.params;
  const idfromurl = await paramData.id;
  const toDoData = await getToDoParticularData(idfromurl);

  if (!toDoData) notFound();

  return (
    <div className="flex justify-center items-center m-2 flex-col">
      <div className="text-3xl">Todo List Info Page</div>
      <div className="bg-white mt-20 p-4 text-black w-100 h-50 rounded-3xl flex items-center justify-center flex-col">
        <span className="text-3xl mb-2">Title: {toDoData?.title}</span>
        <span className="text-l m-2">Description: {toDoData?.description}</span>
        <span>Status: {toDoData?.completed === 1 ? "Done" : "Pending"}</span>
      </div>
    </div>
  );
};

export default page;
