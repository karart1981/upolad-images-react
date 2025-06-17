import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="p-4 bg-[url('../public/bg-image.jpeg')] w-[100%] min-h-[100vh] bg-center bg-cover bg-no-repeat overflow-hidden">
      <h1 className="text-2xl font-bold text-center mb-4 text-white tracking-[2px]">Unsplash Image Search</h1>
      <SearchBar setQuery={setQuery} className="z-[9999]"/>
      <ImageGallery query={query} className="z-[9999]"/>
    </div>
  );
}

export default App;

