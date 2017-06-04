/**
 * Created by Administrator on 2017/6/4 0004.
 */
import React, { Component } from 'react';

import Head from "./component/Head";

export default class  NewsList extends Component{

    render(){
        return(
            <div>
                <Head leftText="返回"
                      centerText="新闻列表"
                      rightText="刷新"/>
            </div>
        );
    }

}
