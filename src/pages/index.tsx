import * as React from "react";
import { graphql } from "gatsby";
import GameDisplay from "../assets/tsx/components/game_display";
import "../assets/scss/main.scss"


const gameConfigs = [
    {
        name: "Dice Example",
        boardImage: "dpqb_nobackground",
        pieceColors: ["red", "green", "blue", "yellow"],
        roller: "dice",
        numDice: 2,
        instructionsContent: "Roll the dice and move that number of boxes",
    },
    {
        name: "Spinner Other Colors Example",
        boardImage: "dpqb_nobackground",
        pieceColors: ["red", "green", "blue", "yellow"],
        roller: "spinner",
        spinnerColors: ["#E6F0DC", "#B7C6E4", "#E6F0DC", "#B7C6E4", "#E6F0DC", "#B7C6E4"],
        instructionsContent: "Spin the spinner and move to the next box of that color",
    },
    {
        name: "Other Board Spinner Colors Example",
        boardImage: "Untitled_Artwork",
        pieceColors: ["red", "green", "blue", "yellow"],
        roller: "spinner",
        spinnerColors: ["#EBE864", "#88EB64", "#EBE864", "#EBE864", "#6469EB", "#EBE864"],
        instructionsContent: "Spin the spinner and move to the next box of that color",
    },
    {
        name: "New Colorful Board Spinner Colors Example",
        boardImage: "CrossingMidlineBoardGame_00001",
        extension: "svg",
        pieceColors: ["red", "green", "blue", "yellow"],
        roller: "spinner",
        spinnerColors: ["#EBE864", "#88EB64", "#EBE864", "#EBE864", "#6469EB", "#EBE864"],
        instructionsContent: "Spin the spinner and move to the next box of that color",
    }

];


function getNamesToGatsbyImageData(queryResult) {
    return new Map(queryResult.allFile.nodes.map((node) => {
        return [node.name, node?.childImageSharp?.gatsbyImageData];
    }));
}

const IndexPage = ({data}) => {
    const imageData = getNamesToGatsbyImageData(data);
    return (
        <main>
            { gameConfigs.map((config) => {
                return <GameDisplay config={config} image={imageData.get(config.boardImage)} key={config.name} />
            })}
        </main>
    )
}

export default IndexPage;

export const query = graphql`
query IndexQuery {
  allFile {
    nodes {
      childImageSharp {
        gatsbyImageData
      }
      name
    }
  }
}
`
