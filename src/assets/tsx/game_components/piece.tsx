import * as React from "react";
import Draggable from "react-draggable";


const Piece = (props) => {
    return (
        <Draggable bounds="#game-page">
            <div className="piece">
                {props.icon}
            </div>
        </Draggable>
    )
}

export default Piece;
