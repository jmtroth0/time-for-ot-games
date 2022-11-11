import { config } from "process";


const gameConfigs = {
    "Handwriting": [
        {
            name: "Prewriting Strokes",
            boardImage: "Prewriting",
            roller: "dice",
            numSides: 4,
            instructionsContent: "Roll the dice and write the shape you land on or draw it with your arms.",
        },
        {
            name: "Any Letters (Capitals)",
            boardImage: "Capitals",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land on",
        },
        {
            name: "Any Letters (Lowercase)",
            boardImage: "LowerCase",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land on",
        },
        {
            name: "Common Reversals (bdpq)",
            boardImage: "bdpq",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land on",
        },
        {
            name: "Common Reversals (NRSZ)",
            boardImage: "nrsz",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land on",
        },
        {
            name: "Common Number Reversals",
            boardImage: "Numbers",
            roller: "dice",
            instructionsContent: "Roll the dice and write the number you land on.",
        },
        {
            name: "C Starting Letters",
            boardImage: "LetterCStarters",
            roller: "dice",
            instructionsContent: "Roll the dice and write the letter you land on. \nUpgrade: Write a word that starts with the letter you land on",
        },

    ],

    "Gross Motor": [
        {
            name: "With Pictures/\u{200B}Movements",
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
            name: "Fine Motor/\u{200B}Visual Motor",
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
            instructionsContent: "Roll the dice and complete the task/activity. Blue: Complete the body activity and state how it makes you feel. Green: Name that feeling (ie nervous or sick when my stomach hurts). Yellow: Body clue from the emotion (ie yawning for tired, can act out with kid then describe if too hard).",
        },
        {
            name: "Emotional Tools",
            boardImage: "Toolbox",
            roller: "dice",
            instructionsContent: "Roll the dice and list a tool for when you are having the feeling within the color coded area you land on, ie taking a break when sad (modeling or just sitting with your feelings are okay too!)",
        },
        {
            name: "Positive Emotions",
            boardImage: "PositiveEmotions",
            roller: "dice",
            instructionsContent: "Roll the dice and state a time or situation where you would experience the emotion you land on",
        },
        {
            name: "Body Speeds",
            boardImage: "BodySpeeds",
            roller: "dice",
            instructionsContent: "Roll the dice and state an emotion, tool, or situation where your body would be in this speed/zone",
        },

    ],

    "Miscellaneous": [
        {
            name: "All About Me",
            boardImage: "AllAboutMe",
            roller: "dice",
            instructionsContent: "Roll the dice and answer the question or fact below. Feel free to model or give ideas",
        },
        {
            name: "Voice Volume",
            boardImage: "Voice Volume",
            roller: "dice",
            instructionsContent: "Roll the dice and either model the voice volume or state a situation where it would be appropriate to use this volume. ",
        },

    ],
};

const getConfigs = () => {
    return gameConfigs;
}

export default getConfigs;
