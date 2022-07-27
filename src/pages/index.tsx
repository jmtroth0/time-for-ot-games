import * as React from "react";
import { graphql } from "gatsby";
import GameDisplay from "../assets/tsx/components/game_display";
import Feedback from "../assets/tsx/components/feedback";
import "../assets/scss/main.scss";
import getConfigs from "../assets/tsx/utilities/config";
import SEO from "../assets/tsx/utilities/seo";
import { StaticImage } from "gatsby-plugin-image";



const IndexPage = () => {
    const gameConfigs = getConfigs();

    return (
        <main>
            <header id="game-header">
                <div id="header-clickables">
                    <Feedback />
                </div>
                <StaticImage id="title-logo" src="../images/logo.png" alt="Time 4 OT logo" height={50} width={150}/>
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

export const Head = () => (
    <SEO />
);

                // <span id="title">Time for OT</span>
