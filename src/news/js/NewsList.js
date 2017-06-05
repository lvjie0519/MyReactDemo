/**
 * Created by Administrator on 2017/6/4 0004.
 */
import React, { Component } from 'react';

import Head from "./component/Head";
import NewsListItem from "./component/NewsListItem";
import $ from "jquery";


export default class  NewsList extends Component{

    constructor(props){
        super(props);


        this.state = {newsInfos:[], isLoading:true};
    }


    loadDataFromMock(){
        $.ajax({
            url: "news.json",
            dataType: "json",
            success: newsInfos => {
                this.setState({newsInfos: newsInfos, isLoading:false});
            },
            error: (xhr, status, err) => {
                console.log(err.toString());
            }
        });
    }

    componentDidMount() {
        this.loadDataFromMock();
    }

    render(){


        if(this.state.isLoading){
            return(
                <div>Loading....</div>
            );
        }else{

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

    }

    addNewsInfo(){
        console.log("addNewsInfo...."+this.mNewsInfos);

        let newsInfo = {
            "news_id":0,
            "news_type": 0,
            "news_title": "热爱编程是一种怎样的体验？",
            "news_content":"别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。",
            "news_appraise_count":1,
            "news_logo":"http://img.mukewang.com/52da54ed0001ecfa04120172.jpg",
            "news_create_time":"2017-05-23"
        };

        this.mNewsInfos= this.state.newsInfos;
        this.mNewsInfos.push(newsInfo);

        // $.ajax({
        //     url: "news.json",
        //     dataType: 'json',
        //     type: 'post',
        //     data: newsInfo,
        //     success: function (data) {
        //         console.log(data);
        //     }.bind(this),
        //     error: function (xhr, status, err) {
        //         console.error("url="+this.props.url, status, err.toString());
        //     }.bind(this)
        // });

        this.setState({newsInfos:this.mNewsInfos});

    }



}
