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
    onItemClick: React.PropTypes.func.isRequired,
    showAll: React.PropTypes.bool
  }

  static getDefaultProps = {
    questionInfo: {
      questionTitle: '',
      questionContent: '',
      questionCreater: '',
      questionCreateTime: '',
      questionAnswerCount: ''
    },
    showAll: false
  }
  constructor(props) {
    super(props)
    this.state = {
      showAll: this.props.showAll
    }
  }

  showAll=() => {
    this.setState({
      showAll: true
    })
  }
  render() {
    const content = this.props.questionInfo.questionContent
    return (
      <div onClick={(e) => { this.onItemClick(e) }} styleName='questionItem' >
        <h3 styleName='questionTitle' >{this.props.questionInfo.questionTitle}</h3>
        {content.length < 30 || this.state.showAll ? (<p styleName='questionContent'>{content}</p>) : (<p styleName='questionContent'>{content.substring(0, 30)}......
              <span onClick={this.showAll}>显示全部</span></p>)}
        <span styleName='questionAnswer'>{this.props.questionInfo.questionCreater}</span>
        <span styleName='questionTime'>{this.props.questionInfo.questionCreateTime}</span>
        <span styleName='questionCount'>{this.props.questionInfo.questionAnswerCount}个回答</span>
      </div>
    )
  }

  onItemClick(e) {
    console.log('onItemClick...' + this.props.questionInfo.questionTitle)
    this.props.onItemClick(this.props.questionInfo)
  }
}
