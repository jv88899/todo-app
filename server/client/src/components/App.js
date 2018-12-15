import React, { Component } from 'react';
import AddTodo from './addTodo/AddTodo';
import TodoList from './todoList/TodoList';

class App extends Component {
    state = {
        todos: [
            {
                uid: 1,
                todoText: 'Complete a project',
                createdAt: new Date(),
                isDone: false,
                completedAt: ''
            },
            {
                uid: 2,
                todoText: 'Make this work',
                createdAt: new Date(),
                isDone: false,
                completedAt: ''
            }
        ],
        completedTodos: []
    }

    render() {
        return (
            <div>
                <h1>To-Done</h1>
                <p>Get shit done</p>
                <AddTodo />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default App;