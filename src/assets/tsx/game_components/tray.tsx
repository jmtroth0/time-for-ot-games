import * as React from "react"
import Draggable from "react-draggable";
import "../../scss/tray.scss";
import Spinner from "./spinner";
import Die from "./die";


class Tray extends React.Component {
    render () {
        return (
            <Draggable handle="#handle" bounds="#game-page" axis="y">

                <div id="utilities-tray" style={{bottom: this.props.bottom, top: this.props.top}}>
                    <div id="handle" />
                    {this.props.roller === "dice" ? <Die /> : <Spinner colors={this.props.colors}/>}
                </div>
            </Draggable>
        )
    }
}

export default Tray;
