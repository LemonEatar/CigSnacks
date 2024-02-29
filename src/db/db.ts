import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;
if (connectionString === undefined) {
  console.log(connectionString)
  throw new Error("Database URL undefined");
}
const client = postgres(connectionString);
const db = drizzle(client);
export default db;
