import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, StaticQuery, graphql } from "gatsby";
import "../../scss/game-display.scss";
import Board from "../../game_backgrounds/CrossingMidlineBoardGame_00001.svg"


class GameDisplay extends React.Component {
    render() {
        let image;
        if (this.props.config.extension === 'svg') {
            image = <img className="game-image" src={Board}></img>
            // {"../game_backgrounds/" + this.props.config.boardImage}
        } else {
            image = <GatsbyImage className="game-image" image={getImage(this.props.image)} alt="background-image" />
        }
        return (
            <div className="game-display">
                <Link to="/game" state={{config: this.props.config}}>
                    {image}
                    <span className="config-name">{this.props.config.name}</span>
                </Link>
            </div>
        )
    }
}

export default GameDisplay;
