"use client";
import { filterMachine } from "../actions";
import { useState } from "react";

export default function Page() {
  const [foodChoice, setFoodChoice] = useState("cigarettes");

  return (
    <div className="w-full h-full mx-auto py-5 w-16">
      <div>
        <select
          name="food_choice"
          value={foodChoice}
          onChange={(e) => setFoodChoice(e.target.value)}
          className="text-xl bg-[#ECDEC9] rounded rounded-xl p-2"
        >
          <option value="cigarettes" className="text-xl">
            Cigarettes
          </option>
          <option value="snacks" className="text-xl">
            Snacks
          </option>
          <option value="books" className="text-xl">
            Books
          </option>
          <option value="farm" className="text-xl">
            Farmers Market
          </option>
        </select>
        <button className="px-2 py-2">Suchen</button>
      </div>
      <div className="py-5">
        <div className="border border-5 border-black w-64">
          {foodChoice.toUpperCase()}, Germering
        </div>
      </div>
    </div>
  );
}
