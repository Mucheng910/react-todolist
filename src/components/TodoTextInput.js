import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoTextInput extends Component {
  // static 定义的是类的方法只有类能调用,静态类，静态变量，内存中不消失
  static propTypes = {
    onSave: PropTypes.func.isRequired, 
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    // 布尔值
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || ''
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    // 去掉最开始的空格
    if (e.which === 13) {
      // 回车键
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  /* handleChange：默认的值修改回调函数，传入参数为 e: React.ChangeEvent<any> 对象。
所以如果使用antd-mobile组件，由于某些组件传入参数为 value 值，因此需要对此进行一定程度上的封装*/
  // this就是指向当前事件所绑定的元素，而e.target指向事件执行时鼠标所点击区域的那个元素

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
    /* handleBlur：失去焦点时默认的回调函数，传入参数为 event 对象。
 需要自定义时也需要对应的封装。这个函数和handleChange都是DOM-only的函数 */
  }

  render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
}
