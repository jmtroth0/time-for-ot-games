import * as React from "react";
import { graphql, navigate} from "gatsby";
import "../assets/scss/main.scss";
import "../assets/scss/home.scss";
import Box from '@mui/material/Box';
import SEO from "../assets/tsx/utilities/seo";
import Footer from "../assets/tsx/components/footer";
import Header from "../assets/tsx/components/header";
import LandingText from "../assets/tsx/components/landing-text";
import { StaticImage } from "gatsby-plugin-image";
import LandingPage from "../assets/images/LandPage.svg"



const IndexPage = () => {

    const goToGameList = () => {
        navigate("/game-list");
    };

    return (
        <main>
            <Header />
            <Box className="home-page-content">
                <LandingText />
                <img onClick={goToGameList} onTouchStart={goToGameList} className="game-image" src={LandingPage} draggable="false" alt="spiral board game background" />
            </Box>
            <Footer />
        </main>
    )
}

export default IndexPage;

export const Head = () => (
    <SEO />
);
