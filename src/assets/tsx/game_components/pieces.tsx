import * as React from "react"
import Piece from "./piece";
import "../../scss/piece.scss";


class Pieces extends React.Component {
    render () {
        return (
            <div id="pieces-tray">
                {this.props.colors.map((color) => { return <Piece color={color} key={color} /> })}
            </div>
        )
    }
}

export default Pieces;
