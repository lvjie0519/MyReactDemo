/**
 * Created by Administrator on 2017/7/29 0029.
 */

import React, { Component } from 'react'
import QuestionList from './QuestionList'
import Header from './component/header'
import HeaderDetail from './component/headerDetail'
import QuestionMainTop from './component/QuestionMainTop'
import MyQuestionList from './MyQuestionList'

export default class QuestionMain extends Component {
  constructor() {
    super()
    this.state = {
      isShowHomePage: true
    }

    this.homePageOnSelect = this.homePageOnSelect.bind(this)
    this.myQuestionPageOnSelect = this.myQuestionPageOnSelect.bind(this)
  }

  render() {
    var selectPage = this.getSelectPage()
    // this.getSelectPage()
    return (
      <div>
        <Header leftText='答!' rightText='提问' />
        <HeaderDetail centerText='发布问题' rightText='提问' />
        <QuestionMainTop
          leftText='首页'
          rightText='我的提问'
          homePageOnSelect={this.homePageOnSelect}
          myQuestionPageOnSelect={this.myQuestionPageOnSelect} />
        {selectPage}
      </div>
    )
  }

  getSelectPage() {
    if (this.state.isShowHomePage) {
      return <QuestionList />
    } else {
      return <MyQuestionList />
    }
  }

  homePageOnSelect(e) {
    console.log('点击首页')
    this.setState({
      isShowHomePage: true
    })
  }

  myQuestionPageOnSelect(e) {
    console.log('点击我的提问')
    this.setState({
      isShowHomePage: false
    })
  }
}
