/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, {Component} from 'react'

export default class QuestionListItem extends Component {
  static propTypes = {
    questionInfo: React.PropTypes.object,
    onItemClick: React.PropTypes.func.isRequired
  }

  static getDefaultProps = {
    questionInfo: {
      questionTitle: '',
      questionContent: '',
      questionCreater: '',
      questionCreateTime: '',
      questionAnswerCount: ''
    }
  }

  render() {
    return (
      <div onClick={(e) => {
        this.onItemClick(e)
      }}>
        <h3>{this.props.questionInfo.questionTitle}</h3>
        <p>{this.props.questionInfo.questionContent}</p>
        <h3>{this.props.questionInfo.questionCreater}</h3>
        <h3>{this.props.questionInfo.questionCreateTime}</h3>
        <h3>{this.props.questionInfo.questionAnswerCount}</h3>
      </div>
    )
  }

  onItemClick(e) {
    console.log('onItemClick...' + this.props.questionInfo.questionTitle)
    this.props.onItemClick(this.props.questionInfo)
  }
}
