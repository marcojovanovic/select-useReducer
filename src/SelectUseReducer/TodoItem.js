import React from 'react'

import {TodoContext} from './context'



function TodoItem({id, title,completed}) {


  const {deletingTodo, completingTodo} = React.useContext(TodoContext)




  return (
    <div className='todo'>
      <li className={`todo-item ${completed && 'completed'}`}>
        {title}
      </li>
      <button onClick={()=>completingTodo(id)} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={()=>deletingTodo(id)} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  )
}

export default TodoItem
