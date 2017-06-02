import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,  } from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import About from './modules/About'
import Repos from './modules/Repos'

// ReactDOM.render((
//     <Router history={Switch}>
//         <Route path="/" component={App}/>
//         <Route path="/repos" component={Repos}/>
//         <Route path="/about" component={About}/>
//     </Router>
// ), document.getElementById('root'));
// registerServiceWorker();



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
