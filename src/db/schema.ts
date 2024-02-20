import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const maschien = pgTable("maschine", {
  id: serial("id"),
  kind: text("kind"),
  cord: text("cord"),
  filled: integer("filled"),
  ownerId: integer("ownerId").references(() => owner.id),
});

export const owner = pgTable("owner", {
  id: serial("id"),
  location: text("location"),
});
