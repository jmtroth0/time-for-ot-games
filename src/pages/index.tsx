import * as React from "react";
import { graphql } from "gatsby";
import GameDisplay from "../assets/tsx/components/game_display";
import Feedback from "../assets/tsx/components/feedback";
import "../assets/scss/main.scss"


const gameConfigs = {
    "Handwriting": [
        {
            name: "Any Letters (Capitals)",
            boardImage: "Capitals",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land one",
        },
        {
            name: "Any Letters (Lowercase)",
            boardImage: "LowerCase",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land one",
        },
        {
            name: "Common Reversals (bdpq)",
            boardImage: "bdpq",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land one",
        },
        {
            name: "Common Reversals (NRSZ)",
            boardImage: "nrsz",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land one",
        },
        {
            name: "Common Number Reversals",
            boardImage: "Numbers",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land one",
        },
        {
            name: "Prewriting Strokes",
            boardImage: "Prewriting",
            roller: "dice",
            numSides: 4,
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land one",
        },
    ],
    "Gross Motor": [
        {
          name: "With Pictures/Movements",
          boardImage: "Movements",
          roller: "dice",
          numSides: 4,
          instructionsContent: "Copy or complete the movement landed on. Decide on a number of repetitions or roll the dice again for the number of repetitions",
        },
        {
          name: "Core Strength",
          boardImage: "CoreStrength",
          roller: "dice",
          instructionsContent: "Copy or complete the movement landed on. Decide on a number of repetitions or roll the dice again for the number of repetitions",
        },
        {
          name: "Crossing Midline",
          boardImage: "CrossingMidline",
          roller: "dice",
          instructionsContent: "Copy or complete the movement landed on. Decide on a number of repetitions or roll the dice again for the number of repetitions",
        },
    ],
};


const IndexPage = ({data}) => {
    return (
        <main>
            <header id="game-header">
                <div id="header-clickables">
                    <Feedback />
                </div>
            </header>
            { Object.keys(gameConfigs).map((sectionName) => {
                return (
                    <div className="game-display-section" key={sectionName}>
                        <span className="game-display-section-header">{sectionName}</span>
                        <div className="game-displays">
                            {gameConfigs[sectionName].map((config) => {
                                return <GameDisplay config={config} image={config.boardImage} key={config.name} />
                            })}
                        </div>
                    </div>
                )
            })}
        </main>
    )
}

export default IndexPage;
