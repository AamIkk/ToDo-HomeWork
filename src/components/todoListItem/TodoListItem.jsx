import React, { Component } from 'react';

export default class TodoListItem extends Component {
  render() {
    const { title, delTodo, id } = this.props;
    return (
      <span className='d-flex align-items-center'>
        <span className='flex-grow-1'>{title}</span>
        <button className='btn btn-outline-dark' onClick={() => delTodo(id)}><i className="bi bi-trash-fill"></i></button>
        <button className='btn btn-outline-warning'><i className="bi bi-exclamation-diamond"></i></button>
      </span>
    )
  }
}
