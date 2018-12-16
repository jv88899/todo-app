import React, { Component } from 'react';
import './todo.css';

class Todo extends Component {
    onRemoveTodo = () => {
        // set completed date for the todo
        this.props.todo.completedAt = new Date();
        this.props.handleRemoveTodo(this.props.todo);
    }

    render() {
        return (
            <div className="todo">
                <p>{this.props.todo.todoText}</p>
                <button
                    className="todo__remove-button"
                    onClick={this.onRemoveTodo}
                >
                    X
                </button>
            </div>
        )
    }
}

export default Todo;