import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid';
import TodoContext from '../TodoContext';

const ListTodos = (props) => {
  const context = useContext(TodoContext);
  const { state } = context;
  const { todo } = state;

  return (
    <div>
      <table className="list">
        <tbody className="list-items">
          {
            todo && todo.filter((item) => item.id !== null).map((item) => (
              <tr key={shortid.generate()}>
                <td
                  className={item.completed && 'mark-done'}
                >
                  {item.todo}
                </td>
                <td
                  onClick={() => props.onCompleteClick(item.id)}
                  role="presentation"
                >
                  <i className="far fa-check-square" />
                </td>
                <td
                  onClick={() => props.onDeleteClick(item.id)}
                  role="presentation"
                >
                  <i className="fas fa-minus-square" />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

ListTodos.propTypes = {
  onCompleteClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ListTodos;

