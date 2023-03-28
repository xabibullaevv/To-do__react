import React from "react";

const TodoItem = ({index, todo, removeTodoHandler, checkTodoHandler}) => {
  return (
    <li key={index + 1} className='d-flex align-items-center  list-group-item mt-4 w-50'>
    <span className='text-danger me-3 d-inline-block'>{++index}</span>
    <input className="me-3" type={'checkbox'} onChange={() => checkTodoHandler(todo.id)} checked={todo.isCompleted}></input>
    <p className='text-warning m-0 fs-3 me-3' style={{textDecoration: todo.isCompleted ?  "line-through": "none"}}>{todo.title}</p>
    <button
     onClick={() => removeTodoHandler(todo.id)} className='btn-close border-3 rounded-2 ms-auto'>
    </button>
    </li>
  );
};

export default TodoItem;