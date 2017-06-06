/**
 * Created by Administrator on 2017/6/4 0004.
 */
import React, { Component } from 'react';


export default class  NewsAppraiseListItem extends Component{

    render(){
        return(
            <div>
               <h3 >{this.props.newsAppraiseInfo.appraise_author}</h3>
               <h5>评价时间：{this.props.newsAppraiseInfo.appraise_time}</h5>
               <p>{this.props.newsAppraiseInfo.appraise_content}</p>
            </div>
        );
    }

}
