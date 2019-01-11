import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
// 动态css样式

const Link = ({ active, children, setFilter }) =>
  (
    
    <a
      className={classnames({ selected: active })}
      // classnames 为一个标签类名
      style={{ cursor: 'pointer' }}
      // 样式鼠标移动上去变成一个手
      onClick={() => setFilter()}
    >
      {children}
    </a>
  )


Link.propTypes = {
  active: PropTypes.bool.isRequired,
  // .isRequired 为props不匹配的时候可以发出警告
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default Link
