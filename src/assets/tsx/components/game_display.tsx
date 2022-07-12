import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, StaticQuery, graphql } from "gatsby";
import "../../scss/game-display.scss";
import getBoardImage from "../utilities/getBoardImage";

class GameDisplay extends React.Component {
    render() {
        return (
            <Link className="game-display" to="/game" state={{config: this.props.config}}>
                <img className="game-display-image" src={getBoardImage(this.props.config.boardImage)} />
                <span className="config-name">{this.props.config.name}</span>
            </Link>
        )
    }
}

export default GameDisplay;
