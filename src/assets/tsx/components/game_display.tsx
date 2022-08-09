import * as React from "react";
import { Link } from "gatsby";
import "../../scss/game-display.scss";
import getBoardImage from "../utilities/getBoardImage";

class GameDisplay extends React.Component {
    render() {
        return (
            <Link className="game-display" to="/game" state={{config: this.props.config}}>
                <img className="game-display-image" src={getBoardImage(this.props.config.boardImage)} alt={this.props.config.name + " board"}/>
                <span className="config-name">{this.props.config.name}</span>
            </Link>
        )
    }
}

export default GameDisplay;
