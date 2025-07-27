import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

try {
  const connection = await db.getConnection();
  connection.release();
} catch (err) {
  console.error(err);
  process.exit(1);
}
