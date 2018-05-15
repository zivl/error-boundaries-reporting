import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Raven from 'raven-js';

Raven.config('', { release: '1.3.0', environment: 'production' });

ReactDOM.render(<App raven={Raven}/>, document.getElementById('root'));
