import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/main.css';
import './FONT/fontawesome-free-5.0.10/web-fonts-with-css/css/fontawesome-all.min.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));
registerServiceWorker();
