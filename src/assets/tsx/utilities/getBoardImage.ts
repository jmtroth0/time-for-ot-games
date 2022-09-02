import AllAboutMe from "../../images/all-about-me.svg";
import bdpq from "../../images/bdpq.svg";
import Capitals from "../../images/Capitals.svg";
import Core from "../../images/Core.svg";
import CrossingMidline from "../../images/CrossingMidline.svg";
import EmotionsEmojis from "../../images/EmotionsEmojis.svg";
import FineMotorVisualMotor from "../../images/fine-motor-visual-motor.svg";
import InteroceptionAndComplexEmotions from "../../images/interoception-and-complex-emotions.svg";
import LetterCStarters from "../../images/letter-c-starters.svg";
import LowerCase from "../../images/LowerCase.svg";
import Movements from "../../images/movements.svg";
import nrsz from "../../images/nrsz.svg";
import Numbers from "../../images/Numbers.svg";
import Prewriting from "../../images/Prewriting.svg";
import Toolbox from "../../images/Toolbox.svg";


const BOARD_NAMES = {
    AllAboutMe: AllAboutMe,
    bdpq: bdpq,
    Capitals: Capitals,
    Core: Core,
    CrossingMidline: CrossingMidline,
    EmotionsEmojis: EmotionsEmojis,
    FineMotorVisualMotor: FineMotorVisualMotor,
    InteroceptionAndComplexEmotions: InteroceptionAndComplexEmotions,
    LetterCStarters: LetterCStarters,
    LowerCase: LowerCase,
    Movements: Movements,
    nrsz: nrsz,
    Numbers: Numbers,
    Prewriting: Prewriting,
    Toolbox: Toolbox,
}

const getBoardImage = (boardName: string) => {
    return BOARD_NAMES[boardName];
}


export default getBoardImage;
