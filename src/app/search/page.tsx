"use client";
import { filterMachine } from "../actions";
import { useState } from "react";

export default function Page() {
  const [foodChoice, setFoodChoice] = useState("cigarettes");
  const [maschines, setMaschines] = useState([
    {
      id: 2,
      kind: "snacks",
      cord: "(51.0551, 51.222)",
      filled: 1,
      ownerId: 1,
    },
  ]);

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
        <button className="px-2 py-2" onClick={() => filterMachine(foodChoice)}>
          Suchen
        </button>
      </div>
      <div className="py-5">
        {filterMachine(foodChoice).then((val) =>
          val.map((item) => <div key={item.id}>{item.kind}</div>),
        )}
      </div>
    </div>
  );
}
