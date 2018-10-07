import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import todoApp from './reducers/reducers';

let store = createStore(todoApp);
let rootElement = document.getElementById('root');

//ReactDOM.render(<App />, document.getElementById('root'));
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

registerServiceWorker();
