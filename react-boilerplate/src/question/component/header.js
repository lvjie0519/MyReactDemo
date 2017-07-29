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
    rightText: React.PropTypes.string
  }

  static getDefaultProps = {
    leftText: '答！',
    rightText: '提问'
  }

  leftClick(e) {

  }

  rightClick(e) {

  }

  render() {
    return (
      <div styleName='header-container'>
        <span styleName='left-text'>{this.props.leftText}</span>
        <button styleName='right-btn' onClick={(e) => {
          this.rightClick(e)
        }}>{this.props.rightText}</button>
      </div>
    )
  }
}
