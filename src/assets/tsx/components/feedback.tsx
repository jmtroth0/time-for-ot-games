import React from "react";
import "../../scss/feedback.scss";


const Feedback = () => {
    const modal = React.createRef();

    return (
        <div id="feedback-container">
            <a href="https://forms.gle/sQGbyfJk3KhdLSDx8" target="_blank" id="feedback-button" className="button">Feedback</a>
        </div>
    )
}

export default Feedback;
