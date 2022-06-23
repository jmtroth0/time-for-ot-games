import * as React from "react"


class Die extends React.Component<PropTypes, {}> {
    constructor(props: PropTypes | Readonly<PropTypes>) {
        super(props);
        this.state = {
            roll: 1,
        };
    }

    rollDice = () => {
        let counter = 0;

        const interval = setInterval(() => {
            counter += 1;
            if (counter >= 15) {
                clearInterval(interval);
            }
            console.log("hi");

            this.setState({roll: Math.round((Math.random() * 5) + 1)});
        }, 100);
    }

    render () {
        return (
            <div onClick={() => this.rollDice()}>
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
