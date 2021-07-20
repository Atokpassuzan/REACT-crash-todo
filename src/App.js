import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";
import Header from './components/layout/Header'
import AddTodo from "./components/AddTodo";
import { v4 as Uuid } from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: Uuid(),
        title: "Go to Gym",
        completed: false,
      },
      {
        id: Uuid(),
        title: "Watch football match",
        completed: true,
      },
      {
        id: Uuid(),
        title: "Meeting with boss",
        completed: false,
      },
    ],
  };

  //Toggle Complete

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  AddTodo = (title) => {
    const newTodo = {
      id: Uuid(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo AddTodo={this.AddTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
