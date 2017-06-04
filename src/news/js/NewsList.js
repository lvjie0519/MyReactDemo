/**
 * Created by Administrator on 2017/6/4 0004.
 */
import React, { Component } from 'react';

import Head from "./component/Head";
import NewsListItem from "./component/NewsListItem";

export default class  NewsList extends Component{

    constructor(props){
        super(props);

        this.mNewsInfos = [
                {
                    id:1,
                    title:'产品经理与程序员矛盾的本质是什么？',
                    content:'理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
                    voteCount:10,
                    icon: 'http://img.mukewang.com/52da54ed0001ecfa04120172.jpg'
                }, {
                    id:2,
                    title:'热爱编程是一种怎样的体验？',
                    content:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
                    voteCount:8,
                    icon: 'http://img.mukewang.com/52da54ed0001ecfa04120172.jpg'
                }
            ];

        this.state = {newsInfos:this.mNewsInfos};
    }

    render(){

        var newsInfos = this.state.newsInfos.map(function(newsInfo){
            return	<NewsListItem
                newsInfo={newsInfo} />
        });

        return(
            <div>
                <Head leftText="返回"
                      centerText="新闻列表"
                      rightText="刷新"
                      addOnClick={this.addNewsInfo.bind(this)}/>
                {newsInfos}
            </div>
        );
    }

    addNewsInfo(){
        console.log("addNewsInfo...."+this.mNewsInfos);
        let newsInfo = {
            id:2,
            title:'热爱编程是一种怎样的体验？',
            content:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
            voteCount:8,
            icon: 'http://img.mukewang.com/52da54ed0001ecfa04120172.jpg'
        };

        // this.mNewsInfos= this.state.newsInfos;
        this.mNewsInfos.push(newsInfo);
        this.setState({newsInfos:this.mNewsInfos});
    }

}
