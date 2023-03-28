import './App.css';
import React from 'react';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TodoItem from './TodoItem';

 
export default function App() { 

  const [todos, setTodos] = useState([])
  const [inp, setInp] = useState("")
  
  const handleInputTodo = (e) => {
    setInp(e.target.value)
  }



  const addTodo = (e) => {
    e.preventDefault()

    const newTodo  ={
      id:new Date().getTime(),
      title:inp,
      isCompleted:false
    }
    setTodos([...todos, newTodo])
    // console.log(todos);x
    setInp("")
  }
  
  const removeTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  

  const checkTodo = ( id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        console.log(todo);
        todo.isCompleted = !todo.isCompleted
      }

      return todo;
    });
    
    console.log(newTodos);
    setTodos(newTodos)
  }
  return (
    <div className="App m-3">
      <form onSubmit={(e) => addTodo(e)}>
        <input 
        value={inp}
        required
        placeholder="typing..."
        onChange={(e) =>handleInputTodo(e)}
        className='form-control w-25' 
        type={"text"}
        >

        </input>

        {/* <button type='submit'>submit</button> */}
      </form>

      <ul className=' list-group'>

        {
          todos.map((todo, i) => {
 
            return (
              <TodoItem key={1} index={i} todo={todo} removeTodoHandler={removeTodoHandler} checkTodoHandler={checkTodo}/>
            )
          })
        }
      </ul>
    </div>
  );
}

 