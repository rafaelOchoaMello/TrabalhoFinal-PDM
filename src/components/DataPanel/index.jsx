import React, { useState, useEffect } from "react";
import './DataPanel.css'

import Card from "../Card";
import {AxiosConnection as pokeAPI} from '../../axiosConnection'

const DataPanels = () => {
  const [pokeData, setPokeData] = useState([]);

  const getData = async () => {
    const baseData = await pokeAPI.get("kanto")
    setPokeData(baseData.data.pokemon_entries)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="DataPanelBody">
      <div className="DataPanelContent">
      {pokeData.length > 0 && pokeData.map((data, index)=>{
        return(<Card key={index}>{data}</Card>);
      })}
      </div>
    </div>
  );
}

export default DataPanels;