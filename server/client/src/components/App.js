import React, { Component } from 'react';
import AddTodo from './addTodo/AddTodo';
import TodoList from './todoList/TodoList';
import RemoveAllTodos from './removeAllTodos/RemoveAllTodos';
import MarkAllComplete from './markAllComplete/MarkAllComplete';
import CompletedTodos from './completedTodos/CompletedTodos';
import './app.css';

class App extends Component {
    state = {
        todos: [],
        completedTodos: []
    }

    componentDidMount = () => {
        // Get todos from local storage and set state
        const todos = JSON.parse(localStorage.getItem('todos'));
        const completedTodos = JSON.parse(localStorage.getItem('completedTodos'));
        
        // if todos doesn't have a value, set it to an empty array
        if (todos) {
            this.setState( () => ({
                todos
            }))
        } else {
            this.setState( () => ({
                todos: []
            }))
        }

        // if completedTodos doesn't have a value, set it to an empty array
        if (completedTodos) {
            this.setState( () => ({
                completedTodos
            }))
        } else {
            this.setState( () => ({
                completedTodos: []
            }))
        }
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

    handleRemoveTodo = obj => {
        // Add the object to completedTodos and update state with removed object
        this.setState( prevState => {
            return {
                completedTodos: prevState.completedTodos.concat(obj),
                todos: prevState.todos.filter( todo => {
                    return obj.uid !== todo.uid
                })
            }
        }, () => {
            // Store new state items to local storage
            const todoJSON = JSON.stringify(this.state.todos);
            const completedTodosJSON = JSON.stringify(this.state.completedTodos);
            localStorage.setItem('todos', todoJSON);
            localStorage.setItem('completedTodos', completedTodosJSON);
        })
    }

    handleRemoveAllTodos = () => {
        // Remove all todos without marking them complete
        this.setState( () => ({ todos: [] }), () => {
            const todoJSON = JSON.stringify(this.state.todos);
            localStorage.setItem('todos', todoJSON);
        })
    }

    handleMarkAllComplete = () => {
        // Add all todos to completed todos
        let currentTodos = this.state.todos;
        currentTodos.forEach( todo => {
            todo.completedAt = new Date();
            this.setState( prevState => ({
                completedTodos: prevState.completedTodos.concat(todo)
            }))
        })
        this.setState( () => ({
            todos: []
        }), () => {
            const todoJSON = JSON.stringify(this.state.todos);
            const completedTodosJSON = JSON.stringify(this.state.completedTodos);
            localStorage.setItem('todos', todoJSON);
            localStorage.setItem('completedTodos', completedTodosJSON);
        })

    }

    render() {
        return (
            <div className="app">
                <div className="app__wrapper">
                    <h1>To-Done</h1>
                    <p>Get your things done</p>
                    {
                        this.state.todos.length <= 0
                            ? <p>Add a todo to get started</p>
                            : <RemoveAllTodos handleRemoveAllTodos={this.handleRemoveAllTodos}/>
                    }
                    <AddTodo
                        handleAddTodo={this.handleAddTodo}
                    />
                    {
                        this.state.todos.length > 0 &&
                        <MarkAllComplete
                            handleMarkAllComplete={this.handleMarkAllComplete}
                        />
                    }
                    <TodoList
                        todos={this.state.todos}
                        handleRemoveTodo={this.handleRemoveTodo}
                    />
                    {
                        this.state.completedTodos.length >= 5 &&
                        <CompletedTodos />
                    }
                </div>
            </div>
        );
    }
}

export default App;