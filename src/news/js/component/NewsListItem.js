/**
 * Created by Administrator on 2017/6/4 0004.
 */
import React, { Component } from 'react';

import "../../css/newslistitem.css"

import logo from "../../images/icon.png";

export default class  NewsListItem extends Component{
    render(){
        return(
            <div className="news-box">
               <img className='news-icon' src={this.props.newsInfo.icon} />
               <h3 className="news-title">{this.props.newsInfo.title}</h3>
               <p className="'news-content'">{this.props.newsInfo.content}</p>
            </div>
        );
    }


}
