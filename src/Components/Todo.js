import React from 'react'
import './Todo.css';
import Todoitems from '../Components/Todoitems';
import {IoAddCircleSharp} from "react-icons/io5"


export const Todo = (props) => {
  return (
    <div>
      <h3 >Todos List</h3>
      {props.todo.length===0? "no todes display":
      props.todo.map((todos)=>{
        return<Todoitems todos = {todos} key={todos.id} onDelete={props.onDelete}/>
      })
      }
      
      
      {/* <div className='middle'>
        
        <div className='section'>Section
     <hr/>
     
     </div>
      <div className='v2'></div>
      <span>
      <button className='btn'>List: Things to Buy</button>
      <button className='btn'>List: Empty List</button>
      <button className='btn'>Add Todo -List</button>
      </span>

      <span className='btun'>
        <button1 className='add'>
        < IoAddCircleSharp/>
         <b>Add todo</b> <br/>
         Add to description
        
        </button1>
        <button2 className='add'>
        < IoAddCircleSharp/>
        <b>Add todo</b> <br/>
        
         Add to description
         
       </button2>
      </span>
     <div className='carrot'>
     <button1 className='add'>
        < IoAddCircleSharp/>
         <b>Add todo</b> <br/>
         Add to description
        
        </button1>
        <button2 className='add'>
        < IoAddCircleSharp/>
         <b>Add todo</b> <br/>
         Add to description                                                         m
        
        </button2>
     </div>
     
      </div> */}
    </div>
  )
}

export default Todo
