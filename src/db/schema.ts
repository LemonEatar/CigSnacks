import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const maschien = pgTable("maschine", {
  id: serial("id").primaryKey(),
  kind: text("kind"),
  cord: text("cord"),
  filled: integer("filled"),
  ownerId: serial("ownerId").references(() => owner.id),
});

export const owner = pgTable("owner", {
  id: serial("id").primaryKey(),
  location: text("location"),
  name: text("name"),
});
