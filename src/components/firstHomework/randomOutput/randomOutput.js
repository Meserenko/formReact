import React from "react";
import RandomNumber from "../randomNumber/randomNumber";

class RandomOutput extends React.Component {
    constructor() {
        super();
        this.output = this.output.bind(this)
        this.state = {
            number: 1000
        }
    }
    output(event) {
        this.setState({number: this.state.number * event})
    }

    render() {
        return (
            <div>
                <h1>Number: {this.state.number}</h1>
                <RandomNumber func={this.output} />
            </div>
        )
    }
}

export default RandomOutput;
