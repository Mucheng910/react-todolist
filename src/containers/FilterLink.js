import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

// 使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。
// VisibleTodoList 需要计算传到 TodoList 中的 todos，所以定义了根据 state.visibilityFilter 来过滤 state.todos 的方法，并在 mapStateToProps 中使用。
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

// 除了读取 state，容器组件还能分发 action。类似的方式，可以定义 mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法。
// VisibleTodoList 向 TodoList 组件中注入一个叫 onTodoClick 的 props ，还希望 onTodoClick 能分发 TOGGLE_TODO 这个 action：

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})
// 使用 connect() 创建 VisibleTodoList，并传入这两个函数
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
