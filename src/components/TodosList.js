import React from 'react';
import TodoItem from './TodoItem';

class Todoslist extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} deleTodoProps={this.props.deleTodoProps} />
        ))}
      </ul>
    );
  }
}
export default Todoslist;
