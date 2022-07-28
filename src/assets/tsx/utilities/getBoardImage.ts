import bdpq from "../../game_backgrounds/bdpq.svg";
import Capitals from "../../game_backgrounds/Capitals.svg";
import Core from "../../game_backgrounds/Core.svg";
import CrossingMidline from "../../game_backgrounds/CrossingMidline.svg";
import EmotionsEmojis from "../../game_backgrounds/EmotionsEmojis.svg";
import FineMotorVisualMotor from "../../game_backgrounds/FineMotorVisualMotor.svg";
import LowerCase from "../../game_backgrounds/LowerCase.svg";
import Movements from "../../game_backgrounds/Movements.svg";
import nrsz from "../../game_backgrounds/nrsz.svg";
import Numbers from "../../game_backgrounds/Numbers.svg";
import PicturesGM from "../../game_backgrounds/PicturesGM.svg";
import Prewriting from "../../game_backgrounds/Prewriting.svg";


const BOARD_NAMES = {
    bdpq: bdpq,
    Capitals: Capitals,
    Core: Core,
    CrossingMidline: CrossingMidline,
    EmotionsEmojis: EmotionsEmojis,
    FineMotorVisualMotor: FineMotorVisualMotor,
    LowerCase: LowerCase,
    nrsz: nrsz,
    Numbers: Numbers,
    PicturesGM: PicturesGM,
    Prewriting: Prewriting,
}

const getBoardImage = (boardName: string) => {
    return BOARD_NAMES[boardName];
}


export default getBoardImage;
