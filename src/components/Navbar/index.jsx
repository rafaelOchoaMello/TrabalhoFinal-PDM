import React from "react";
import { Link } from 'react-router-dom';

import './Navbar.css'

import pokeballIcon from '../../images/pokeballNav.png'

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <nav>
                    <ul>
                        <li>
                            <img src={pokeballIcon} alt="IconePokebola" />
                            <Link to="/">PokeData</Link>                            
                        </li>
                        <li>                            
                            <Link className='optionalLinks' to="/search">Pesquisar</Link>                            
                        </li>
                        <li>                            
                            <Link className='optionalLinks' to="/est">Estatísticas</Link>                            
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;