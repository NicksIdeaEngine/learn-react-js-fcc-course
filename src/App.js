/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';

import todosData from './data/todoData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
    console.log('changed', id);
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="page">
        <Header />
        <div className="todo-list">{todoItems}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
