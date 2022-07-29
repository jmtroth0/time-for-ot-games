import React, { useEffect, useState } from 'react';
import "../../scss/instructions.scss";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const Instructions = (props) => {
    return (
        <div id="instructions-container">
            <Tooltip title={props.content}>
                <Button id="instructions-button" variant="contained">
                    Hover for instructions
                </Button>
            </Tooltip>
        </div>
    )
}

export default Instructions;
