import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider, connect } from 'react-redux';
import store from './store';

const appConnector = (component) => {
    const mapStateToProps = state => ({
        isError: state.get('isError')
    });
    const mapDispatchToProps = {};
    return connect(mapStateToProps, mapDispatchToProps)(component);
};
const ConnectedApp = appConnector(App);

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedApp/>
    </Provider>,
    document.getElementById('root')
);





