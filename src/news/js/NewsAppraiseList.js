/**
 * Created by Administrator on 2017/6/5 0005.
 */

import React, { Component } from 'react';

import Head from "./component/Head";
import "../css/head.css"
import $ from "jquery";

import NewsAppraiseListItem from "./component/NewsAppraiseListItem";
import AddAppraiseInfo from "./component/AddAppraiseInfo";

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
                    <AddAppraiseInfo onAddClick={this.addNewsAppraiseInfo.bind(this)}/>
                </div>
            );
        }

    }

    addNewsAppraiseInfo(appraiseContent){
        let newsAppraiseInfos = this.state.newsAppraiseInfos;
        let k = newsAppraiseInfos[0].appraise_id +1;
        let appraiseInfo = {
            "appraise_id":k,
            "news_id": this.newsId,
            "appraise_author": "lvjie"+k,
            "appraise_content":appraiseContent,
            "appraise_time":"2017-05-23"
        }
        newsAppraiseInfos.splice(0, 0, appraiseInfo);
        this.setState({newsAppraiseInfos:newsAppraiseInfos});

    }

}