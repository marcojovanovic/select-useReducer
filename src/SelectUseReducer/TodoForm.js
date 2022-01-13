import React, { useState } from 'react';

import { TodoContext } from './context';

function TodoForm() {
  const {makingTodo, statusHandler, status} = React.useContext(TodoContext);

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let todo = {id:Date.now(), title:input, completed:false}

    makingTodo(todo)

    setInput('')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div onChange={(e)=>statusHandler(e.target.value)} value={status} className="select">
          <select  onChange={statusHandler} value={status}  name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
