import * as React from "react"
import Draggable from "react-draggable";
import "../assets/scss/tray.scss";


class Tray extends React.Component {
    render () {
        return (
            <Draggable handle="#handle" bounds="#game-page" axis="y">

                <div id="utilities-tray" style={{bottom: this.props.bottom, top: this.props.top}}>
                    <div id="handle" />
                    {this.props.content}
                </div>
            </Draggable>
        )
    }
}

export default Tray;
