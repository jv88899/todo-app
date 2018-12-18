import React from 'react';
import './markallcomplete.css';

const MarkAllComplete = props => (
    <div className="mark-complete">
        <button
            className="mark-complete__button"
            onClick={props.handleMarkAllComplete}
        >
            Mark All Complete
        </button>
    </div>
)

export default MarkAllComplete;