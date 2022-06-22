import * as React from "react"


class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roll: 1
        };
    }

    rollDice = () => {
        let counter = 0;
        
        const interval = setInterval(() => {
            counter += 1;
            if (counter >= 15) {
                clearInterval(interval);
            }
    
            this.setState({roll: Math.round((Math.random() * 5) + 1)});
        }, 100);
    }

    render () {
        return (
            <div id="spinner" onClick={() => this.rollDice()} style={{
                display: "inline-block",
                position: "absolute", 
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "3px",
                right: "40px",
                bottom: "40px",
                width: "80px",
                height: "80px",
                fontSize: "60px", 
                textAlign: "center"}}>
                    { this.state.roll }
            </div>
        )
    }
}

export default Spinner
