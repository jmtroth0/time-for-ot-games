import * as React from "react"
import Board from "../game_components/board"
import Tray from "../game_components/tray"

import "../assets/scss/dice.scss";


const GamePage = () => {
    return (
        <main>
            <div id="game-page"
                style={{
                    display: "flex",
            }}>
                <Board />

                <Tray />
            </div>
        </main>
    )
}

export default GamePage
