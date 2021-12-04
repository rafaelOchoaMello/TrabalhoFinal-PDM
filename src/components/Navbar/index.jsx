import React from "react";
import './Navbar.css'

import pokeballIcon from'../../images/pokeballNav.png'

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <img src={pokeballIcon} alt="IconePokebola"/>
                <p>PokeData</p>
            </div>
        </>
    )
}

export default Navbar;