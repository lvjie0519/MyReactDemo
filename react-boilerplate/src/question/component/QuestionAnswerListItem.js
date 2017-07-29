/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../theme/styles/questionItem.css'

@CSSModules(styles, {allowMultiple: true})
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
      <div styleName='questionItem'>
        <span styleName='questionAnswer'>{this.props.questionAnswerInfo.answerCreater}</span>
        <span styleName='questionTime'>{this.props.questionAnswerInfo.answerCreateTime}</span>
        <div styleName='questionCount'>
          <span style={{marginRight: 10}}>喜欢：{this.props.questionAnswerInfo.answerUpCount}</span>
          <span>不喜欢:{this.props.questionAnswerInfo.answerDownCount}</span>
        </div>
        <p styleName='questionContent'>{this.props.questionAnswerInfo.answerContent}</p>
      </div>
    )
  }
}
