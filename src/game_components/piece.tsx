import * as React from "react"
import Draggable from "react-draggable"


class Piece extends React.Component {

    render () {
        return (
            <Draggable bounds="#board">
                <div style={{display: "inline-block", fontSize: "60px", color: this.props.color, cursor: "pointer"}}>
                    &#9823;
                </div>
            </Draggable>
        )
    }
}

export default Piece
