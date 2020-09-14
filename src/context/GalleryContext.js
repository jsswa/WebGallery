import React, { createContext, useState } from "react";
import axios  from "axios";
import { apiKey } from "../api/config";
export const GalleryContext = createContext();

const GalleryContextProvider = props => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const runSearch = query => {
        axios
            .get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
            )
            .then(response => {
                setImages(response.data.photos.photo);
                setLoading(false);
            })
            .catch(error => {
                console.log(
                    "Erreur lors de la requête des données",
                    error
                );
            });
    };
    return (
        <GalleryContext.Provider value={{ images, loading, runSearch }}>
            {props.children}
        </GalleryContext.Provider>
    );
};

export default GalleryContextProvider;

