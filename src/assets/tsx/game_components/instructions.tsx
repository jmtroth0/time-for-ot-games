import React, { useEffect, useState } from 'react';
import "../../scss/instructions.scss";


const Instructions = (props) => {
    const modal = React.createRef();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('keydown', closeModal);

        return () => {
            window.removeEventListener('keydown', closeModal);
        };
    }, []);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div id="instructions-container">
            <button id="instructions-button" onClick={openModal}
                    onKeyPress={closeModal}
                    >Instructions</button>
            <div id="instructions-modal-screen" className={isOpen ? "open" : ""}
                    onClick={closeModal} />
            <div id="instructions-modal" className={isOpen ? "open" : ""} ref={modal} onClick={closeModal}>
                <div id="instructions-content">
                    <span id="instructions">{props.content}</span>
                </div>
            </div>
        </div>
    )
}

export default Instructions;
