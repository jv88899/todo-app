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
        // Add the new todo to todos state array
        this.setState(prevState => ({
            todos: prevState.todos.concat(obj)
        }))
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