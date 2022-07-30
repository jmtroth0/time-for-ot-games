import * as React from "react"
import Piece from "./piece";
import "../../scss/piece.scss";
import AndroidIcon from '@mui/icons-material/Android';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import FlightIcon from '@mui/icons-material/Flight';
import FortIcon from '@mui/icons-material/Fort';
import ParkIcon from '@mui/icons-material/Park';
import TelegramIcon from '@mui/icons-material/Telegram';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';


const Pieces = (props) => {
    const [icons, setIcons] = React.useState([]);

    const iconOptions = [
        <AndroidIcon />,
        <AudiotrackIcon />,
        <FlightIcon />,
        <FortIcon />,
        <ParkIcon />,
        <TelegramIcon />,
        <ThunderstormIcon />,
        <TwoWheelerIcon />,
    ];

    if (icons.length === 0) {
        let newIcons = [];
        for (let i = 4; i > 0; i--) {
            let rand = Math.floor(Math.random() * (iconOptions.length - 1));
            newIcons.push(iconOptions[rand]);
            iconOptions.splice(rand, 1);
        }
        setIcons(newIcons);

    }



    return (
        <div id="pieces-tray">
            {props.colors.map((color, i) => { return <Piece icon={icons[i]} color={color} key={color} /> })}
        </div>
    )
}

export default Pieces;
