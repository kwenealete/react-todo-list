import React, { Component } from 'react';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
          
    };
  }

handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: '',
    notes: '',
    priole: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          
        <input
          type="text"
          placeholder="Enter task"
          value={this.state.task}
          onChange={this.handleChange}
          autoFocus
        />
        <button class="add" type="submit">
          Add Task
        </button>
      </form>
    );
  }
}