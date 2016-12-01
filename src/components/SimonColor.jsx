import React, {
    Component,
    PropTypes,
} from 'react';

class SimonColor extends Component {
    handleOnClick = (color) => {
        this.props.handleColorClick(color);
    };

    render() {
        return (
            <div
                className="inner-box"
                style={{ backgroundColor: this.props.color }}
                onClick={() => this.handleOnClick(this.props.color)}
            />

        );
    }
}

SimonColor.propTypes    = {
    color: PropTypes.string,
    handleColorClick: PropTypes.func,
};
SimonColor.defaultProps = {};

export default SimonColor;
