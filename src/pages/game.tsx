import * as React from "react"
import Board from "../game_components/board"
import Piece from "../game_components/piece"
import Spinner from "../game_components/spinner"


const GamePage = () => {
    const colors = ["red", "green", "blue", "yellow"];

    return (
        <main>
            <h1>Game Page</h1>

            <Board />

            {colors.map((color) => { return <Piece color={color} /> })}
            <Spinner />
        </main>
    )
}

export default GamePage