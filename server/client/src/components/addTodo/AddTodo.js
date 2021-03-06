import React, { Component } from 'react';
import './addtodo.css';
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
                    className="add-todo__input"
                    value={this.state.todoText}
                    onChange={e => this.setState({ todoText: e.target.value })}
                />
                <input
                    type="submit"
                    className="add-todo__button"
                    value="Add"
                    disabled={!this.state.todoText}
                />
            </form>
        )
    }
}

export default AddTodo;