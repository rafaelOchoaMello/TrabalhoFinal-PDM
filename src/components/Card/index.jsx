import React, { useState } from "react";
import './Card.css'

import CardModal from "../CardModal";

const Cards = ({ children }) => {
  const [cardModal, setCardModal] = useState(false);

  return (
    <>
      <div className="CardBody" onClick={() => { setCardModal(true) }}>
        <p className='pokemonID'>{children.entry_number}</p>
        <div className="tempImgPlaceholder"></div>
        <div className="nameContainer">
          <p>{children.pokemon_species.name}</p>
        </div>
      </div>
      {cardModal ? <CardModal onClose={() => setCardModal(false)} pokeId={children.entry_number} /> : null}
    </>
  );
}

export default Cards;