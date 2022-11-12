import * as React from "react"
import Piece from "./piece";
import "../../scss/piece.scss";
import RedPiece from "../../images/RedPiece.svg"
import OrangePiece from "../../images/OrangePiece.svg"
import BluePiece from "../../images/BluePiece.svg"
import YellowPiece from "../../images/YellowPiece.svg"
import GreenPiece from "../../images/GreenPiece.svg"
import PurplePiece from "../../images/PurplePiece.svg"


const Pieces = (props) => {
    const [pieces, setPieces] = React.useState([]);

    const pieceOptions = [
        {svg: RedPiece, alt: "red piece"},
        {svg: OrangePiece, alt: "orange piece"},
        {svg: BluePiece, alt: "blue piece"},
        {svg: YellowPiece, alt: "yellow piece"},
        {svg: GreenPiece, alt: "green piece"},
        {svg: PurplePiece, alt: "purple piece"},
    ];

    if (pieces.length === 0) {
        let newPieces = [];
        for (let i = 4; i > 0; i--) {
            let rand = Math.floor(Math.random() * (pieceOptions.length - 1));
            let piece = <img key={pieceOptions[rand].alt} className="piece-image" src={pieceOptions[rand].svg} alt={pieceOptions[rand].alt} draggable="false"/>
            newPieces.push(piece);
            pieceOptions.splice(rand, 1);
        }
        setPieces(newPieces);
    }



    return (
        <div id="pieces-tray">
            {pieces.map((piece) => <Piece icon={piece} />)}
        </div>
    )
}

export default Pieces;
