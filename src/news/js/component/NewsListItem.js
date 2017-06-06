/**
 * Created by Administrator on 2017/6/4 0004.
 */
import React, { Component } from 'react';

import "../../css/newslistitem.css"

import logo from "../../images/icon.png";

export default class  NewsListItem extends Component{

    render(){
        return(
            <div className="news-box" onClick={(e) => {
                this.onItemClick(e);
            }}>
               <img className='news-icon' src={this.props.newsInfo.news_logo} />
               <h3 className="news-title">{this.props.newsInfo.news_title}</h3>
               <p className="'news-content'">{this.props.newsInfo.news_content}</p>
               <h5 className="news-title">评论数：{this.props.newsInfo.news_appraise_count}</h5>
            </div>
        );
    }

    onItemClick(e){
        console.log("onItemClick..."+this.props.newsInfo);
        this.props.onItemClick(this.props.newsInfo);
    }


}
