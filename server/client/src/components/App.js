import React, { Component } from 'react';
import AddTodo from './addTodo/AddTodo';
import TodoList from './todoList/TodoList';

class App extends Component {
    state = {
        todos: [],
        completedTodos: []
    }

    handleAddTodo = obj => {
        this.setState(prevState => ({
            todos: prevState.todos.concat(obj)
        }), () => console.log(this.state.todos))
    }

    handleRemoveTodo = id => {
        this.setState( prevState => ({
            todos: prevState.todos.filter( todo => {
                return id !== todo.uid
            })
        }))
    }

    render() {
        return (
            <div>
                <h1>To-Done</h1>
                <p>Get shit done</p>
                <AddTodo
                    handleAddTodo={this.handleAddTodo}
                />
                <TodoList
                    todos={this.state.todos}
                    handleRemoveTodo={this.handleRemoveTodo}
                />
            </div>
        );
    }
}

export default App;