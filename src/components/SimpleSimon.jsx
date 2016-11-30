import React, { Component, PropTypes } from 'react';

import SimonColor from './SimonColor';

import './styles.sass';

class SimpleSimon extends Component {
    handleColorClick = (color) => {
        console.log(color);
    };

    render() {
        return (
            <div className="box">
                <SimonColor color="red" handleColorClick={this.handleColorClick}/>
                <SimonColor color="blue" handleColorClick={this.handleColorClick}/>
                <SimonColor color="green" handleColorClick={this.handleColorClick}/>
                <SimonColor color="yellow" handleColorClick={this.handleColorClick}/>
            </div>
        );
    }
}

SimpleSimon.propTypes    = {};
SimpleSimon.defaultProps = {};

export default SimpleSimon;
