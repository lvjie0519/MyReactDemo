/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, {Component} from 'react'

export default class QuestionAnswerListItem extends Component {
  static propTypes = {
    questionAnswerInfo: React.PropTypes.object
  }

  static getDefaultProps = {
    questionAnswerInfo: {
      answerCreater: '',
      answerContent: '',
      answerUpCount: 0,
      answerDownCount: 0,
      answerCreateTime: ''
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.questionAnswerInfo.answerCreater}</h3>
        <h3>{this.props.questionAnswerInfo.answerCreateTime}</h3>
        <h3>{this.props.questionAnswerInfo.answerUpCount}</h3>
        <h3>{this.props.questionAnswerInfo.answerDownCount}</h3>
        <p>{this.props.questionAnswerInfo.answerContent}</p>
      </div>
    )
  }
}
