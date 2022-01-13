import React, {useEffect} from 'react';

import TodoItem from './TodoItem';

import { TodoContext } from './context';

function TodoList() {


  const {filterHandler, status} = React.useContext(TodoContext);


  useEffect(() => {
    filterHandler();
  }, [status]);







  const { filterTodos } = React.useContext(TodoContext);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((item)=>{

          return <TodoItem key={item.id} id={item.id} title={item.title} completed={item.completed} />


        })}
      </ul>
    </div>
  );
}

export default TodoList;
