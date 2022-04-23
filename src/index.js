import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./components/Router";
// browser
import { BrowserRouter } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store={ store }>
    <Router/>
    </Provider>
    </BrowserRouter>
);