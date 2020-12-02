import React from 'react';

import Todo from './todo.js';

const Todolist = () => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                <Todo />
                <Todo />
                <Todo />
                <Todo />

            </ul>

        </div>
    );
}
export default Todolist;