"use server";

import { db } from "@/config/mysql";

export const FormAction = async (formData) => {
  const { title, description } = Object.fromEntries(formData.entries());
  if (!title || !description) return;
  await db.execute(
    `insert into todo_db.tasks (title, description, completed) VALUES (?,?, true)`,
    [title, description]
  );
};
