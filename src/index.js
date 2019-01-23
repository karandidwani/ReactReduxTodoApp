import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import rootReducer from './rootReducer'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
