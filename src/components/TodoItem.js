import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }
  // 定义默认的 编辑state状态为false

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }
  // 用户双击可以触发的函数

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
      // 如果编辑后的输入框文字长度=0,就删除这个todo任务
    } else {
      this.props.editTodo(id, text)
      // 如果编辑后的输入框文子长度!=0,改变输入框的内容
    }
    this.setState({ editing: false })
  }

  render() {
    // react生命周期中的组件渲染部分
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)} />
      )
      // 保存编辑后的的text和id
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)} />
                 {/* √ */}
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          {/* todo列表内容 */}
          <button className="destroy"
                  onClick={() => deleteTodo(todo.id)} />
                  {/* 删除按钮 */}
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}
