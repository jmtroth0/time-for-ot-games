import React, {useState, useEffect} from "react"
import Board from "../assets/tsx/game_components/board"
import Tray from "../assets/tsx/game_components/tray"
import Pieces from "../assets/tsx/game_components/pieces";
import Instructions from "../assets/tsx/game_components/instructions";
import Feedback from "../assets/tsx/components/feedback";
import { SquareLoader } from "react-spinners";
import "../assets/scss/main.scss";
import SEO from "../assets/tsx/utilities/seo";
import { StaticImage } from "gatsby-plugin-image";


const GamePage = ({location, data}) => {
    let initBoardImage = "CoreStrength";
    let initPieceColors = ["red", "green", "blue", "yellow"]
    let initRoller = "dice";
    let initNumDice = 1;
    let initNumSides = 6;
    let initSpinnerColors = ["red", "green", "purple", "orange", "yellow", "blue"];
    let initInstructionsContent = "this is how you play";
    let initLoading = true;
    if (location.state?.config) {
        initBoardImage = location.state.config.boardImage || initBoardImage;
        initPieceColors = location.state.config.pieceColors || initPieceColors;
        initRoller = location.state.config.roller || initRoller;
        initNumDice = location.state.config.numDice || initNumDice;
        initNumSides = location.state.config.numSides || initNumSides;
        initSpinnerColors = location.state.config.spinnerColors || initSpinnerColors;
        initInstructionsContent = location.state.config.instructionsContent || initInstructionsContent;
        initLoading = false;
    }

    const [boardImage, setBoardImage] = useState(initBoardImage);
    const [pieceColors, setPieceColors] = useState(initPieceColors);
    const [roller, setRoller] = useState(initRoller);
    const [numDice, setNumDice] = useState(initNumDice);
    const [numSides, setNumSides] = useState(initNumSides);
    const [spinnerColors, setSpinnerColors] = useState(initSpinnerColors);
    const [instructionsContent, setInstructionsContent] = useState(initInstructionsContent);
    const [loading, setLoading] = useState(initLoading);

    useEffect(() => {
        setLoading(false);
        if (location.state?.config) {
            window.sessionStorage.config = JSON.stringify(location.state.config);
        } else if (window.sessionStorage.getItem('config')) {
            let config = JSON.parse(window.sessionStorage.config)
            setBoardImage(config.boardImage);
            setPieceColors(config.pieceColors || ["red", "green", "blue", "yellow"]);
            setRoller(config.roller);
            if (config.roller === "dice") {
                setNumDice(config.numDice);
                setNumSides(config.numSides);
            } else if (roller === "spinner") {
                setSpinnerColors(config.spinnerColors);
            }
            setInstructionsContent(config.instructionsContent);
        }
    }, []);

    return (
        <main>
            <div id="game-page">
                <header id="game-header">
                    <div id="header-clickables">
                        <Instructions content={instructionsContent} />
                    </div>
                    <StaticImage id="title-logo" src="../images/logo.png" alt="Time 4 OT logo" height={50} width={150}/>
                    <Pieces colors={pieceColors} />
                </header>
                <div id="loading-spinner">
                    <SquareLoader loading={loading} />
                </div>
                <Board boardImage={boardImage} loading={loading}  />
                <Tray top="auto" bottom={0} roller={roller} colors={spinnerColors} numDice={numDice} numSides={numSides} />
            </div>
        </main>
    )
}

export default GamePage;

export const Head = () => (
    <SEO />
);
