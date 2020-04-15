import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import App from './App';

export const history = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter history={history}>
        <App />
    </BrowserRouter>,
 document.getElementById('root'));
