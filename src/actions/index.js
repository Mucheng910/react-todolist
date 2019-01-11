import * as types from '../constants/ActionTypes'


//   添加新todo任务的 Action
export const addTodo = text => ({ type: types.ADD_TODO, text })
// 删除todoList的 Action
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
// 编辑todo 任务的 Action
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
// 选中和未选中单个的todo 任务的 Action
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
// 选中和未选中整个todoLists任务的 Action
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
// 删除所有选中任务的todoList任务的 Action
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
// 当前的任务展示选项 Action
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})

