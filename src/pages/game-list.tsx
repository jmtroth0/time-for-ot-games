import * as React from "react";
import { graphql } from "gatsby";
import GameDisplay from "../assets/tsx/components/game_display";
import "../assets/scss/main.scss";
import getConfigs from "../assets/tsx/utilities/config";
import SEO from "../assets/tsx/utilities/seo";
import Footer from "../assets/tsx/components/footer";
import Header from "../assets/tsx/components/header";
import LandingText from "../assets/tsx/components/landing-text";



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
