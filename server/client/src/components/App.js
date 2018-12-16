import React, { Component } from 'react';
import AddTodo from './addTodo/AddTodo';
import TodoList from './todoList/TodoList';
import RemoveAllTodos from './removeAllTodos/RemoveAllTodos';

class App extends Component {
    state = {
        todos: [],
        completedTodos: []
    }

    handleAddTodo = obj => {
        this.setState(prevState => ({
            todos: prevState.todos.concat(obj)
        }))
    }

    handleRemoveTodo = id => {
        this.setState( prevState => ({
            todos: prevState.todos.filter( todo => {
                return id !== todo.uid
            })
        }))
    }

    handleRemoveAllTodos = () => {
        this.setState( () => ({ todos: [] }))
    }

    render() {
        return (
            <div>
                <h1>To-Done</h1>
                <p>Get shit done</p>
                {
                    this.state.todos.length <= 0
                        ? <p>Add a todo to get started</p>
                        : <RemoveAllTodos handleRemoveAllTodos={this.handleRemoveAllTodos}/>
                }
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