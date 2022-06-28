import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, StaticQuery, graphql } from "gatsby";
import "../../scss/game-display.scss";


class GameDisplay extends React.Component {
    render() {
        return (
            <div className="game-display">
                <Link to="/game" state={{config: this.props.config}}>
                    <GatsbyImage className="game-image" image={getImage(this.props.image)} alt="background-image" />
                    <span className="config-name">{this.props.config.name}</span>
                </Link>
            </div>
        )
    }
}

export default GameDisplay;