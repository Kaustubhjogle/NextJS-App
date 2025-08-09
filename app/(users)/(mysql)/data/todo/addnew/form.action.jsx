"use server";

import { db } from "@/config/mysql";
import { redirect } from "next/navigation";

export const FormAction = async (previouState, formData) => {
  const { title, description } = Object.fromEntries(formData?.entries());
  if (!title || !description)
    return { success: false, message: "Error while Adding todo Item" };
  try {
    await db.execute(
      `insert into todo_db.tasks (title, description, completed) VALUES (?,?, true)`,
      [title, description]
    );
    return { success: true, message: "Todo Item added successfully" };
    // redirect('/data/todo') //only for server components
  } catch (e) {
    if (e.message === 'NEXT_REDIRECT') throw e;
    console.error(e);
    return { success: false, message: "Error while Adding todo Item" };
  }
};
