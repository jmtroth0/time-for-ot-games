import * as React from "react"
import "../assets/scss/spinner.scss"


class Spinner extends React.Component<PropTypes, {}> {
    spinner;
    spinnerAngle = 0;

    constructor(props: PropTypes | Readonly<PropTypes>) {
        super(props);
        this.spinner = React.createRef();

    }

    spin = () => {
        this.spinnerAngle = 360 * ((Math.random() * 5 + 1)) + this.spinnerAngle;
        this.spinner.current.style.transform = `rotate(${this.spinnerAngle}deg`;
    }

    generateGradient = (colors) => {
        let currentEnd = 0;
        return colors.map((color) => {
            let result = `${color} ${currentEnd}% ${currentEnd + 100/colors.length}%`;
            currentEnd = currentEnd + 100/colors.length;
            return result;
        }).join(", ");
    }

    render () {
        const options = ["red", "green", "purple", "orange", "yellow"]
        const gradient = this.generateGradient(options);

        return (
            <div className="spinner-container">
                <div className="pointer" />
                <div className="spinner" onClick={() => this.spin()} ref={this.spinner}
                    style={{
                        backgroundImage: `conic-gradient(${gradient})`
                    }}
                />
            </div>
        )
    }
}

export default Spinner
