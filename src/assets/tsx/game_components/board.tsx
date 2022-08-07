import * as React from "react";
import "../../scss/board.scss";
import getBoardImage from "../utilities/getBoardImage";


class Board extends React.Component {
    render() {
        return (
            <div id="board" style={{display: `${this.props.loading ? "none" : ""}`}}>
                <img className="game-image" src={getBoardImage(this.props.boardImage)} draggable="false"></img>
            </div>
        )
    }
}

export default Board;
