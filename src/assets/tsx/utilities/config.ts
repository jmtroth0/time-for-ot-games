import { config } from "process";


const gameConfigs = {
    "Handwriting": [
        {
            name: "Any Letters (Capitals)",
            boardImage: "Capitals",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land one",
        },
        {
            name: "Any Letters (Lowercase)",
            boardImage: "LowerCase",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land one",
        },
        {
            name: "Common Reversals (bdpq)",
            boardImage: "bdpq",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land one",
        },
        {
            name: "Common Reversals (NRSZ)",
            boardImage: "nrsz",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land one",
        },
        {
            name: "Common Number Reversals",
            boardImage: "Numbers",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land one",
        },
        {
            name: "C Starting Letters",
            boardImage: "LetterCStarters",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land one",
        },
        {
            name: "Prewriting Strokes",
            boardImage: "Prewriting",
            roller: "dice",
            numSides: 4,
            instructionsContent: "Roll the dice and write the shape you land on or draw it with your arms.",
        },
    ],

    "Gross Motor": [
        {
            name: "With Pictures/Movements",
            boardImage: "Movements",
            roller: "dice",
            numSides: 4,
            instructionsContent: "Copy or complete the movement landed on. Decide on a number of repetitions or roll the dice again for the number of repetitions",
        },
        {
            name: "Core Strength",
            boardImage: "Core",
            roller: "dice",
            instructionsContent: "Copy or complete the movement landed on. Decide on a number of repetitions or roll the dice again for the number of repetitions",
        },
        {
            name: "Crossing Midline",
            boardImage: "CrossingMidline",
            roller: "dice",
            instructionsContent: "Copy or complete the movement landed on. Decide on a number of repetitions or roll the dice again for the number of repetitions",
        },
    ],

    "Fine Motor" : [
        {
            name: "Fine Motor/Visual Motor",
            boardImage: "FineMotorVisualMotor",
            roller: "dice",
            instructionsContent: "Roll the dice and complete the listed activity. Upgrade: Use tongs to have the client bring you the item (i.e. an orange ball) to support hand strengthening",
        }
    ],

    "Social Emotional" : [
        {
            name: "Emojis",
            boardImage: "EmotionsEmojis",
            roller: "dice",
            instructionsContent: "Roll the dice and name the feeling that matches the face (more than one answer could be correct). Upgrade: Name a time you may feel this way",
        },
        {
            name: "Interoception",
            boardImage: "InteroceptionAndComplexEmotions",
            roller: "dice",
            instructionsContent: "Roll the dice and complete the task/activity. Blue square: Body Activity. Complete and discuss how it made you feel. Green: Name that feeling (more than one could be correct) Yellow: Body clue from the emotion (can act out then describe if too hard)",
        }
    ],

    "Miscellaneous": [
        {
            name: "All About Me",
            boardImage: "AllAboutMe",
            roller: "dice",
            instructionsContent: "Roll the dice and answer the question or fact below. Feel free to model or give ideas",
        }
    ],
};

const getConfigs = () => {
    return gameConfigs;
}

export default getConfigs;
