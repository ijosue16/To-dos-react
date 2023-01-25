import React from 'react';
import Todoslist from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

   handleChange = (id) => {
     this.setState((prevState) => ({
       todos: prevState.todos.map((todo) => {
         if (todo.id === id) {
           return {
             ...todo,
             completed: !todo.completed,
           };
         }
         return todo;
       }),
     }));
   };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => todo.id !== id),
      ],
    });
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <Todoslist todos={this.state.todos} handleChangeProps={this.handleChange} deleTodoProps={this.delTodo} />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
