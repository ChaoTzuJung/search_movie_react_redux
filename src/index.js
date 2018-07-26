import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import reducers from './reducers'
import Routes from './routes'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

const App = () => {
    return(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

