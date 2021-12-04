import React, { useState } from "react";
import './Card.css'

import CardModal from "../CardModal";

const Cards = () => {
  const [cardModal, setCardModal] = useState(false);

  return (
    <>
      <div className="CardBody" onClick={() => { setCardModal(true) }}>
        <p>1</p>
      </div>
      {cardModal ? <CardModal onClose={() => setCardModal(false)} /> : null}
    </>
  );
}

export default Cards;