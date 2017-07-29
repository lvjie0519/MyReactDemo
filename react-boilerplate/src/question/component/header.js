/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../theme/styles/header.css'

@CSSModules(styles, {allowMultiple: true})
export default class Header extends Component {
  static propTypes = {
    leftText: React.PropTypes.string,
    centerText: React.PropTypes.string,
    rightText: React.PropTypes.string
  }

  static getDefaultProps = {
    leftText: '返回',
    centerText: '发布问题',
    rightText: '提交'
  }

  leftClick(e) {

  }

  rightClick(e) {

  }

  render() {
    return (
      <div styleName='container'>
        <button styleName='left-btn' onClick={(e) => {
          this.leftClick(e)
        }}>{this.props.leftText}</button>
        <span>{this.props.centerText}</span>
        <button styleName='right-btn' onClick={(e) => {
          this.rightClick(e)
        }}>{this.props.rightText}</button>
      </div>
    )
  }
}
