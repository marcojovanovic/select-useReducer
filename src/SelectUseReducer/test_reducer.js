const test_reducer = (state, action) => {
  if (action.type === 'ADD_TODO') {
    return { ...state, todos: [...state.todos, action.payload], filterTodos: [...state.todos, action.payload] };
  }

  if (action.type === 'DELETE_TODO') {
    return {
      ...state,
      todos: state.todos.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === 'COMPLETE_TODO') {
    let newTodo = state.filterTodos.map((item) => {
      if (item.id === action.payload) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });

    return { ...state, todos: newTodo, filterTodos:newTodo };
  }

  if (action.type === 'STATUS_HANDL') {
    return { ...state, status: action.payload };
  }

  if (action.type === 'FILTER_COMPLETE') {
    if (state.status === 'completed') {
      return {
        ...state,
        filterTodos: state.todos.filter((item) => item.completed === true),
      };
    } else if (state.status === 'uncompleted') {
      return {
        ...state,
        filterTodos: state.todos.filter((item) => item.completed === false),
      };
    } else if (state.status === 'all') {
      return { ...state, filterTodos: state.todos };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default test_reducer;
