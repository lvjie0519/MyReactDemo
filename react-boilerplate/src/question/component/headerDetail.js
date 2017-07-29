/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../theme/styles/header.css'

@CSSModules(styles, {allowMultiple: true})
export default class HeaderDetail extends Component {
  static propTypes = {
    leftText: React.PropTypes.string,
    centerText: React.PropTypes.string,
    rightText: React.PropTypes.string,
    headerStyle: React.PropTypes.string
  }

  static getDefaultProps = {
    leftText: '',
    centerText: '发布问题',
    rightText: '提交',
    headerStyle: 'header-container'
  }

  leftClick(e) {

  }

  rightClick(e) {

  }

  render() {
    return (
      <div styleName={this.props.headerStyle}>
        <a styleName='left-btn' onClick={(e) => {
          this.leftClick(e)
        }}>{this.props.leftText}</a>
        <span styleName='center-text'>{this.props.centerText}</span>
        <button styleName='right-btn' onClick={(e) => {
          this.rightClick(e)
        }}>{this.props.rightText}</button>
      </div>
    )
  }
}
