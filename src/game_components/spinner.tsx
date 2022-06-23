import * as React from "react"


class Spinner extends React.Component<PropTypes, {}> {
    constructor(props: PropTypes | Readonly<PropTypes>) {
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
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "3px",
                width: "80px",
                height: "80px",
                fontSize: "60px",
                margin: "10px",
                textAlign: "center"}}>
                    { this.state.roll }
            </div>
        )
    }
}

export default Spinner
