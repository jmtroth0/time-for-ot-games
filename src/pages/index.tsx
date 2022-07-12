import * as React from "react";
import { graphql } from "gatsby";
import GameDisplay from "../assets/tsx/components/game_display";
import Feedback from "../assets/tsx/components/feedback";
import "../assets/scss/main.scss";
import getConfigs from "../assets/tsx/utilities/config";



const IndexPage = () => {
    const gameConfigs = getConfigs();

    return (
        <main>
            <header id="game-header">
                <div id="header-clickables">
                    <Feedback />
                </div>
                <span id="title">Time for OT</span>
            </header>
            <div id="game-display-sections">
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
            </div>
        </main>
    )
}

export default IndexPage;
