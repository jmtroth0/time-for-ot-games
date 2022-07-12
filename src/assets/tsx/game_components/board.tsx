import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "../../scss/board.scss";
import getBoardImage from "../utilities/getBoardImage";


class Board extends React.Component {
    render() {
        return (
            <div id="board">
                <img className="game-image" src={getBoardImage(this.props.boardImage)} draggable="false"></img>
            </div>
        )
    }
}

export default Board
