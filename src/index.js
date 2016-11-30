import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import SimpleSimon from './components/SimpleSimon';

export default class App extends React.Component {
    render() {
        return (
            <SimpleSimon />
        )
    }
}

ReactDOM.render(
        <App />,
    document.getElementById('app'));
