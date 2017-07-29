/**
 * Created by Administrator on 2017/7/29 0029.
 */

import React, { Component } from 'react'
import QuestionList from './QuestionList'

export default class QuestionMain extends Component {
  render() {
    return (
      <div>
        <h2>问题主页面</h2>
        <QuestionList />
      </div>
    )
  }
}
