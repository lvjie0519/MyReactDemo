/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import styles from '../theme/styles/publish.css'
import CSSModules from 'react-css-modules'
import HeaderDetail from './component/headerDetail'

@CSSModules(styles, {allowMultiple: true})
export default class PublishQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  handleChange(e) {

  }
  handleSubmit() {

  }
  render() {
    return (
      <div>
        <HeaderDetail centerText='发布问题' rightText='提问' />
        <form style={{textAlign: 'center', fontSize: 18}}>
          <div>
            <p>标题：（50字以内的中文、英文或数字）</p>
            <input id='title' type='text' placeholder='请输入问题标题' onChange={this.handleChange} />
          </div>
          <div>
            <p>描述：（200字以内）</p>
            <textarea id='description' name='description' rows='30' placeholder='请输入问题描述' onChange={this.handleChange} />
          </div>
        </form>
      </div>
    )
  }
}
