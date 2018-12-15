import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        todoText: ''
    }

    onTodoAdd = e => {
        e.preventDefault();
        this.props.handleTodoAdd({
            uid: 3,
            todoText: this.state.todoText,
            createdAt: new Date(),
            isDone: false,
            completedAt: ''
        })
        this.setState( () => ({ todoText: '' }));
    }

    render() {
        return (
            <form
                className="add-todo"
                onSubmit={this.onTodoAdd}
            >
                <div className="add-todo__message">
                    <h2>Add a todo</h2>
                </div>
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