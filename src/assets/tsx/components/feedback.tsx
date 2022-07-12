import React, { useEffect, useState } from 'react';
import "../../scss/feedback.scss";


const Feedback = (props) => {
    const modal = React.createRef();

    return (
        <div id="feedback-container">
            <a href="https://forms.gle/sQGbyfJk3KhdLSDx8" target="_blank" id="feedback-button" className="button">Click to leave feedback</a>
        </div>
    )
}

export default Feedback;
