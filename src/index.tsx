import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';

import {store} from './store';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </React.StrictMode>,
);
