import * as React from "react"
import Piece from "./piece";
import Spinner from "./spinner";
import Die from "./die";


class Tray extends React.Component {

    render () {
        const colors = ["red", "green", "blue", "yellow"];
        return (
            <div id="utilities-tray"
                style={{
                    display: "flex",
                    marginTop: "auto",
                    border: "1px solid grey",
                    borderRadius: "3px",
                    padding: "5px",
            }}>
                <div
                    id="pieces-tray"
                    style={{
                        border: "1px solid grey",
                        borderRadius: "3px",
                        padding: "5px",
                        margin: "10px",
                    }}>
                    {colors.map((color) => { return <Piece color={color} /> })}
                </div>

                {/* <Spinner /> */}
                <Die />
            </div>
        )
    }
}

export default Tray
