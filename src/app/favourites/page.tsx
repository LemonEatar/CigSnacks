"use client";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [list, setList] = useState([{ name: "Cigs", location: "Germering" }]);

  //@ts-ignore
  function handleSubmit(event) {
    event.preventDefault();
    if (name && location) {
      //@ts-ignore
      setList([...list, { name, location }]);
      setName("");
      setLocation("");
    }
  }

  return (
    <div>
      <h1>Add a Maschine</h1>
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="rounded-xl px-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            className="rounded-xl px-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="submit" className="rounded border p-2 items-center">
          Add
        </button>
      </form>
      <div className="text-xl">Favourite Maschines</div>
      <ul>
        {list.map((person, index) => (
          <li key={index}>
            {person.name} - {person.location}
            <div className="bg-black h-px" />
          </li>
        ))}
      </ul>
    </div>
  );
}
