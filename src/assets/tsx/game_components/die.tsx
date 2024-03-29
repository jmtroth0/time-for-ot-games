import * as React from "react"
import "../../scss/dice.scss";


class Die extends React.Component<PropTypes, {}> {
    constructor(props: PropTypes | Readonly<PropTypes>) {
        super(props);
        this.state = {
            roll: 1,
        };
    }

    rollDice = () => {
        let counter = Math.round(Math.random() * 15) + 15;

        const interval = setInterval(() => {
            counter -= 1;
            if (counter <= 0) {
                clearInterval(interval);
            }

            this.setState({roll: Math.round((Math.random() * ((this.props.numSides || 5) - 1)) + 1)});
        }, 100);
    }

    render () {
        return (
            <div onTouchStart={() => this.rollDice()} onClick={() => this.rollDice()}>
                <div className="dice one" key="one"
                    style={{
                        display: `${this.state.roll === 1 ? "flex" : "none"}`
                    }}>
                    <span className="dot" />
                </div>

                <div className="dice two" key="two"
                    style={{display: `${this.state.roll === 2 ? "flex" : "none"}`}}>
                    <span className="dot" />
                    <span className="dot" />
                </div>

                <div className="dice three" key="three"
                    style={{display: `${this.state.roll === 3 ? "flex" : "none"}`}}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

                <div className="dice four" key="four"
                    style={{display: `${this.state.roll === 4 ? "flex" : "none"}`}}>
                    <div className="column">
                        <span className="dot" />
                        <span className="dot" />
                    </div>
                    <div className="column">
                        <span className="dot" />
                        <span className="dot" />
                    </div>
                </div>

                <div className="dice five" key="five"
                    style={{display: `${this.state.roll === 5 ? "flex" : "none"}`}}>

                    <div className="column">
                        <span className="dot" />
                        <span className="dot" />
                    </div>

                    <div className="column">
                        <span className="dot" />
                    </div>

                    <div className="column">
                        <span className="dot" />
                        <span className="dot" />
                    </div>

                </div>
                <div className="dice six" key="six"
                    style={{display: `${this.state.roll === 6 ? "flex" : "none"}`}}>
                    <div className="column">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                    </div>
                    <div className="column">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Die
