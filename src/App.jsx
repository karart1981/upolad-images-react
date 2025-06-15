import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Unsplash Image Search</h1>
      <SearchBar setQuery={setQuery} />
      <ImageGallery query={query} />
    </div>
  );
}

export default App;

