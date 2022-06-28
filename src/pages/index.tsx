import * as React from "react";
import { graphql } from "gatsby";
import GameDisplay from "../assets/tsx/components/game_display";


const gameConfigs = [
    {
        name: "Dice Example",
        boardImage: "dpqb_nobackground",
        pieceColors: ["red", "green", "blue", "yellow"],
        roller: "dice",
        numDice: 2,
    },
    {
        name: "Spinner Example",
        boardImage: "dpqb_nobackground",
        pieceColors: ["red", "green", "blue", "yellow"],
        roller: "spinner",
        spinnerColors: ["red", "green", "purple", "orange", "yellow", "blue"],
    },
    {
        name: "Spinner Other Colors Example",
        boardImage: "dpqb_nobackground",
        pieceColors: ["red", "green", "blue", "yellow"],
        roller: "spinner",
        spinnerColors: ["#E6F0DC", "#B7C6E4", "#E6F0DC", "#B7C6E4", "#E6F0DC", "#B7C6E4"],
    }
];


function getNamesToGatsbyImageData(queryResult) {
    return new Map(queryResult.allFile.nodes.map((node) => {
        return [node.name, node.childImageSharp.gatsbyImageData];
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
