import * as React from "react"
import Board from "../game_components/board"
import Tray from "../game_components/tray"
import Pieces from "../game_components/pieces";
import Spinner from "../game_components/spinner";
import Die from "../game_components/die";


const GamePage = () => {
    return (
        <main>
            <div id="game-page">
                <Board />
                <Pieces />
                <Tray top="auto" bottom={0}content={<Die />} />
            </div>
        </main>
    )
}

export default GamePage
