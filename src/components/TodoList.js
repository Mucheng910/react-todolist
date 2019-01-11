import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({ filteredTodos, actions }) => (
  <ul className="todo-list">
    {filteredTodos.map(todo =>
      <TodoItem key={todo.id} todo={todo} {...actions} />
    )}
  </ul>
)
// todoList组件,生成列表

TodoList.propTypes = {
  
  filteredTodos: 
  PropTypes.arrayOf(
    PropTypes.shape({
      // 指定对象的结构
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired 
  }).isRequired).isRequired,

  actions: PropTypes.object.isRequired
}


// 布尔值 bool
// bool: PropTypes.bool
// 函数 function
// func: PropTypes.func
// 数字, 包括 int 和 float
// number: PropTypes.number
// 字符串 string
// string: PropTypes.string
// React元素 element包括我们自己写的各种React component， 以及常见的 {this.props.children}
// element: PropTypes.element
// 数组 Array
// array: PropTypes.array
// 数组 Array, 指定每个元素类型
// 指定数组中的元素类型为 number
// array: PropTypes.arrayOf(PropTypes.number)
// 对象 object
// obj: PropTypes.object
// 对象 object， 指定每个值的类型
// // 指定该对象的值为number
// obj: PropTypes.objectOf(PropTypes.number)

// 对象 object， 指定对象结构
// object: {
//   name: 'name',
//   password: 'password'
// }
// obj: PropTypes.shape({
//   name: PropTypes.string,
//   name: PropTypes.string
// })

// 同时指定多种类型

// oneOfTypes: React.PropTypes.oneOfType([
//       React.PropTypes.string,
//       React.PropTypes.number
//     ])
// 还可以限定属性的值

// 限定enum的值只能为'news' 或者 'photos'
// enum: PropTypes.oneOf(['news', 'photos'])
export default TodoList
