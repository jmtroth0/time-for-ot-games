import bdpq from "../../game_backgrounds/bdpq.svg";
import Capitals from "../../game_backgrounds/Capitals.svg";
import CoreStrength from "../../game_backgrounds/CoreStrength.svg";
import CrossingMidline from "../../game_backgrounds/CrossingMidline.svg";
import LowerCase from "../../game_backgrounds/LowerCase.svg";
import Movements from "../../game_backgrounds/Movements.svg";
import nrsz from "../../game_backgrounds/nrsz.svg";
import Numbers from "../../game_backgrounds/Numbers.svg";
import Prewriting from "../../game_backgrounds/Prewriting.svg";


const BOARD_NAMES = {
    bdpq: bdpq,
    Capitals: Capitals,
    CoreStrength: CoreStrength,
    CrossingMidline: CrossingMidline,
    LowerCase: LowerCase,
    Movements: Movements,
    nrsz: nrsz,
    Numbers: Numbers,
    Prewriting: Prewriting,
}

const getBoardImage = (boardName) => {
    return BOARD_NAMES[boardName]
}


export default getBoardImage;
