
import React, { useEffect, useState } from "react";
import axios from "axios";

const ACCESS_KEY = "zoprzTkkhbABkMr6MmPcdHxE3fnR89jEXq2CEOO7UCE"; 

const ImageGallery = ({ query }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);
  const perPage = 10;

  const fetchImages = async (newQuery, pageNum) => {
    if (!newQuery) return;

    try {
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: newQuery,
          page: pageNum,
          per_page: perPage,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      });

      setImages(response.data.results);
      setTotalPages(Math.ceil(response.data.total / perPage));
      setHasSearched(true);
    } catch (error) {
      console.error("Error fetching images:", error);
      setImages([]);
      setTotalPages(0);
      setHasSearched(true);
    }
  };

  useEffect(() => {
    if (query) {
      setPage(1);
    }
  }, [query]);

  useEffect(() => {
    if (query) {
      fetchImages(query, page);
    }
  }, [query, page]);

  const goToPrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const goToNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="text-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <img 
             key={image.id} 
             src={image.urls.small} 
             alt={image.alt_description} 
             className="rounded shadow w-[400px] h-[200px] object-cover"
          />
        ))}
      </div>
      {hasSearched && totalPages > 1 && (
        <div className="pagination-controls" style={{ marginTop: '20px', textAlign: 'center' }}>
          <button onClick={goToPrevious} disabled={page === 1} className="cursor-pointer">
            <svg width="15" height="15" viewBox="0 0 14 14"><path fill="white" fill-rule="evenodd" d="m4.238 6.056l7.819-5.4c.396-.25.878-.183 1.226.08c.269.201.458.519.467.897v10.705c0 .884-.979 1.456-1.693 1.004l-7.82-5.367c-.65-.439-.65-1.48 0-1.919ZM0 1.742a1 1 0 1 1 2 0v10.516a1 1 0 1 1-2 0z" clip-rule="evenodd"/></svg>
          </button>
          <span className="text-white my-0 mx-[10px]">Page {page} of {totalPages}</span>
          <button onClick={goToNext} disabled={page === totalPages} className="cursor-pointer"><svg width="15" height="15" viewBox="0 0 14 14"><path fill="white" fill-rule="evenodd" d="M9.512 6.056L1.693.656C1.297.407.815.474.467.737A1.142 1.142 0 0 0 0 1.632v10.705c0 .884.979 1.456 1.693 1.004l7.82-5.367c.65-.439.65-1.48 0-1.919Zm4.238-4.314a1 1 0 1 0-2 0v10.516a1 1 0 0 0 2 0z" clip-rule="evenodd"/></svg></button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
