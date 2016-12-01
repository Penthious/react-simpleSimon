import React, { Component, PropTypes } from 'react';

import SimonColor from './SimonColor';

import './styles.sass';

class SimpleSimon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            simonColors: [],
            userColors: [],
        };
    }

    onSuccess = () => {
        const simon = this.state.simonColors;
        const user  = this.state.userColors;
        for (let i = 0; i < user.length; i++) {
            if (simon.length === user.length - 1) {
                this.clearUsersColors();
                this.startSimon();
            } else if (simon[i] !== user[i]) {
                console.log('you lose');
            } else {
            }
        }
    }

    clearUsersColors = () => {
        this.setState({
            userColors: [],
        });
    }

    startSimon = () => {
        console.log(this.state.simonColors);
        this.pickRandom();
        this.onSuccess();
    };

    pickRandom = () => {
        const colors = ['red', 'blue', 'green', 'yellow'];
        const item   = colors[Math.floor(Math.random() * colors.length)];
        this.setState({
            simonColors: this.state.simonColors.concat(item),
        });
    };

    handleColorClick = (color) => {
        this.setState({
            userColors: this.state.userColors.concat(color),
        });
        console.log(this.state.userColors);
    };

    render() {
        return (
            <div className="box">
                <SimonColor color="red" handleColorClick={this.handleColorClick} />
                <SimonColor color="blue" handleColorClick={this.handleColorClick} />
                <SimonColor color="green" handleColorClick={this.handleColorClick} />
                <SimonColor color="yellow" handleColorClick={this.handleColorClick} />
                <button onClick={this.startSimon}> start</button>
            </div>
        );
    }
}

SimpleSimon.propTypes    = {};
SimpleSimon.defaultProps = {};

export default SimpleSimon;
