import React, { useState, useEffect } from 'react';
import { AxiosSinglePokemonData as singleData } from '../../axiosConnection';

import './CardModal.css'

function CardModal(props) {
    const [pokeData, setPokeData] = useState(null)

    const getSingleData = async () => {
        const baseData = await singleData.get(props.pokeId.toString());
        setPokeData(baseData.data)
    }

    useEffect(() => {
        getSingleData();
    }, []);

    return (
        <>
            <div id="CardModal-container">
                <div className="CardModal-panel">
                    <div className='modalHeader'>
                        <button onClick={props.onClose} className='CardModal-close'> X </button>
                        <p className='statsContainer'>{pokeData != null && pokeData.id}</p>
                    </div>

                    <div className="CardModal-content">
                        {pokeData != null && (
                            <>
                                <p>{pokeData.name.toUpperCase()}</p>
                                <img className='pokemonImage' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`} alt="" />
                                <br />
                                <p className='typeContainer'>
                                    {pokeData.types.map((data, index) =>
                                        <span className='typeBadge'>
                                            {data.type.name}
                                        </span>
                                    )}
                                </p>
                                <div className='statsContainer'>
                                    <p>Hp | Atk | Def | S.Atk | S.Def | Spd</p>
                                    {pokeData.stats.map((data, index) =>
                                        <span className='statsValues'>{data.base_stat} {index >= 0 && index < 5 ? ' - ' : ''}</span>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardModal;