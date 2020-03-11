/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function TodoItem(props) {
  return (
    <label htmlFor={props.item.id} className="todo-label">
      <input
        type="checkbox"
        id={props.item.id}
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <span className="todo-checkbox" />
      <span className="todo-description">{props.item.description}</span>
      <span className="todo-project">{props.item.project}</span>
    </label>
  );
}

export default TodoItem;
