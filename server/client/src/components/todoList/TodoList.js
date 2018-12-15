import React from 'react';
import Todo from '../todo/Todo';

const TodoList = props => (
    <div className="todo-list">
        {
            props.todos.map( todo => (
                <Todo
                    key={todo.uid}
                    todo={todo}
                />
            ))
        }
    </div>
);

export default TodoList;