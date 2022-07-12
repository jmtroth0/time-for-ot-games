import * as React from "react"
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Board from "../assets/tsx/game_components/board"
import Tray from "../assets/tsx/game_components/tray"
import Pieces from "../assets/tsx/game_components/pieces";
import Instructions from "../assets/tsx/game_components/instructions";
import Feedback from "../assets/tsx/components/feedback";
import "../assets/scss/main.scss"


const GamePage = ({location, data}) => {
    let boardImage;
    let pieceColors;
    let roller;
    let numDice;
    let numSides;
    let spinnerColors;
    let instructionsContent;
    if (location.state) {
        boardImage = location.state.config.boardImage;
        pieceColors = location.state.config.pieceColors || ["red", "green", "blue", "yellow"];
        roller = location.state.config.roller;
        if (roller === "dice") {
            numDice = location.state.config.numDice;
            numSides = location.state.config.numSides;
        } else if (roller === "spinner") {
            spinnerColors = location.state.config.spinnerColors;
        }
        instructionsContent = location.state.config.instructionsContent;
    } else {
        boardImage = "CoreStrength";
        pieceColors = ["red", "green", "blue", "yellow"];
        roller = "dice";
        numSides = 6;
        numDice = 1;
        spinnerColors = ["red", "green", "purple", "orange", "yellow", "blue"];
        instructionsContent = "this is how you play";
    }
    return (
        <main>
            <div id="game-page">
                <header id="game-header">
                    <div id="header-clickables">
                        <Instructions content={instructionsContent} />
                        <Feedback />
                    </div>
                    <Pieces colors={pieceColors}/>
                </header>
                <Board boardImage={boardImage} />
                <Tray top="auto" bottom={0} roller={roller} colors={spinnerColors} numDice={numDice} numSides={numSides} />
            </div>
        </main>
    )
}

export default GamePage;
