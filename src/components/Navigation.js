import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/search/city">Ville</NavLink></li>
                <li><NavLink to="/search/dog">Chien</NavLink></li>
                <li><NavLink to="/search/cat">Chat</NavLink></li>
                <li><NavLink to="/search/food">Nourriture</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;