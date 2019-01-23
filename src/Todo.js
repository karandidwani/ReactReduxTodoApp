import React from 'react'

const Todo = ({todo, onDelete}) => (
    <li className='list-group-item'>
        {todo}
        <button
            onClick ={onDelete}
            className="alert-danger"
        >X
        </button>
    </li>
);

export default Todo;