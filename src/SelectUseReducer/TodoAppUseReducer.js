import React from 'react'

import '../DevEdTodo/todo.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoAppUseReducer() {
  return (
    <div>
      <TodoForm /> 
      <TodoList />
     
    </div>
  )
}

export default TodoAppUseReducer
