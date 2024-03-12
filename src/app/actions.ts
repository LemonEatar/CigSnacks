"use server";
import db from "@/db/db";
import { maschien } from "@/db/schema";
import { eq } from "drizzle-orm";

type filterMachineProps = {
  type: string;
};

export async function filterMachine(type: string) {
  const filterdMachines = db
    .select()
    .from(maschien)
    .where(eq(maschien.kind, type));
  console.log(await filterdMachines);
  return filterdMachines;
}
