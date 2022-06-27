import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../assets/scss/board.scss";


class Board extends React.Component {
    render() {
        return (
            <div
                id="board">
                <StaticImage
                    style={{
                        gridArea: "1/1"
                    }}
                    src="../images/dpqb_nobackground.png"
                    alt="background maze"
                    placeholder="blurred"
                    layout="fullWidth" />
            </div>
        )
    }
}

export default Board
