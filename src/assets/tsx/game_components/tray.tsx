import * as React from "react"
import Draggable from "react-draggable";
import Spinner from "./spinner";
import Die from "./die";
import "../../scss/tray.scss";


class Tray extends React.Component {
    render () {
        let roller;
        let numDice = this.props.numDice;
        let numSides = this.props.numSides;
        if (this.props.roller === "dice") {
            roller = [];
            for (let i = 0; i < (this.props.numDice || 1); i++) {
                roller.push(<Die numSides={numSides} key={i}/>)
            }
        } else {
            roller = <Spinner colors={this.props.colors} />
        }
        return (
            <Draggable handle="#handle" bounds="#game-page" axis="y">

                <div id="utilities-tray" style={{bottom: this.props.bottom, top: this.props.top}}>
                    <div id="handle" />
                    {roller}
                </div>
            </Draggable>
        )
    }
}

export default Tray;
