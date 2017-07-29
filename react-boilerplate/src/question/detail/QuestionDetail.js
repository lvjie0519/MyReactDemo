/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import Header from '../component/header'
import QuestionListItem from '../component/QuestionListItem'
import QuestionAnswerListItem from '../component/QuestionAnswerListItem'

export default class QuestionDetail extends Component {
  static propTypes = {
    location: React.PropTypes.object
  }

  constructor(props, context) {
    super(props, context)

    this.questionInfo = props.location.state.questionInfo
    console.log(this.questionInfo)
    this.headerLeftOnClick = this.headerLeftOnClick.bind(this)
    this.headerRightOnClick = this.headerRightOnClick.bind(this)
    this.onItemClick = this.onItemClick.bind(this)
  }

  render() {
    let answerInfos = ''
    if (this.questionInfo.questionAnswerInfos != null) {
      answerInfos = this.questionInfo.questionAnswerInfos.map(function (answerInfo) {
        return <QuestionAnswerListItem
          questionAnswerInfo={answerInfo} />
      })
    }

    return (
      <div>
        <Header
          leftText='返回'
          centerText='问题详情'
          rightText='提问'
          leftClick={this.headerLeftOnClick}
          rightClick={this.headerRightOnClick} />
        <QuestionListItem
          questionInfo={this.questionInfo}
          onItemClick={this.onItemClick} />
        {answerInfos}
      </div>
    )
  }

  headerLeftOnClick() {

  }

  headerRightOnClick() {

  }

  onItemClick(questionInfo) {
  }
}
