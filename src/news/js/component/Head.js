/**
 * Created by Administrator on 2017/6/4 0004.
 */
import React, { Component } from 'react';

import "../../css/head.css"

export default class  Head extends Component{


    getDefaultProps(){
        console.log("getDefaultProps...");

        return {
            leftText : "返回",
            centerText:"标题",
            rightText:"刷新",
        };
    }

    render(){
        return(
            <div className="container">
                <button className="left-btn" onClick={(e) => {
                    this.leftClick(e);
                }}>{this.props.leftText}</button>
                <span>{this.props.centerText}</span>
                <button className="right-btn" onClick={(e) => {
                    this.rightClick(e);
                }}>{this.props.rightText}</button>
            </div>
        );
    }

    leftClick(e){
        console.log("leftClick...");
    }

    rightClick(e){
        console.log("rightClick...");
    }

}
