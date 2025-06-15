import React, { useState } from "react";

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Search images..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-4 py-2 rounded-l-md w-64 border-white outline-none text-white capitalize"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md cursor-pointer">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
