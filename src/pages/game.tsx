import * as React from "react"
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Board from "../assets/tsx/game_components/board"
import Tray from "../assets/tsx/game_components/tray"
import Pieces from "../assets/tsx/game_components/pieces";


function getNamesToGatsbyImageData(queryResult) {
    return new Map(queryResult.allFile.nodes.map((node) => {
        return [node.name, getImage(node.childImageSharp.gatsbyImageData)];
    }));
}


const GamePage = ({location, data}) => {
    let boardImage;
    let pieceColors;
    let roller;
    let numDice;
    let spinnerColors;
    if (location.state) {
        boardImage = location.state.config.boardImage;
        pieceColors = location.state.config.pieceColors;
        roller = location.state.config.roller;
        if (roller === "dice") {
            numDice = location.state.config.numDice;
        } else if (roller === "spinner") {
            spinnerColors = location.state.config.spinnerColors;
        }
    } else {
        boardImage = "dpqb_nobackground";
        pieceColors = ["red", "green", "blue", "yellow"];
        roller = "spinner";
        spinnerColors = ["red", "green", "purple", "orange", "yellow", "blue"];
    }
    const imageData = getNamesToGatsbyImageData(data);
    return (
        <main>
            <div id="game-page">
                <Board image={imageData.get(boardImage)} />
                <Pieces colors={pieceColors}/>
                <Tray top="auto" bottom={0} roller={roller} colors={spinnerColors} numDice={numDice} />
            </div>
        </main>
    )
}

export default GamePage
export const query = graphql`
query GamePageQuery {
  allFile {
    nodes {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      name
    }
  }
}
`
