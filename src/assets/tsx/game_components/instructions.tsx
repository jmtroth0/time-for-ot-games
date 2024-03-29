import React, { useEffect, useState } from 'react';
import "../../scss/instructions.scss";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const Instructions = (props) => {
    return (
        <div id="instructions-container">
            <Tooltip title={props.content} enterTouchDelay={0} leaveTouchDelay={4000}>
                <Button id="instructions-button" variant="outlined">
                    Instructions
                </Button>
            </Tooltip>
        </div>
    )
}

export default Instructions;
