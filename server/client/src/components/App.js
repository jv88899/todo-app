import React, { Component } from 'react';
import AddTodo from './addTodo/AddTodo';
import TodoList from './todoList/TodoList';
import RemoveAllTodos from './removeAllTodos/RemoveAllTodos';

class App extends Component {
    state = {
        todos: [],
        completedTodos: []
    }

    componentDidMount = () => {
        // Get todos from local storage and set state
        const todos = JSON.parse(localStorage.getItem('todos'));
        const completedTodos = JSON.parse(localStorage.getItem('completedTodos'));
        this.setState( () => ({
            todos,
            completedTodos
        }))
    }

    handleAddTodo = obj => {
        // Add the new todo to todos state array
        this.setState(prevState => ({
            todos: prevState.todos.concat(obj)
        }), () => {
            const todosJSON = JSON.stringify(this.state.todos);
            localStorage.setItem('todos', todosJSON);
        })
    }

    handleRemoveTodo = (obj) => {
        // Add the object to completedTodos and update state with removed object
        this.setState( prevState => {
            return {
                completedTodos: prevState.completedTodos.concat(obj),
                todos: prevState.todos.filter( todo => {
                    return obj.uid !== todo.uid
                })
            }
        }, () => {
            const todoJSON = JSON.stringify(this.state.todos);
            const completedTodosJSON = JSON.stringify(this.state.completedTodos);
            localStorage.setItem('todos', todoJSON);
            localStorage.setItem('completedTodos', completedTodosJSON);
        })
    }

    handleRemoveAllTodos = () => {
        // Remove all todos without marking them complete
        this.setState( () => ({ todos: [] }))
    }

    // todo: Mark all todos complete (add to completedTodos)

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