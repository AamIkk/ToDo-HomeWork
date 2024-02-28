import React from 'react';
import TodoListItem from '../todoListItem/TodoListItem';

const TodoList = ({ todos, delTodo }) => {
  return (
    <ul className='list-group'>
      {todos.map((el) => (
        <li key={el.id} className='list-group-item'>
          <TodoListItem title={el.title} delTodo={delTodo} id={el.id} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
