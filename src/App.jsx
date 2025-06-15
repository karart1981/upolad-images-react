import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="p-4 bg-[url('https://images.unsplash.com/photo-1704072386444-f648652392cc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVsbCUyMHNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D')] w-[100%] min-h-[100vh] bg-center bg-cover bg-no-repeat">
      <h1 className="text-2xl font-bold text-center mb-4 text-white tracking-[2px]">Unsplash Image Search</h1>
      <SearchBar setQuery={setQuery} className="z-[9999]"/>
      <ImageGallery query={query} className="z-[9999]"/>
    </div>
  );
}

export default App;

