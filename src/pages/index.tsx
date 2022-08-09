import * as React from "react";
import { graphql, navigate} from "gatsby";
import "../assets/scss/constants.scss";
import "../assets/scss/main.scss";
import "../assets/scss/home.scss";
import Box from '@mui/material/Box';
import Footer from "../assets/tsx/components/footer";
import Header from "../assets/tsx/components/header";
import LandingPageSVG from "../assets/images/LandPage.svg"
import LandingText from "../assets/tsx/components/landing-text";
import SEO from "../assets/tsx/utilities/seo";
import { StaticImage } from "gatsby-plugin-image";



const IndexPage = () => {

    const goToGameList = () => {
        navigate("/game-list");
    };

    return (
        <main>
            <Header />
            <Box className="home-page-content">
                <LandingText />
                <img
                    onClick={goToGameList}
                    onTouchStart={goToGameList}
                    className="game-image"
                    src={LandingPageSVG}
                    draggable="false"
                    alt="spiral board game background" />
            </Box>
            <Footer />
        </main>
    )
}

export default IndexPage;

export const Head = () => (
    <SEO />
);
