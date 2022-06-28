import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, StaticQuery, graphql } from "gatsby";


class GameDisplay extends React.Component {
    render() {
        return (
            <div className="game-display">
                <GatsbyImage image={getImage(this.props.image)} alt="background-image" />
                <Link to="/game" state={{config: this.props.config}}>
                    <span>{this.props.config.pieceColors}</span>
                    <span>{this.props.config.roller}</span>
                    <span>{this.props.config.name}</span>
                </Link>
            </div>
        )
    }
}

export default GameDisplay;
