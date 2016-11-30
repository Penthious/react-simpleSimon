import React, {
    Component,
    PropTypes,
} from 'react';

class SimonColor extends Component {
    handleOnClick = (color) => {
        this.props.handleOnClick(color);
    }
    render() {
        return (
            <div className="inner-box" style={{backgroundColor: this.props.color}} onClick={() => this.handleOnClick(this.props.color)}>
            </div>
        );
    }
}

SimonColor.propTypes    = {};
SimonColor.defaultProps = {};

export default SimonColor;
