import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
    return (
        <div>
            <h1>WebGallery</h1>
            <h3>Bienvenue sur cette application créée grâce au 
                framework React. Elle sert à afficher une gallerie d'images
                issues du site web Flickr.<br/>
                (Notons que le site étant anglophone, 
                la recherche se fait avec des mots clés anglais)</h3>
            <Form history={history} handleSubmit={handleSubmit} />
            <Navigation />
        </div>
    );
};

export default Header;