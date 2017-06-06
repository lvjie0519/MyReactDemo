/**
 * Created by Administrator on 2017/6/4 0004.
 */
import React, { Component } from 'react';

import "../../css/addappriaseinfo.css"


export default class AddAppraiseInfo extends Component{

    render(){
        return(
            <div className='todo-add'>
                <input type='text' ref='input' placeholder=' 请输入内容' />
                <button onClick={(e) => {
                    this.handleClick(e);
                    e.preventDefault();
                }}>
                    添加评价
                </button>
            </div>
        );
    }

    // 点击添加事件
    handleClick(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        if(this.props.onAddClick){
            this.props.onAddClick(text);
        }
        node.value = '';
    }

}
