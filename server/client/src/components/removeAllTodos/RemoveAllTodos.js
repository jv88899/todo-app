import React from 'react';

const RemoveAllTodos = props => (
    <div className="remove-todos">
        <button
            className="remove-todos__button"
            onClick={props.handleRemoveAllTodos}
        >
            Remove All Todos
        </button>
    </div>
)

export default RemoveAllTodos;