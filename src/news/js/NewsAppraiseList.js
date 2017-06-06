/**
 * Created by Administrator on 2017/6/5 0005.
 */

import React, { Component } from 'react';

import Head from "./component/Head";
import "../css/head.css"
import $ from "jquery";

import NewsAppraiseListItem from "./component/NewsAppraiseListItem";

export default class NewsAppraiseList extends Component{

    constructor(props, context) {
        super(props, context);

        this.newsId = ""+ (props.location.query) ? props.location.query.newsId : "";
        console.log("NewsAppraiseList-->"+this.newsId)
        this.state = {newsAppraiseInfos:[], isLoading:true};
    }

    loadDataFromMock(){
        $.ajax({
            url: "appraise.json",
            dataType: "json",
            success: newsAppraiseInfos => {
                this.setState({newsAppraiseInfos: newsAppraiseInfos, isLoading:false});
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

            var newsAppraiseInfos = this.state.newsAppraiseInfos.map(function(newsAppraiseInfo){
                console.log(""+newsAppraiseInfo.news_id+"   "+this.newsId)
                if(newsAppraiseInfo.news_id == this.newsId){
                    return	<NewsAppraiseListItem
                        newsAppraiseInfo={newsAppraiseInfo}/>
                }

            }.bind(this));

            return(
                <div>
                    <Head leftText="返回"
                          centerText="评价列表"
                          rightText="刷新"/>
                    {newsAppraiseInfos}

                </div>
            );
        }

    }

}