import React, { Component } from "react";

// your Bomb code here!
class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        const timer = this.state.secondsLeft
        let condition;
        if (timer === 0) {
            condition = "Boom!"
        } else {
            condition = timer + ' seconds left before I go boom!'
        }
        return (
            <div>
                {/* {this.state.secondsLeft} seconds left before I go boom! */}
                {condition}
            </div>
        )
    }
}

export default Bomb