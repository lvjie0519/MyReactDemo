import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import About from './modules/About';
import Repos from './modules/Repos';
import Home from './modules/Home';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
        <Route path="/repos/:userName/:repoName" component={Repos}/>
        <Route path="/home" component={Home}/>
    </Router>
), document.getElementById('root'));
registerServiceWorker();



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// https://github.com/reactjs/react-router-tutorial/tree/master/lessons/04-nested-routes
// http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router
// http://www.cnblogs.com/BestMePeng/p/React_Router.html