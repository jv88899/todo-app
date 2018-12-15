import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        todoText: ''
    }

    render() {
        return (
            <form className="add-todo">
                <div className="add-todo__message">
                    <h2>Add a todo</h2>
                </div>
                <input
                    type="text"
                    value={this.state.todoText}
                    onChange={e => this.setState({ todoText: e.target.value })}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default AddTodo;