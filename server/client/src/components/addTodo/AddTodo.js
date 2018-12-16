import React, { Component } from 'react';
const uuidv4 = require('uuid/v4');

class AddTodo extends Component {
    state = {
        todoText: ''
    }

    onAddTodo = e => {
        e.preventDefault();
        this.props.handleAddTodo({
            uid: uuidv4(),
            todoText: this.state.todoText,
            createdAt: new Date(),
            isDone: false,
            completedAt: ''
        }, this.setState(() => ({ todoText: '' })))
    }

    render() {
        return (
            <form
                className="add-todo"
                onSubmit={this.onAddTodo}
            >
                <input
                    type="text"
                    value={this.state.todoText}
                    onChange={e => this.setState({ todoText: e.target.value })}
                />
                <input
                    type="submit"
                    className="add-todo__button"
                    value="Add"
                />
            </form>
        )
    }
}

export default AddTodo;