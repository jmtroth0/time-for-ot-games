import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";


class Board extends React.Component {
    render() {
        return (
            <div
                id="board"
                style={{
                    display: "flex",
                    zIndex: -1,
                    padding: "3%",
                }}>
                <StaticImage
                    src="../images/dpqb_nobackground.png"
                    alt="background maze" />
            </div>
        )
    }
}

export default Board
