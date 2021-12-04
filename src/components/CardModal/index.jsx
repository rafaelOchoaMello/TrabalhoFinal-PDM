import React from 'react';

import './CardModal.css'

function CardModal(props) {
    return (
        <>
            <div id="CardModal-container">
                <div className="CardModal-panel">
                    <button onClick={props.onClose} className='CardModal-close'> X </button>
                    <div className="CardModal-content">
                        <p>Teste</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardModal;