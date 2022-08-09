import * as React from "react";
import { graphql } from "gatsby";
import "../assets/scss/constants.scss";
import "../assets/scss/main.scss";
import GameDisplay from "../assets/tsx/components/game_display";
import getConfigs from "../assets/tsx/utilities/config";
import Footer from "../assets/tsx/components/footer";
import Header from "../assets/tsx/components/header";
import SEO from "../assets/tsx/utilities/seo";



const GameListPage = () => {
    const gameConfigs = getConfigs();

    return (
        <main>
            <Header />
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
            <Footer />
        </main>
    )
}

export default GameListPage;

export const Head = () => (
    <SEO />
);
