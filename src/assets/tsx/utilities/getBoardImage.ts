import bdpq from "../../images/bdpq.svg";
import Capitals from "../../images/Capitals.svg";
import Core from "../../images/Core.svg";
import CrossingMidline from "../../images/CrossingMidline.svg";
import EmotionsEmojis from "../../images/EmotionsEmojis.svg";
import FineMotorVisualMotor from "../../images/FineMotorVisualMotor.svg";
import LowerCase from "../../images/LowerCase.svg";
import Movements from "../../images/Movements.svg";
import nrsz from "../../images/nrsz.svg";
import Numbers from "../../images/Numbers.svg";
import PicturesGM from "../../images/PicturesGM.svg";
import Prewriting from "../../images/Prewriting.svg";


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
