import shortid from 'shortid';
import  INITIAL_STATE from './initialState';
import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO
} from './types';

const todoReducer = (state, action) => {
  const { type } = action;
  const newTodoID = shortid.generate();
  const newTodo = {
    id: newTodoID,
    todo: action.todo,
    completed: false,
  };
  switch (type) {
    case ADD_TODO:
      return {
        todo: [...state.todo, newTodo],
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todo: state.todo.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, completed: !todo.completed};
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.id),
      };
    default:
      return INITIAL_STATE;
  }
};

export default todoReducer;
