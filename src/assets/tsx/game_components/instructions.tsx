import React, { useEffect, useState } from 'react';
import "../../scss/instructions.scss";


const Instructions = (props) => {
    const modal = React.createRef();
    const [isOpen, setIsOpen] = useState(false);


    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div id="instructions-container">
            <button id="instructions-button" onMouseEnter={openModal} onMouseLeave={closeModal}>Hover for instructions</button>
            <div id="instructions-modal" className={isOpen ? "open" : ""} ref={modal}>
                <div id="instructions-content">
                    <span id="instructions">{props.content}</span>
                </div>
            </div>
        </div>
    )
}

export default Instructions;
