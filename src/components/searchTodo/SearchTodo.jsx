import React, { Component } from 'react'

export default class SearchTodo extends Component {
  render() {
    return (
      <div>
        <input type="text" className='form-control' />
            <button className='btn btn-outline-info'>All</button>
            <button className='btn btn-outline-secondary'>Active</button>
            <button className='btn btn-outline-success'>Done</button>
      </div>
    )
  }
}
