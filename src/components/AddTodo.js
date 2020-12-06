import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTodo = (props) => {
  const [formData, setFormData] = useState({
    todo: '',
  });

  const { todo } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formData.todo);
    setFormData({
      todo: '',
    });
  };

  return (
    <form className="input-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="todo"
        className="input-field"
        value={todo}
        required
        placeholder="Add something to do..."
        onChange={(e) => onChange(e)}
      />
      <br />
      <button type="submit" className="input-btn">Add</button>
    </form>
  );
};

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTodo;
