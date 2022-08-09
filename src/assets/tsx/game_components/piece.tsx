import * as React from "react";
import Draggable from "react-draggable";


const Piece = (props) => {
    return (
        <Draggable bounds="#game-page">
            <div className="piece" style={{color: props.color}}>
                {props.icon}
            </div>
        </Draggable>
    )
}

export default Piece;
