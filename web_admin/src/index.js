import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Route path="/" exact component={App}/>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
