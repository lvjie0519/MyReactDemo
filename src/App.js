import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={(e) => {
                    this.handleClick(e);
                }}>
                    添加待办项
                </button>
            </div>
        );

    }

    // 点击添加事件
    handleClick(e){
        console.log("handleClick...");
    }
}


export default App;
