/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'

export default class QuestionMain extends Component {
  gotoDetail() {

  }
  render() {
    return (
      <div>
        <button onClick={this.gotoDetail}>跳转到详情页</button>
        <h2> 问题列表界面 </h2>
      </div>
    )
  }
}
