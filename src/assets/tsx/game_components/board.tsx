import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "../../scss/board.scss";
import BoardImage from "../../game_backgrounds/CrossingMidlineBoardGame_00001.svg";


class Board extends React.Component {
    render() {
        let image;
        if (this.props.image) {
            image = <GatsbyImage
                style={{
                    gridArea: "1/1"
                }}
                image={this.props.image}
                alt="background maze"
                placeholder="blurred"
                layout="fullWidth" />
        } else {
            image = <img className="game-image" src={BoardImage}></img>
        }
        return (
            <div id="board">
                {image}
            </div>
        )
    }
}

export default Board
