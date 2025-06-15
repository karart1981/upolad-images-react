import { useEffect, useState } from "react";
import axios from "axios";

const ACCESS_KEY = "zoprzTkkhbABkMr6MmPcdHxE3fnR89jEXq2CEOO7UCE"; // Պարտադիր փոխեք ձերով

const ImageGallery = ({ query }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async (newQuery, pageNum) => {
    try {
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: newQuery,
          page: pageNum,
          per_page: 10,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      });

      if (pageNum === 1) {
        setImages(response.data.results);
      } else {
        setImages((prev) => [...prev, ...response.data.results]);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    if (query) {
      setPage(1);
      fetchImages(query, 1);
    }
  }, [query]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  return (
    <div className="text-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.urls.small}
            alt={img.alt_description}
            className="rounded shadow"
          />
        ))}
      </div>
      {images.length > 0 && (
        <button onClick={loadMore} className="mt-6 px-4 py-2 bg-green-600 text-white rounded">
          Load More
        </button>
      )}
    </div>
  );
};

export default ImageGallery;
