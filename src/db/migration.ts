import { migrate } from "drizzle-orm/postgres-js/migrator";
import db from "./db";

const migrateDB = async () => {
  console.log("Migration started");
  await migrate(db, { migrationsFolder: "migrations" });
};
migrateDB();
