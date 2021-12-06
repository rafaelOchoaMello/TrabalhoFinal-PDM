import React, { useState, useEffect } from "react";
import './Search.css';

import { AxiosSinglePokemonData as pokeToFind } from "../../axiosConnection";

const Search = () => {
    const [toFind, setToFind] = useState('');
    const [data, setData] = useState(null);

    const getData = async () => {
        const baseData = await pokeToFind.get(toFind);
        setData(baseData.data)
        console.log(data)
    }

    useEffect(() => {
        toFind.length <= 0 && setData(null)
    }, [toFind, data]);

    return (
        <>
            <div className="searchContainer">
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder='Nome do pokemon...'
                    onChange={(e) => setToFind(e.target.value)}
                />

                <button
                    onClick={() => toFind.length > 0 && getData()}>
                    Pesquisar
                </button>
            </div>
            {data && <div className='infoDataContainer'>
                <div className="infoDataPanel">
                    <p className='pokemonIdSearch'>{data != null && data.id}</p>
                    <p>{data.name.toUpperCase()}</p>
                    <img className='pokemonImage' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="" />
                    <p className='typeContainer'>
                        {data.types.map((data, index) =>
                            <span className='typeBadge' key={index}>
                                {data.type.name}
                            </span>
                        )}
                    </p>
                    <br />
                    <div className='statsContainerSearch'>
                        {data.stats.map((data, index) =>
                            <span className='statsValuesSearch' key={index}>
                                {
                                    index === 0 ? 'HP:' :
                                        index === 1 ? 'Atk:' :
                                            index === 2 ? 'Def:' :
                                                index === 3 ? 'S.Atk:' :
                                                    index === 4 ? 'S.Def:'
                                                        : 'Spd:'
                                }
                                {data.base_stat}
                                {index >= 0 && index < 5 ? ' - ' : ''}
                            </span>
                        )}
                    </div>
                    <div className="abilityContainer">
                        <p>Abilities: </p>
                        {data.abilities.map((data, index) =>
                            <span key={index}>
                                {index > 0 && '/ '}
                                {data.ability.name}
                            </span>
                        )}
                    </div>
                    <div className="abilityContainer">
                        <p>Item: </p>
                        {data.held_items.length > 0 && data.held_items.map((data, index) =>
                            <span key={index}>
                                {index > 0 && '/ '}
                                {data.item.name}
                            </span>
                        )}
                        <span>
                            {data.held_items.length === 0 ? 'Sem item' : ''}
                        </span>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Search;