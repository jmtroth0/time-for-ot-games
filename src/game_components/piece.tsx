import * as React from "react"
import Draggable from "react-draggable"


class Piece extends React.Component {

    render () {
        return (
            <Draggable bounds="#board">
                <div style={{display: "inline-block", fontSize: "60px", color: this.props.color}}>
                    &#9823;
                </div>
            </Draggable>
        )
    }
}

export default Piece