import React, { useState, useEffect } from 'react';
import { AxiosSinglePokemonData as singleData } from '../../axiosConnection';

import './CardModal.css'

function CardModal(props) {
    const [pokeData, setPokeData] = useState(null)

    const getSingleData = async () => {
        const baseData = await singleData.get(props.pokeId.toString());
        setPokeData(baseData.data)
    }
    
    useEffect(()=>{
        getSingleData();
    }, []);

    console.log(pokeData)

    return (
        <>
            <div id="CardModal-container">
                <div className="CardModal-panel">
                    <button onClick={props.onClose} className='CardModal-close'> X </button>
                    <div className="CardModal-content">
                        <p>{pokeData!=null && pokeData.name.toUpperCase()}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardModal;