import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './components/TodoContainer';
import './App.css';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <TodoContainer />,
);
// ReactDOM.render(<TodoContainer />, document.getElementById("root"))
