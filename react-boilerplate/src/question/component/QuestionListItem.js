/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../theme/styles/questionItem.css'

@CSSModules(styles, {allowMultiple: true})
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
      <div onClick={(e) => { this.onItemClick(e) }} styleName='questionItem' >
        <h3 styleName='questionTitle' >{this.props.questionInfo.questionTitle}</h3>
        <p styleName='questionContent'>{this.props.questionInfo.questionContent}</p>
        <span styleName='questionAnswer'>{this.props.questionInfo.questionCreater}</span>
        <span styleName='questionTime'>{this.props.questionInfo.questionCreateTime}</span>
        <span styleName='questionCount'>{this.props.questionInfo.questionAnswerCount}</span>
      </div>
    )
  }

  onItemClick(e) {
    console.log('onItemClick...' + this.props.questionInfo.questionTitle)
    this.props.onItemClick(this.props.questionInfo)
  }
}
