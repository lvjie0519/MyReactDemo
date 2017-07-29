/**
 * Created by Administrator on 2017/7/29 0029.
 */

import React, { Component } from 'react'
import QuestionList from './CommentList'
import Header from '../../component/Header'
import CommentList from './CommentList'

export default class QuestionDetail extends Component {
  render() {
    return (
      <div>
        <Header leftText='返回' centerText='问题详情' rightText='提问' />
        <CommentList />
      </div>
    )
  }
}
