/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import '../../theme/styles/header.css'

// 头部
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
      <div className='container'>
        <button className='left-btn' onClick={(e) => {
          this.leftClick(e)
        }}>{this.props.leftText}</button>
        <span>{this.props.centerText}</span>
        <button className='right-btn' onClick={(e) => {
          this.rightClick(e)
        }}>{this.props.rightText}</button>
      </div>
    )
  }
}
