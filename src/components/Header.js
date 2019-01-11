import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

const Header = ({ addTodo }) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text)
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
)
// 定义一个Header组件

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}
// 之前定义过的 Addtodo Action
// 使用prop-types来记录传递给组件的props,如果它们不匹配将发出警告
export default Header
