/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function TodoItem(props) {
  const todoId = `todo-item-${props.id}`;

  return (
    <div>
      <label htmlFor={todoId} className="todo-label">
        <input type="checkbox" id={todoId} checked={props.completed} />
        <span className="todo-checkbox" />
        <span className="todo-description">
          {props.description}
          &nbsp;
          {props.todoNumber}
        </span>
        <span className="todo-project">
          {props.project}
          &nbsp;
          {props.todoNumber}
        </span>
      </label>
    </div>
  );
}

export default TodoItem;
