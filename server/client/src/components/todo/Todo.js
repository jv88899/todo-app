import React from 'react';

const Todo = props => (
    <div className="todo">
        <p>{props.todo.todoText}</p>
        <button
            className="todo__remove-button"
            onClick={ () => props.handleRemoveTodo(props.todo.uid )}
        >
            X
        </button>
    </div>
);

export default Todo;