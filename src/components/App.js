import React from 'react'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'

const App = () => (
  <div>
    <Header /> 
    {/* 组件1  包含todo字样,和TodoTextInput组件 (输入框)*/}
    <MainSection />
    {/* 组件2 包含todo列表,和底部todoList的任务展示状态栏*/}
  </div>
)

export default App
