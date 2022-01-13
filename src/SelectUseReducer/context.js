import React, { createContext, useReducer } from 'react';

// 1. Reducer
import reducer from './test_reducer';

// 3. Context

export const TodoContext = createContext(); // izvoz za komponente

// 4 InitialState

const initialState = {
  todos: [],
  status: 'all',
  filterTodos: [],
};

// dispatch Functions

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const makingTodo = (todo) =>{

    dispatch({type:'ADD_TODO', payload:todo})

  }
  const deletingTodo = (id) =>{

    dispatch({type:'DELETE_TODO', payload:id})

  }
  const completingTodo = (id) =>{

    dispatch({type:'COMPLETE_TODO', payload:id})

  }

  const statusHandler = (value) =>{


    dispatch({type:'STATUS_HANDL', payload:value})


  }

  const filterHandler = () =>{


    dispatch({type:'FILTER_COMPLETE'})

  }

 

  return (
    <TodoContext.Provider
      value={{
        ...state,
        makingTodo,
        deletingTodo,
        completingTodo,
        statusHandler,
        filterHandler
        
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider }; // izvoz za index.js
