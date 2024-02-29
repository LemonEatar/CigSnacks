CREATE TABLE IF NOT EXISTS "maschine" (
	"id" serial PRIMARY KEY NOT NULL,
	"kind" text,
	"cord" text,
	"filled" integer,
	"ownerId" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "owner" (
	"id" serial PRIMARY KEY NOT NULL,
	"location" text,
	"name" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "maschine" ADD CONSTRAINT "maschine_ownerId_owner_id_fk" FOREIGN KEY ("ownerId") REFERENCES "owner"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
