import * as React from "react"
import Draggable from "react-draggable"


class Board extends React.Component {
    render () {
        return (
                <div id="board" style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    backgroundColor: "pink"}}></div>
        )
    }
}

export default Board
