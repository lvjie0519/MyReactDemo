/**
 * Created by Administrator on 2017/7/29 0029.
 */

import React, { Component } from 'react'
import QuestionList from './QuestionList'
import Header from './component/Header'

export default class QuestionMain extends Component {
  render() {
    return (
      <div>
        <Header
          leftText='答'
          rightText='提问' />
        <QuestionList />
      </div>
    )
  }
}
