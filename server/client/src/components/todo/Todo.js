import React from 'react';

const Todo = props => (
    <div className="todo">
        <p>{props.todo.todoText}</p>
        <button>X</button>
    </div>
);

export default Todo;