/**
 * Created by Administrator on 2017/6/5 0005.
 */

import React, { Component } from 'react';

import Head from "./component/Head";
import "../css/head.css"

export default class NewsInfo extends Component{

    constructor(props, context) {
        super(props, context);

        if(props.location.query){
            this.newsId = props.location.state.newsId;
            this.newsType = props.location.state.newsType;
            this.newsTitle = props.location.state.newsTitle;
            this.newsContent = props.location.state.newsContent;
            this.newsAppraiseCount = props.location.state.newsAppraiseCount;
            this.newsCreateTime = props.location.state.newsCreateTime;
        }else{
            this.newsId = "";
            this.newsType = "";
            this.newsTitle = "";
            this.newsContent = "";
            this.newsAppraiseCount = "";
            this.newsCreateTime = "";
        }


        console.log("NewsInfo-->"+this.newsId+"   "+this.newsTitle);
    }

    render(){
        return(
            <div>
                <Head leftText="返回"
                      centerText="新闻内容"
                      rightText=""/>
                <h3>{this.newsTitle}</h3>
                <h5>{this.newsCreateTime}</h5>
                <p className="'news-content'">{this.newsContent}</p>
                <div className="container">
                    <button className="left-btn" onClick={(e) => {
                        this.leftClick(e);
                    }}>评论数：{this.newsAppraiseCount}</button>
                    <button className="right-btn" onClick={(e) => {
                        this.rightClick(e);
                    }}>发布评论</button>
                </div>
            </div>
        );
    }

    leftClick(e){
        console.log("");
    }

    rightClick(e){
        console.log("");
    }

}