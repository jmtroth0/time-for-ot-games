import * as React from "react"
import Piece from "../game_components/piece";
import "../assets/scss/piece.scss";


class Pieces extends React.Component {
    render () {
        const colors = ["red", "green", "blue", "yellow"];
        return (
            <div id="pieces-tray">
                {colors.map((color) => { return <Piece color={color} /> })}
            </div>
        )
    }
}

export default Pieces;
