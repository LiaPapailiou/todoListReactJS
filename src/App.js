import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import todoReducer from './todoReducer';
import TodoContext from './TodoContext';
import INITIAL_STATE from './initialState';
import AddTodo from './components/AddTodo';
import List from './components/ListTodos';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <Router>
          <div className="container">
            <h2>To do</h2>
            <Route
              path="/"
              render={() => <AddTodo onSubmit={(todo) => dispatch({ type: ADD_TODO, todo })} />}
            />
            <Route
              path="/"
              render={() => (
                <List
                  onCompleteClick={(todoID) => dispatch({ type: COMPLETE_TODO, id: todoID })}
                  onDeleteClick={(todoID) => dispatch({ type: DELETE_TODO, id: todoID })}
                />
              )}
            />
          </div>
        </Router>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
