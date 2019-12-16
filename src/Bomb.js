// your Bomb code here!
import React, {Component} from 'react'

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        if(this.state.secondsLeft === 0) {
            return (<div>Boom!</div>)
        }
        if(this.state.secondsLeft > 0) {
            return (<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
            }
        } 
    }

    // countdownBoom = () => {
    //     // let timeLeft = this.state.secondsLeft
    //     let message;
    //     if(this.state.secondsLeft === 0) {
    //         message = 'Boom!'
    //     }
    //     if(this.state.secondsLeft > 0) {
    //         while(this.state.secondsLeft > 0) {   
    //             message = `${this.state.secondsLeft} seconds left before I go boom!`
    //         }
    //     } 
    // }

