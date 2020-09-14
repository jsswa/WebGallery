import React, { useContext, useEffect } from "react";
import { GalleryContext } from "../context/GalleryContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(GalleryContext);
  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;