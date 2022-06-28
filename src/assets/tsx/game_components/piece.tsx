import * as React from "react"
import Draggable from "react-draggable"


class Piece extends React.Component {
    render () {
        return (
            <Draggable bounds="#game-page">
                <div className="piece" style={{color: this.props.color}}>
                    &#9823;
                </div>
            </Draggable>
        )
    }
}

export default Piece
