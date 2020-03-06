import React from 'react';

import TodoItem from './TodoItem';
import todoData from '../data/todoData';

function TodoList() {
  const todoComponents = todoData.map((todo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      description={todo.description}
      project={todo.project}
      todoNumber={todo.todoNumber}
      completed={todo.completed}
    />
  ));
  return <div className="todo-list">{todoComponents}</div>;
}

export default TodoList;
