/**
 * Created by Administrator on 2017/6/4 0004.
 */
import React, { Component } from 'react';

import Head from "./component/Head";
import NewsListItem from "./component/NewsListItem";
import $ from "jquery";


export default class  NewsList extends Component{

    // static contextTypes = { // as static property
    //     router: React.PropTypes.object
    // };




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
                    newsInfo={newsInfo}
                    onItemClick={this.onItemClick.bind(this)}/>
            }.bind(this));

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

    onItemClick(newsInfo){
        console.log(newsInfo.news_title);
        this.context.router.push({
            pathname: '/newsinfo',
            state: {
                newsId:newsInfo.news_title,
                newsType: newsInfo.news_type,
                newsTitle:newsInfo.news_title,
                newsContent:newsInfo.news_content,
                newsAppraiseCount:newsInfo.news_appraise_count,
                newsCreateTime:newsInfo.news_create_time
            },
        })
    }

}

NewsList.contextTypes={
    router: React.PropTypes.object
}