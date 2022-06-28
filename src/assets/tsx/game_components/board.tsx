import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "../../scss/board.scss";


class Board extends React.Component {
    render() {
        return (
            <div id="board">
                <GatsbyImage
                    style={{
                        gridArea: "1/1"
                    }}
                    image={this.props.image}
                    alt="background maze"
                    placeholder="blurred"
                    layout="fullWidth" />
            </div>
        )
    }
}

export default Board
